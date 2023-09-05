import React,{ useState} from 'react'
import Navbar from './NavBar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Register(){
    const navigate=useNavigate()
    const[name,setName]=useState("")
    const[password,setPassword]=useState("")
    const[roles,setRoles]=useState("")
const handleSubmit=(event)=>{
    console.log(name+""+password+""+roles)
    event.preventDefault();
    axios.post("http://localhost:8080/user/register", {name:name,password:password,roles:roles}).then((res)=>
    {
       alert("registered succesfully")
        navigate('/login')
       
    }
    ).catch(err=>{
        alert(err)
    });

}
    
        return (
            <div className='container'>
                <Navbar/>
                 <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(event)=>{setName(event.target.value)}} name="userName" required/><br></br>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(event)=>{setPassword(event.target.value)}} name="password" required/><br></br>
                    <label>Roles:</label>
                    <input type="text" value={roles} onChange={(event)=>{setRoles(event.target.value)}} name="roles" required/><br></br>
                    <div>
                        <button type="submit" >Submit</button>
                    </div>
                 
                 </form>
            </div>
        )
    

}

export default Register;