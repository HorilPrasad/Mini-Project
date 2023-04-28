import { useEffect, useLayoutEffect, useState } from "react";
import { MenuItems } from "./MenuItems";
import img from '../../img/way.png'
import { Link } from "react-router-dom";
import '../../css/navbar.css'
import { Button } from "../button/Button";
import { useUser } from "../shared/userContext";
const Navbar = () =>{
    const [state , setState] = useState({clicked:false});
    const {user , updateUser,loginStatus,login} = useUser();
    const currentUser = localStorage.getItem('user');
    
    useEffect(() =>{
        if(currentUser)
        {    
            updateUser(JSON.parse(currentUser));
            login()
        }
    },[loginStatus])

   
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
                            <Link className={item.cName} to={item.url}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
                {
                    loginStatus ? <li><Link className="nav-links-mobile" to='/profile'>{user.name}</Link></li>
                    :<li><Link className="nav-links-mobile" to='/login'>login</Link></li>
                }
                {
                    loginStatus ?<li><Link  to={`/users/profile/${user.id}`}><img className='nav-profile-pic' src={user.imageUrl} alt="pic"/></Link></li> 
                    :<li><Link className='nav-btn' to="/login"><Button>Login</Button></Link></li>
                    
                }
                
                
                </ul>
            
        </nav>
    );
}
export default Navbar