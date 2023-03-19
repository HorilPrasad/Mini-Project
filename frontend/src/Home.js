import React from "react";
// import Navbar from "./components/navbar";
// import "./components/navbar.css"
import "./components/home.css"

const Home = () => {
    return (
        <>
            <div className="main-sections">
                <p>Welcome to</p>
                <h1>Easy Way Home Page</h1>
            </div>

            {/* worker view */}
            <div className="main-worker">
                <h1>Our Features</h1>
                <h2> We Provide different Types of Workers</h2>    
                <div className="upper-view" >
                    <div className="w1" id="w-card">
                        <img src="labour.png" alt="" />
                        <h2>Labour</h2>
                    </div>
                    <div className="w2" id="w-card">
                        <img src="electrician.png" alt="" />
                        <h2>Electrician</h2>
                    </div>
                    <div className="w3" id="w-card">
                        <img src="plumber.png" alt="" />
                        <h2>Plumber</h2>
                    </div>
                </div>
                <div className="lower-view" >
                    <div className="w4" id="w-card">
                        <img src="carpainter.png" alt="" />
                        <h2>Carpainter</h2>
                    </div>
                    <div className="w5" id="w-card">
                        <img src="cleaner.png" alt="" />
                        <h2>Cleaner</h2>
                    </div>
                    <div className="w6" id="w-card">
                        <img src="other.jpg" alt="" />
                        <h2>Other</h2>
                    </div>
                </div>
            </div>

            
            {/* <!-- feature --> */}
            {/* <div className="features-section">
                <div className="features-text"><h2>Our Features</h2></div>
                <div className="features-content">  
                    <div className="row">
                        <div className="col">
                            <spam>We Provide the different Types of Worker</spam>
                        </div>
                    </div>    
                    <div className="row">
                        <div className="col">
                            <spam> Electrician</spam>
                        
                        </div>
                        <div className="col">
                            <spam> Plumber</spam>
                        
                        </div>
                        <div className="col">
                            <spam> Technician</spam>
                            
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <spam> Carpaineter</spam>
                        </div>
                        <div className="col">
                            <spam> Labour</spam>
                        </div>
                        <div className="col">
                            <spam> Others</spam>
                        </div>
                    </div>

                </div>
            </div> */}
        

            {/* <!-- our mission --> */}
            <div className="mission-section">
                <br></br>
                <br></br>
                <div className="mission-text"><h2>Our Mission</h2></div>
                <div className="mission-content">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo est, dolores sit in earum hic placeat quidem et ipsam corrupti dolorem quis! Accusantium possimus voluptatibus quisquam magnam sequi autem non. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim blanditiis voluptatem provident earum voluptatum maiores quod? Quia accusamus, ratione architecto unde veritatis itaque corporis aliquid nihil odit similique quibusdam ipsa!</p>
                    <br></br>
                    <br></br>
                </div>
            </div>
        </>
    );
};

export default Home;
