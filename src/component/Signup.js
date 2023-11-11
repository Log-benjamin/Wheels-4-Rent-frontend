/* eslint linebreak-style: ["error", "windows"] */
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import reactLogo from './assets/9296454.gif';

function Register() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', nameRef.current.value);
    formData.append('email', emailRef.current.value);
    formData.append('password', passwordRef.current.value);

    axios.post('http://localhost:3000/registration', formData).then(() => navigate('/login'));
  };

  return (
    <div className="home_container">
      <img className="home_logo" src={reactLogo} alt="react logo" />
      <div className="home_inner_container">
        <h2>Your Ultimate Travel Companion, Rent Now</h2>
        <div className="login_page_form_container">
          <form onSubmit={handleSubmit}>
            <input
              type="username"
              name="username"
              id="username"
              placeholder="Unique Username"
              autoComplete="on"
              ref={nameRef}
              required
            />
            <br />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              autoComplete="on"
              ref={emailRef}
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
            <Button type="submit" className="login_btn login_page_btn" variant="success">Register</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
