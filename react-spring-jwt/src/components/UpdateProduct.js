
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function UpdateProduct(){




const token=localStorage.getItem('token');
console.log(token)
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

const [data,setData]=useState([]);
useEffect(()=>{
    axios.get("http://localhost:8080/getAll").then(
        res=>setData(res.data)
    ).catch(err=>console.log(err))
},[])
return(
    <div className="container">
        <table className="table">
                   <thead>
                    <tr>
                      <th>Product Id</th> 
                      <th>Product Name</th>
                      <th>Product Price</th>
                     </tr>
                    
                   </thead>
                   <tbody>
                    {
                        data.map((product,index)=>{
                            return <tr key={index}>
                                <td>{product.id}</td>
                                <td>{product.productName}</td>
                                <td>{product.price}</td>
                                <td><Link to={`/Admin/Dashboard/product/update/${product.id}`}>Update</Link></td>
                            </tr>
                        })
                    }
                   </tbody>
                </table>
    </div>
)

}

export default UpdateProduct;