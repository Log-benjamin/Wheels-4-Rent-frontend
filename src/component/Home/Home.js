import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import lambergini from '../../assets/9296454.gif';
import '../../style/homepage.css';

const Home = () => {
  const navigate = useNavigate();
  const loginRouteChange = () => {
    navigate('/login');
  };
  const registerRouteChange = () => {
    navigate('/signup');
  };
  return (
    <div className="homepage_container">
      <img className="homepage_bg_logo" src={lambergini} alt="homepage_bg_logo" />
      <div className="homepage_inner_container">
        <h1>Wheels-4-Rent</h1>
        <h2>Renting Made Easy, Memories Made Forever</h2>
        <div className="homepage_log_reg_container">
          <Button onClick={loginRouteChange} className="homepage_login_btn" variant="success">Log In</Button>
          <Button onClick={registerRouteChange} className="homePage_register_btn" variant="success">Register</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
