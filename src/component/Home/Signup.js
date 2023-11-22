/* eslint linebreak-style: ["error", "windows"] */
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import lambergini from '../../assets/9296454.gif';
import '../../style/signuppage.css';

const Register = () => {
  const [show, setShow] = useState(false);
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

    axios.post('http://localhost:3000/api/v1/registration', formData);
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
    navigate('/login');
  };

  return (
    <div className="signuppage_container">
      <img className="signuppage_bg_logo" src={lambergini} alt="signuppage_bg_logo" />
      <div className="signuppage_inner_container">
        <h1>Wheels-4-Rent</h1>
        <h2>Your Ultimate Travel Companion, Rent Now</h2>
        <div className="signuppage_form_container">
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
            <Button type="submit" className="signuppage_register_btn" variant="success">Register</Button>
          </form>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Your are now Registered.</Modal.Title>
            </Modal.Header>
            <Modal.Body>You can Login using your username and password</Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Register;
