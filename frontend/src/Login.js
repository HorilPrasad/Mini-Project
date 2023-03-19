import React from "react";
// import Navbar from "./components/navbar";
// import "./components/navbar.css"
import "./components/login.css"

const Login = () => {
    return (
        <>
            {/* <section className="main-section">
                <p>Welcome to</p>
                <h1>Easy Way Login Page</h1>
            </section> */}

            <div className="image-section">
                <img src="icon_login1.png" alt="" />
            </div>

            <div className="main-section">
                <div className="loginform">
                    <div className="form">
                        <div className="upper-container">
                            <h1>Log In</h1>
                            <p>Please fill all texts in the Fields</p>
                        </div>
            
                        <div className="lower-container">
                            <p>Your Email* : <br></br>
                                <input type="email" name="Emailid" placeholder="Your Email Address" required />
                            </p>
            
                            <p>Your Secure Password* : <br></br>
                                <input type="password" name="password" placeholder="Enter Password" required />    
                            </p>
            
                            <input type="submit" value="Login" />

                            <p>Create New Account <a href="/signup">SignUp</a></p>
            
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Login;
