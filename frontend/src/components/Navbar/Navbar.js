import React, {useState} from "react";
import {MenuItems} from "./MenuItems"
import "./Navbar.css"
import { Button } from "../Button";
import img from "../../image/way.png"
import { Link } from "react-router-dom";
const Navbar = () =>{
    const [state , setState] = useState({clicked:false})
    const handleClick = () =>{
        setState({clicked:!state.clicked})
    }
    return(
        <nav className="navbar">
            <h1 className="navbar-logo">Easy<img src={img} className="logo"></img>Way</h1>
            <div className="menu-icon" onClick={handleClick}>
                 <i className={state.clicked?'fas fa-times':'fas fa-bars'}></i>
            </div>
            <ul className={state.clicked?'nav-menu active':'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
                <Link className="nav-btn" to="/login"><Button  buttonStyle="btn--outline">Login</Button></Link>
                </ul>
            
        </nav>
    );
}
export default Navbar