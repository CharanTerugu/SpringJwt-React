import React, { useState }  from "react";

import axios from "axios";
import { useEffect } from "react";


 function Users(){
    
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
   
  const [data,setData]=useState([])

useEffect(()=>{
    axios.get("http://localhost:8080/Admin/users").then(
        res=>setData(res.data)
    ).catch(err=>console.log(err))
})


     
        return (
             <div className="container">
                <table className="table">
                   <thead>
                    <tr>
                      <th> User Id</th> 
                      <th>User Name</th>
                      <th>User Role</th>
                     </tr>
                    
                   </thead>
                   <tbody>
                    {
                        data.map((user,index)=>{
                            return <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.roles}</td>
                            </tr>
                        })
                    }
                   </tbody>
                </table>
             </div>
        );
    }

export default Users;