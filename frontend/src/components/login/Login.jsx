import  { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import "../../css/login.css"
import singImg from "../../img/sign-up-form.png";
import {useUser} from '../shared/userContext';
import {toast} from 'react-toastify';
const Login = () => {

  const {login ,updateUser} = useUser();

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

    if (inputs.email.length < 1)
    { 
      setdanger(false); 
      toast.warn("Enter valid email!")
    } 
    if (inputs.email === "") 
    { 
      setwarnemail(true); 
      toast.warn("Enter valid email!")
    }else if (inputs.password === "") 
    { 
      setwarnpass(true); 
    }else 
    {  
      const {email,password} = inputs;
      const res = await fetch("http://localhost:5000/api/users/login",{
        method: "POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({email,password})
      });
      
      if(res.status === 200)
      {
        const data = await res.json();
        toast.success('Login Successfully!', { theme: 'colored' })
        localStorage.clear();
        login()
        const currentUser = {id:data._id,name:data.name,email:data.email,imageUrl:data.imageUrl}
        localStorage.setItem('user', JSON.stringify(currentUser));
        updateUser(currentUser);
        navigate('/')
      }
      else
        toast.error("Invalid user!",{theme:'colored'})
      
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
        <div className="cardlogin">
          <div className="form">
            <div className="left-side">
              <img src={singImg} alt="sign up image"/>
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
                  <Input className={` ${warnpass ? "warning" : ""}`} type={pass} placeholder="Enter Password" name="password"  value={inputs.password} onChange={inputEvent} />
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
                <p>Not a member? <Link to="/register">Register Now</Link></p>
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