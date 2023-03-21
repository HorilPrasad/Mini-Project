import React, {useState} from "react";
import {MenuItems} from "./MenuItems"
import "./Navbar.css"
import { Button } from "../Button";
const Navbar = (props) =>{
    const [state , setState] = useState({clicked:false})
    const handleClick = () =>{
        setState({clicked:!state.clicked})
    }
    return(
        <nav className="navbar">
            <h1 className="navbar-logo">Easy Way<i className="fa-brands fa-slack"></i></h1>
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
                <a href="/login"><Button buttonStyle="btn--outline">Login</Button></a>
                </ul>
            
        </nav>
    );
}
export default Navbar