import React from 'react'
import { Navigate } from 'react-router-dom';

const Protectedrouter = ({children, user, redirect="/login"}) => {
 if(!user) return <Navigate to={redirect} />;

 return children;
}

export default Protectedrouter;