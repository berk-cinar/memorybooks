import './App.css';
import Navbar from './components/Navbar';

import {BrowserRouter, Routes, Route} from "react-router-dom"
import Services from './components/Services';
import Home from './components/Home';
import About from './components/About';
import ServicesAdmin from './components/admin/ServicesAdmin';
import ListAdmins from './components/admin/ListAdmins';
import AddAdmins from './components/admin/AddAdmins';
import LoginAdmins from './components/admin/LoginAdmin';
import AdminDash from './components/admin/AdminDash';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
       <Navbar/>

    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/admin/services" element={<ServicesAdmin/>} />
      <Route path="/admin/list" element={<ListAdmins/>} />
      <Route path="/admin/add" element={<AddAdmins/>} />
      <Route path="/admin/login" element={<LoginAdmins/>} />
      <Route path="/admin/dashboard" element={<AdminDash/>} />
    </Routes>
       <Footer/>
    
    </BrowserRouter>
    </>
  );
}

export default App;
