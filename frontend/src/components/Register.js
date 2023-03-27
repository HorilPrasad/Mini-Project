import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "./Authentication/Auth";
import { Button } from "./Button";
import { Input } from "./Input";
import {Divider} from "./Divider";
import "./Register.css";

const Register = () =>{
    const UserRegister = (event) =>{
      event.preventDefault();
      console.log('register button')
    }
    return (
          <div className="register-box">
            <Divider>Register</Divider>
                <form className="register-form" onSubmit={UserRegister}>
                 <div className="register-left">
                    <div className="input_text">
                    <p>User Name <span>*</span></p>
                    <Input type="text" placeholder="Enter Name" name="name" value="" onChange="" />
                    </div>
                    <div className="input_text">
                    <p>Phone <span>*</span></p>
                    <Input type="text" placeholder="Phone Number" name="name" value="" onChange="" />
                    </div>
                    <div className="input_text">
                    <p>Image Url <span>*</span></p>
                    <Input type="text" placeholder="Enter Name" name="name" value="" onChange="" />
                    </div>
                  </div>
                  <div className="register-right">
                    <div className="input_text">
                    <p>User Email <span>*</span></p>
                    <Input type="text" placeholder="Enter Email" name="email" value="" onChange="" />
                    </div>
                    <div className="input_text">
                    <p>Address <span>*</span></p>
                    <Input type="text" placeholder="Address" name="name" value="" onChange="" />
                    </div>
                    <div className="input_text">
                    <p>Password <span>*</span></p>
                    <Input type="password" placeholder="Password" name="password" value="" onChange="" />
                    </div>
                    <div className="register-btn">
                    <Button type="submit" buttonSize="btn--large">Register</Button>
                    </div>
                  </div>
                </form>
          </div>
      )
}
export default Register