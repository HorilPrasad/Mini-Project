import { Navigate } from "react-router-dom";

export const AuthRequire = ({children}) =>{
    const user = localStorage.getItem('userId');
    if(!user)
        return <Navigate to='/login'/>

    return children;

}