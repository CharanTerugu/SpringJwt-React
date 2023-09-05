

import React,{ useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './NavBar';
import jwtDecode from 'jwt-decode';
function Login() {
    
    const [username,setUsername]=useState("");
    const [passsword,setpassword]=useState("")

    const navigate=useNavigate();
   const [message,setMessage]=useState(null)

const handleSubmit=(event)=>{
    event.preventDefault();
    axios.post("http://localhost:8080/user/authenticate", {username:username,passsword:passsword}).then((res)=>
    {
        localStorage.setItem('token',res.data);
        const token=localStorage.getItem('token');
        const decodedToken = jwtDecode(token);
        const userRoles = decodedToken.roles; 
        console.log(userRoles[0].authority)
        console.log((userRoles[0].authority==='ROLE_ADMIN' )+""+userRoles.includes("ROLE_ADMIN"))
        if(userRoles[0].authority==="ROLE_ADMIN")
        {
            console.log("Admin")
            navigate('/Admin/Dashboard')
        }
        else
        {
            console.log("user")
        navigate('/Dashboard')
        }
       
    }
    ).catch(error=>{
       setMessage(error.response.data)
        console.log(error+" "+message)
      
       
    });
    
}
    
        return (
            <div className='container'>
                <Navbar/>
                <h3>{message}</h3>
               
                 <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input type="text" value={username} onChange={(event)=>{
                        setUsername(event.target.value)
                    }} name="userName" required/><br></br>
                    <label>Password:</label>
                    <input type="password" value={passsword} onChange={(event)=>{
                        setpassword(event.target.value)
                    }} name="password" required/><br></br>
                    <div>
                        <button type="submit" >Submit</button>
                    </div>
                 
                 </form>
              
            </div>
        )
    }



export default Login;