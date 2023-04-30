import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/nav/Navbar"
import Footer from "./components/footer/footer"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Feedback from "./components/feedback/Feedback"
import Services from "./components/services/Services"
import ContactUs from "./components/contact/ContactUs"
import { UserProvider } from "./components/shared/userContext"
import Workers from "./components/services/Workers"
import Profile from "./components/worker_profile/Profile"
import {RequiredAuth} from './components/Auth/AuthRequire'
import { AlreadyLoged } from "./components/Auth/AlreadyLoged"

const App = () =>{
  return(
    <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<AlreadyLoged><Login/></AlreadyLoged>}/>
        <Route path="/register" element={<AlreadyLoged><Register/></AlreadyLoged>}/>
        <Route path="/feedback" element={<Feedback/>}/>
        <Route path="/workers" element={<RequiredAuth><Services/></RequiredAuth>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/workers/:name" element={<RequiredAuth><Workers/></RequiredAuth>}/>
        <Route path="/users/profile/:id" element={<RequiredAuth><Profile/></RequiredAuth>}/>
      </Routes>
      <Footer/>
      <ToastContainer/>
    </BrowserRouter>
  )
}


export default App