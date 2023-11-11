/* eslint linebreak-style: ["error", "windows"] */
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import reactLogo from './assets/9296454.gif';

function LogIn() {
  const nameRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', nameRef.current.value);
    formData.append('password', passwordRef.current.value);

    axios.post('http://localhost:3000/token', formData)
      .then((res) => window.localStorage.setItem('jwt', res.data.jwt))
      .then(() => navigate('/welcome'));
  };
  return (
    <div className="home_container">
      <img className="home_logo" src={reactLogo} alt="react logo" />
      <div className="home_inner_container">
        <h2>Drive Your Way to Freedom, Rent a Car Today</h2>
        <div className="login_page_form_container">
          <form onSubmit={handleSubmit}>
            <input
              type="username"
              name="username"
              id="username"
              placeholder="Username"
              autoComplete="on"
              ref={nameRef}
              required
            />
            <br />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              autoComplete="off"
              ref={passwordRef}
              required
            />
            <br />
            <Button type="submit" className="login_btn login_page_btn" variant="success">Log In</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
