

import React,{Component} from 'react'

import { Link, Outlet } from 'react-router-dom';

class AdminDashBoard extends Component{
    
    logout() {
       localStorage.removeItem('token'); 
      console.log("token "+localStorage.getItem('token'))
      
      }
    render(){
        return (
            <div className='dashboard'>
                  <div className='links'>
                    <Link to="/Admin/Dashboard/users">Users</Link>
                    <Link to="/Admin/Dashboard/Product/add">Add Product</Link>
                    <Link to="/"> <button className="logout" onClick={this.logout}  >Logout</button></Link> 
                    <Link to="/Dashboard/Product/view">View Product</Link>
                    <Link to="/Admin/Dashboard/Product/update">Update Product</Link>
                  </div>
                  
           <Outlet/>
           
            </div>
        )
    }

}

export default AdminDashBoard;