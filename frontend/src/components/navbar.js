import React from "react";
import "./navbar.css";

const Navbar = () => {
    return (
        <>
            <nav className = "main-nav">
                {/* Logo */}
                <div className="logo">
                    <h2>
                        <span>E</span>asy
                        <span>  W</span>ay
                    </h2>
                </div>

                {/* Navigation link */}
                <div className="menu-link">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/service">Service</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                        <li>
                            <a href="/login">Login</a>
                        </li>
                        <li>
                            <a href="/signup">Signup</a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Main section */}
            {/* <section className="main-section">
                <p>Welcome to</p>
                <h1>Easy Way</h1>
            </section> */}
        </>
    );
};

export default Navbar