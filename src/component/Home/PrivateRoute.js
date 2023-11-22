import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

export default function PrivateRoutes() {
  const token = localStorage.getItem('user');
  const result = jwtDecode(token);
  const user = result.isAdmin;
  return (
    <>
      {user ? <Outlet /> : <Navigate to="/main" />}
    </>
  );
}
