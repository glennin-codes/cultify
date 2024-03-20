import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from '../hooks/UseAuthStore';


interface ProtectedRoutes{
    children:ReactNode
}

const ProtectedRoute:React.FC<ProtectedRoutes> = ({children }) => {
  
    const { checkAuthentication,isAuthenticated } = useAuthStore();

    const token =localStorage.getItem("token")
  return (
    <>
    {
   !token? (
    <Navigate to="/login" />
        ) : (
          
            <>{children}</>
        )
        
}
</>
  );
};

export default ProtectedRoute;
