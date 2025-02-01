import './App.css';
import { Routes,Route } from 'react-router-dom';
import Login from './pages/Admin/Login'
import Dashboard from './pages/Admin/Dashboard';
import Sales from './pages/Admin/Sales';
import AllProducts from './pages/Admin/Allproduct';
import EditProducts from './pages/Admin/Editproduct';
import Status from './pages/Admin/Status';
import Order from './pages/Admin/Order';
import Shipping from './pages/Admin/Shipping';
import Profile from './pages/Admin/Profile';
import Profiled from './pages/Admin/Profiled';
import Message from './pages/Admin/Message';
import OrderDetail from './pages/Admin/Orderdetail';
import CourierDetail from './pages/Admin/Courierdetail';
import SocialLinks from './pages/Admin/SocialLinks';
import Employee from './pages/Admin/Employee';
import NewEmployee from './pages/Admin/NewEmployee';
import Category from './pages/Admin/Category';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/sales" element={<Sales />} />
    <Route path='/allproduct' element={<AllProducts />} />
    <Route path='/editproduct' element={<EditProducts />} />
    <Route path='/status' element={<Status />} />
    <Route path='/order' element={<Order />} />
    <Route path="/order/:id" element={<OrderDetail />} />
    <Route path="/courier/:code" element={<CourierDetail />} />
    <Route path='/shipping' element={<Shipping />} />
    <Route path='/profile' element={<Profile />} />
    <Route path="/profiled" element={<Profiled />} />
    <Route path="/message" element={<Message />} />
    <Route path="/sociallinks" element={<SocialLinks />} />
    <Route path="/employee" element={<Employee />} />
    <Route path="/newemployee" element={<NewEmployee />} />
    <Route path="/category" element={<Category />} />

  </Routes>
  );
}

export default App;
