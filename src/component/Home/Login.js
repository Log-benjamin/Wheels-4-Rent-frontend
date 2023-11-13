/* eslint linebreak-style: ["error", "windows"] */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import reactLogo from '../../assets/9296454.gif';
import { loginUser } from '../../redux/userSlice';

function LogIn() {
  // state
  const [username, setUserName] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  // redux
  const { loading, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginEvent = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', username);
    formData.append('password', password);

    dispatch(loginUser(formData)).then((result) => {
      if (result.payload) {
        setUserName('');
        setPassword('');
        navigate('/main');
      }
    });
  };
  return (
    <div className="home_container">
      <img className="home_logo" src={reactLogo} alt="react logo" />
      <div className="home_inner_container">
        <h2>Drive Your Way to Freedom, Rent a Car Today</h2>
        <div className="login_page_form_container">
          <form onSubmit={handleLoginEvent}>
            <input
              type="username"
              name="username"
              id="username"
              placeholder="Username"
              autoComplete="on"
              value={username || ''}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <br />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              autoComplete="off"
              value={password || ''}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <Button type="submit" className="login_btn login_page_btn" variant="success">
              {loading ? 'Loading...' : 'Log In'}
            </Button>
            {error && (
              <div className="alert alert-danger" role="alert">{error}</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
