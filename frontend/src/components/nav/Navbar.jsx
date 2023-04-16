import { useEffect, useState } from "react";
import { MenuItems } from "./MenuItems";
import img from '../../img/way.png'
import { Link } from "react-router-dom";
import '../../css/navbar.css'
import { Button } from "../button/Button";
const Navbar = () =>{
    const [state , setState] = useState({clicked:false})
    const user =  JSON.parse(localStorage.getItem('user'));
    let userImg = "https://static.vecteezy.com/system/resources/previews/002/002/257/original/beautiful-woman-avatar-character-icon-free-vector.jpg";
    if(user != null && user.imageUrl != '')
        userImg = user.imageUrl;
    
    console.log(user)
    useEffect(()=>{
        
    })

    
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
                <li><Link className={user?'nav-btn-login':'nav-btn'} to="/login"><Button >Login</Button></Link></li>
                <li><img className={user?'nav-profile-pic':'nav-profile'} src={userImg} alt="pic"/></li>
                </ul>
            
        </nav>
    );
}
export default Navbar