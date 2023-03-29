import React from "react";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Login from "./components/Login";
import Signup from "./Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer";
import UserWorker from "./UserWorker";
import UserCust from "./UserCust";
import Admin from "./Admin";
import UserReg from "./UserReg";
import { AuthProvider } from "./components/Authentication/Auth";
import Register from "./components/Register";
import { RequiredAuth } from "./components/Authentication/RequiredAuth";

const App = () => {
  return(
  <BrowserRouter>
    
      <Navbar />
      <AuthProvider>
      <Routes>
        <Route path = "/" element = {<RequiredAuth><Home /></RequiredAuth>} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/service" element = {<Service />} />
        <Route path = "/contact" element = {<Contact />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/signup" element = {<Register />} />
        <Route path = "/worker" element = {<UserWorker />} />
        <Route path = "/customer" element = {<UserCust />} />
        <Route path = "/admin" element = {<Admin />} />
        <Route path = "/userreg" element = {<UserReg />} />
      </Routes>
      </AuthProvider>
      <Footer/>
    
    </BrowserRouter>
  ); 
};

export default App;
