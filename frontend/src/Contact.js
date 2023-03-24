import React from "react";
import "./components/contact.css"

const Contact = () => {
    return (
        <>
            {/* <!-- contact form --> */}
            <div className="container">
                <div className="upper-container">
                    <h1>Contact Form</h1>
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

                    <p>Massage : <br></br>
                    <textarea name="massage" id="massage" cols="30" rows="3" placeholder="Enter Your Address"></textarea> 
                    </p>
                
                    <input type="submit" value="Send" />

                </div>
            </div>
        </>
    );
};

export default Contact;
