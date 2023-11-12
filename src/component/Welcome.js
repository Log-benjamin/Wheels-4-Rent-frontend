/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

function Welcome() {
  const token = localStorage.getItem('user');
  const result = jwtDecode(token);
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
    navigate('/');
  };
  return (
    <>
      <h2>Welcome to the main </h2>
      <h2>{result.name}</h2>
      <h3>{result.email}</h3>
      <button type="button" onClick={handleLogOut}>Logout</button>
    </>
  );
}

export default Welcome;
