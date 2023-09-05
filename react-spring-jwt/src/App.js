
import './App.css';
import {Routes, Route} from "react-router-dom"
import Register from './components/Register';

import Home from './components/Home';
import Login from './components/login';
import Users from './components/Users'
import DashBoard from './components/DashBoard';
import AddProduct from './components/AddProduct';
import ViewProducts from './components/ViewProducts';
import UpdateProduct from './components/UpdateProduct';
import Update from './components/Update';
import AdminDashBoard from './components/AdminDashboard';
function App() {
  return (
    <div className="App">
      
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/Admin/Dashboard' element={<AdminDashBoard/>}/>
           <Route path='/Admin/Dashboard/users' element={<Users/>} /> 
          <Route path='/Admin/Dashboard/Product/add' element={<AddProduct/>}/>
          <Route path='/Admin/Dashboard/Product/update' element={<UpdateProduct/>}/>
          <Route path='/Admin/Dashboard/Product/update/:id' element={<Update/>}/>


          <Route path='/Dashboard' element={<DashBoard />} />
          {/* <Route path='/Dashboard/users' element={<Users/>} /> */}
          
          <Route path='/Dashboard/Product/view' element={<ViewProducts/>}/>
          
      </Routes>
      
    </div>
  );
}

export default App;
