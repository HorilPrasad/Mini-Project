import React from "react";
// import Navbar from "./components/navbar";
// import "./components/navbar.css"
import "./components/signup.css"

const UserReg = () => {
    return (
        <>
            {/* <section className="main-section">
                <p>Welcome to</p>
                <h1>Easy Way Signup Page</h1>
            </section> */}
            
            <div className="image-section">
                <img src="bg.jpg" alt="Not Found" />
            </div>

            {/* <!-- contact form --> */}
            <div className="container">
                <div className="upper-container">
                    <h1>Register Page</h1>
                    <p>Please fill all texts in the Fields</p>
                </div>

                <div className="lower-container">
                    <p>Your Name : <br></br>
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    </p>

                    <p>Your Email : <br></br>
                    <input type="email" name="name" placeholder="Your Email Address" required />
                    </p>

                    <p>Your Phone Number : <br></br>
                    <input type="text" name="name" placeholder="Your Phone Number" required />
                    </p>

                    <p>Your Password : <br></br>
                    <input type="password" name="name" placeholder="Your Password" required />
                    </p>

                    <p>Confirm Password : <br></br>
                    <input type="password" name="name" placeholder="Retype Password" required />
                    </p>

                    {/* <p>City <br></br>
                        <select name="sub_name" id="sub_name" required>
                            <option value="">--Select a City--</option>
                            <option value="">Prayagraj</option>
                            <option value="">Delhi</option>
                            <option value="">Patna</option>
                            <option value="">Noida</option>
                            <option value="">Hydrabad</option>
                        </select>
                    </p> */}

                    <p>Your City : <br></br>
                    <input type="text" name="name" placeholder="Allahabad" required />
                    </p>
                
                    <input type="submit" value="Register" />

                    <p>Register as Worker <a href="/signup">Click Here</a></p>
                    <p>Already having Account <a href="/login">Log In</a></p>

                </div>
            </div>
        </>
    );
};

export default UserReg;
