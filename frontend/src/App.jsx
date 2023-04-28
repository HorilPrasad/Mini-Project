import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/nav/Navbar"
import Footer from "./components/footer/footer"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Feadback from "./components/feadback/Feadback"
import Services from "./components/services/Services"
import ContactUs from "./components/contact/ContactUs"
import { UserProvider } from "./components/shared/userContext"
import Workers from "./components/services/Workers"
import Profile from "./components/worker_profile/Profile"

const App = () =>{
  return(
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/feadback" element={<Feadback/>}/>
        <Route path="/workers" element={<Services/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/workers/:name" element={<Workers/>}/>
        <Route path="/users/profile/:id" element={<Profile/>}/>
      </Routes>
      <Footer/>
      <ToastContainer/>
    </BrowserRouter>
  )
}


export default App