import { Navigate } from "react-router-dom";
export const RequiredAuth = ({children}) =>{
    const user = localStorage.getItem('user');
    console.log(user);
    if(!user)
        return <Navigate to='/login'/>

    return children;

}