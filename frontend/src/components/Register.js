import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from "./Button";
import { Input } from "./Input";
import {Divider} from "./Divider";
import "./Register.css";

const Register = () =>{
  const navigate = useNavigate();
  const [Inputs,setInputs] = useState({
    name:"",
    email:"",
    password:"",
    address:"",
    phone:"",
    imageUrl:""
  });
  
  const inputEvent = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    
    setInputs((lastValue) => {
      return {
        ...lastValue,
        [name]: value
      }
    });
  };
  const UserRegister = async (event) =>{
    event.preventDefault();

    if(Inputs.email === "" || Inputs.password==="" || Inputs.phone==="")
      alert('All fields mandatory!')
    else{

      const res = await fetch('/api/users/register',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(Inputs)
      });

      if(res.status === 201)
      {
        const data = await res.json();
        console.log(data);
        localStorage.clear();
        localStorage.setItem('userId',data._id);
        navigate('/');
      }else{
        alert('Problem in registration!')
      }
    }

  }
    return (
          <div className="register-box">
            <Divider>Register</Divider>
                <form className="register-form" onSubmit={UserRegister}>
                 <div className="register-left">
                    <div className="input_text">
                    <p>User Name <span>*</span></p>
                    <Input type="text" placeholder="Enter Name" name="name" value={Inputs.name} onChange={inputEvent} />
                    </div>
                    <div className="input_text">
                    <p>Phone <span>*</span></p>
                    <Input type="text" placeholder="Phone Number" name="phone" value={Inputs.phone} onChange={inputEvent} />
                    </div>
                    <div className="input_text">
                    <p>Image Url <span>*</span></p>
                    <Input type="text" placeholder="Image url" name="imageUrl" value={Inputs.imageUrl} onChange={inputEvent} />
                    </div>
                  </div>
                  <div className="register-right">
                    <div className="input_text">
                    <p>User Email <span>*</span></p>
                    <Input type="text" placeholder="Enter Email" name="email" value={Inputs.email} onChange={inputEvent} />
                    </div>
                    <div className="input_text">
                    <p>Address <span>*</span></p>
                    <Input type="text" placeholder="Address" name="address" value={Inputs.address} onChange={inputEvent} />
                    </div>
                    <div className="input_text">
                    <p>Password <span>*</span></p>
                    <Input type="password" placeholder="Password" name="password" value={Inputs.password} onChange={inputEvent} />
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