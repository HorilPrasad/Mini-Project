import { Navigate } from "react-router-dom";
import { useAuth } from "./Auth";

export const RequiredAuth = ({children}) =>{
    const auth = useAuth();
    const user = localStorage.getItem('userId');
    console.log(user);
    if(!user)
        return <Navigate to='/login'/>

    return children;

}