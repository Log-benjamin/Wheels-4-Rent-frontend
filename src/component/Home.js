import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import reactLogo from './assets/9296454.gif';

function Home() {
  const navigate = useNavigate();
  const loginRouteChange = () => {
    navigate('/login');
  };
  const registerRouteChange = () => {
    navigate('/signup');
  };
  return (
    <div className="home_container">
      <img className="home_logo" src={reactLogo} alt="react logo" />
      <div className="home_inner_container">
        <h2>Renting Made Easy, Memories Made Forever</h2>
        <div className="login_register_container">
          <Button onClick={loginRouteChange} className="login_btn" variant="success">Log In</Button>
          <Button onClick={registerRouteChange} className="register_btn" variant="success">Register</Button>
        </div>
      </div>

    </div>
  );
}

export default Home;
