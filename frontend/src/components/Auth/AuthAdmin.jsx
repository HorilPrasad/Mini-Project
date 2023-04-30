import React from 'react'
import { useUser } from '../shared/userContext'
import { useNavigate } from 'react-router-dom';
export const AuthAdmin = ({children}) => {
    const {user,loginStatus} = useUser();
    const navigate = useNavigate();

    if(loginStatus && user.userType === 'admin')
        return children;

    navigate('/');
}
