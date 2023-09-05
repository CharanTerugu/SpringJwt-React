import React,{ useState} from 'react'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AddProduct(){
    const navigate=useNavigate()
    const[productName,setProductName]=useState("")
    const[price,setPrice]=useState("")
    
const handleSubmit=(event)=>{

    event.preventDefault();
    axios.post("http://localhost:8080/Admin/add", {productName:productName,price:price}).then((res)=>
    {
     console.log("Product added successfully")
        navigate('/Admin/Dashboard')
       
    }
    ).catch(err=>{
        alert(err)
    });

}
    
        return (
            <div className='container'>
                
                 <form onSubmit={handleSubmit}>
                    <label>ProductName:</label>
                    <input type="text" value={productName} onChange={(event)=>{setProductName(event.target.value)}} name="ProductName" required/><br></br>
                    <label>Price:</label>
                    <input type="number" value={price} onChange={(event)=>{setPrice(event.target.value)}} name="Price" required/><br></br>
                    
                    <div>
                        <button type="submit" >Submit</button>
                    </div>
                 
                 </form>
            </div>
        )
    

}

export default AddProduct;