import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { getLogedin } from './components/auth/Hlogin';

const PrivateRoute = () => {
   // // privateroute
   // if (getLogedin()) {
   //    return (
   //       <div>
   //          <Outlet />
   //       </div>
   //    );
   // } else {
   //    return (
   //       <Navigate to="/login" />
   //    );
   // }

   const authToken = localStorage.getItem("token")
   return authToken ? <Outlet/>:<Navigate to ="/login"/>

   
}

export default PrivateRoute;