import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Button } from "./components/button/Button"
import { Divider } from "./components/divider/Divider"
import { Input } from "./components/input/Input"
import Navbar from "./components/nav/Navbar"
import Footer from "./components/footer/footer"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import { AuthRequire } from "./components/Auth/AuthRequire"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Feadback from "./components/feadback/Feadback"
import WorkerProfile from "./components/worker_profile/WorkerProfile"
const App = () =>{
  return(
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" Component={Login}/>
        <Route path="/register" Component={Register}/>
        <Route path="/feadback" Component={Feadback}/>
        <Route path="/profile" Component={WorkerProfile}/>
      </Routes>
      <Footer/>
      <ToastContainer/>
    </BrowserRouter>
  )
}


export default App