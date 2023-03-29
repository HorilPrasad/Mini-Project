import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "./Authentication/Auth";
import { Button } from "./Button";
import { Input } from "./Input";
import "./Login.css"
const Login = () => {

 const [user, setUser] = useState('');
 const auth = useAuth();

  const navigate = useNavigate();
  const [inputs, setinputs] = useState({
    email: "",
    password: ""
  });

  const [warnemail, setwarnemail] = useState(false);
  const [warnpass, setwarnpass] = useState(false);
  const [danger, setdanger] = useState(true);

  const [eye, seteye] = useState(true);
  const [pass, setpass] = useState("password");



  const inputEvent = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "email") {
      if (value.length > 0) {
        setdanger(true);
      }
    }
    setinputs((lastValue) => {
      return {
        ...lastValue,
        [name]: value
      }
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setwarnemail(false);
    setwarnpass(false);

    // setUser(inputs.email)
    // auth.login(user);
    // console.log(auth.user)
    localStorage.clear();
    localStorage.setItem('name',"horil");
    if (inputs.email.length < 1)
    { 
      setdanger(false); 
    } 
    if (inputs.email === "") 
    { 
      setwarnemail(true); 
    }else if (inputs.password === "") 
    { 
      setwarnpass(true); 
    }else 
    {  
      const {email,password} = inputs;
      const res = await fetch("/api/users/login",{
        method: "POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({email,password})
      });
      const data = await res.json();
      
      console.log(data);
    
      if(res.status === 200)
      {
        setUser(data.email);
        console.log(user);
        auth.login(user);
        navigate('/');
      }
      else
        alert("error")
      
    }
    
  }; 
  const Eye = () => {
    if (pass === "password") {
      setpass("text");
      seteye(false);
    } else {
      setpass("password");
      seteye(true);
    }
  };
  return (
    <>
      <div className="contain">
        <div className="card">
          <div className="form">
            <div className="left-side">
              <img src={require('../image/sign-up-form.png')} alt=""/>
            </div>

            <div className="right-side">
              <div className="hello">
                <h2>Hello Again!</h2>
                <h4>Welcome back you have been missed! </h4>
              </div>

              <form onSubmit={submitForm}>
                <div className="input_text">
                  <Input className={` ${warnemail ? "warning" : ""}`} type="text" placeholder="Enter Email" name="email" value={inputs.email} onChange={inputEvent} />
                  <p className={` ${danger ? "danger" : ""}`}><i className="fa fa-warning"></i>Please enter a valid email address.</p>
                </div>
                <div className="input_text">
                  <Input className={` ${warnpass ? "warning" : ""}`} type={pass} placeholder="Enter Password" name="password" value={inputs.password} onChange={inputEvent} />
                  <i onClick={Eye} className={`fa ${eye ? "fa-eye-slash" : "fa-eye"}`}></i>
                </div>
                <div className="recovery">
                  <p>Recovery Password</p>
                </div>
                <div>
                  <Button buttonSize="btn--full">Sign in</Button>
                </div>

              </form>
              <div className="register">
                <p>Not a member? <a href="#">Register Now</a></p>
              </div>

              <hr />
              <div className="or">
                <p>or signin with</p>
              </div>
              <div className="boxes">
                <span><img src="https://imgur.com/XnY9cKl.png" /></span>
                <span><img src="https://imgur.com/ODlSChL.png" /></span>
                <span><img src="https://imgur.com/mPBRdQt.png" /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login