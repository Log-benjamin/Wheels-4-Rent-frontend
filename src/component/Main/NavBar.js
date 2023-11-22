import React from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import '../../style/topnavbar.css';

const NavBar = () => {
  const token = localStorage.getItem('user');
  const result = jwtDecode(token);
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('carID');
    localStorage.removeItem('startdate');
    localStorage.removeItem('enddate');
    navigate('/');
  };
  return (
    <>
      <Navbar className="navbar_container">
        <Navbar.Brand className="company_name">Wheels-4-Rent</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="user_name">
            Welcome:
            {' '}
            {result.name}
            {' '}
          </Navbar.Text>
          <Button type="button" className="logout-btn" onClick={handleLogOut} variant="outline-info">Log out</Button>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
