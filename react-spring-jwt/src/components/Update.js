import React,{ useEffect, useState} from 'react'

import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function Update(){
    const token=localStorage.getItem('token');

    console.log(token)
     const navigate=useNavigate();
    axios.interceptors.request.use(
        config=>{
            config.headers.Authorization=`Bearer ${token}`;
            console.log(config)
            return config
        },
        error=>{
            return Promise.reject(error)
        }
    );

    const {id}=useParams();
    const [values,setValues]=useState({
        id:id,
        productName:"",
        price:""
    })


useEffect(()=>{
    axios.get("http://localhost:8080/Admin/get/"+id).then(
        res=>{setValues({...values,productName:res.data.productName,price:res.data.price})}
    ).catch(err=>{console.log(err)})
},[])

const handleSubmit=(event)=>{

    event.preventDefault();
    console.log(values)
    axios.put("http://localhost:8080/Admin/update/"+id, values).then((res)=>
    {
     console.log("Product updated successfully")
        navigate('/Admin/Dashboard');
       
    }
    ).catch(err=>{
        alert(err)
    });

}
    
        return (
            <div className='container'>
                
                 <form onSubmit={handleSubmit}>
                    <label>ProductName:</label>
                    <input type="text" value={values.productName} onChange={(event)=>{setValues({...values,productName:event.target.value})}} name="ProductName" required/><br></br>
                    <label>Price:</label>
                    <input type="number" value={values.price} onChange={(event)=>{setValues({...values,price:event.target.value})}} name="Price" required/><br></br>
                    
                    <div>
                        <button type="submit" >Submit</button>
                    </div>
                 
                 </form>
            </div>
        )
    

}

export default Update;