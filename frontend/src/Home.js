import React,{useEffect, useState} from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./components/Authentication/Auth";
import Card from "./components/Card";
import { Divider } from "./components/Divider";
import { ServiceList } from "./components/ServiceList";
import './components/home.css';
import { Button } from "./components/Button";
import { ReviewCard } from "./components/ReviewCard";
const Home = () => {
    const auth = useAuth();
    return (
        <>
            <section className="hero">
                <div className="hero-left">
                    <h1>We give services, you give love in return</h1>
                    <p>We are a certified company. We Provide the best services like <strong>cleaning, electrician, carpainter, plumber</strong> etc. </p>
                    <Button buttonSize="btn--large">Explore</Button>
                </div>
                <div className="hero-right">
                    <img src="https://www.freepnglogos.com/uploads/workers-png/workers-how-build-loyal-construction-staff-steps-5.png" alt="heor image"/>
                </div>
            </section>
            {/* Services */}
            <div className="services-dividor">
                <Divider>Services</Divider>
            </div>
            <section className="services">
            {ServiceList.map((item, index) => {
                    return (
                        <Card key={index} service={item.title} imageUrl = {item.imageUrl}></Card>
                    )
                })}
            </section>
            {/* <!-- About Us --> */}
            <div className="about-divider">
                <Divider>About Us</Divider>
            </div>
            <section className="about-us">
                <div className="about-left">
                    <div className="about-left-card1">
                        <Card type= "card-only-image" imageUrl="https://c8.alamy.com/comp/2HX2KRK/cleaner-girl-working-2HX2KRK.jpg"></Card>
                    </div>
                    <div className="about-left-card">
                        <Card type= "card-only-image" imageUrl="https://d340nzc93vsu6w.cloudfront.net/pubredesign/img/young-housewife-cleaning-with-rug-detergent-isolated.png"></Card>
                    </div>
                </div>
                
                <div className="about-right">
                    <h1>Why will you Choose our services?</h1>
                    <p className="about-tagline">Efficient, Friendly, Residential & Commercial Workers. Your Satisfaction is guaranteed</p>
                    <ul>
                        <li>
                        <img src="https://static.vecteezy.com/system/resources/previews/010/160/867/non_2x/check-mark-icon-sign-design-free-png.png" alt="check" height="20px" width="20px"/>
                        <p>Easy to get help</p></li>
                        <li>
                            <img src="https://static.vecteezy.com/system/resources/previews/010/160/867/non_2x/check-mark-icon-sign-design-free-png.png" alt="check" height="20px" width="20px"/>
                            <p>Saves your time</p></li>
                        <li>
                        <img src="https://static.vecteezy.com/system/resources/previews/010/160/867/non_2x/check-mark-icon-sign-design-free-png.png" alt="check" height="20px" width="20px"/>
                        <p>Seamless Communication</p>
                        </li>
                        <li>
                        <img src="https://static.vecteezy.com/system/resources/previews/010/160/867/non_2x/check-mark-icon-sign-design-free-png.png" alt="check" height="20px" width="20px"/>
                        <p>Provide professional workers</p>
                        </li>
                    </ul>
                    <Button buttonSize="btn--large">View Details</Button>
                </div>
            </section>

            <div className="review-divider">
                <Divider>User reviews</Divider>
            </div>

            <section className="review">
                <div className="review-card">
                    
                    <img className="review-user-img" src="https://www.hubspot.com/hubfs/how-to-create-user-accounts-and-profiles.jpeg" alt="review user image"></img>
                    <p className="review-detail"></p>
                    <h2 className="review-user-name">Horil Prasad</h2>
                    
                    
                </div>
            </section>
        </>
    );
};

export default Home;
