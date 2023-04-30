import react from 'react'
import { useNavigate } from 'react-router-dom';
import { useUser } from '../shared/userContext'

export const AlreadyLoged = ({children}) => {
    const navigate = useNavigate();
    const {loginStatus} = useUser();
    if(loginStatus)
        navigate('/');
    
  return children;
}
