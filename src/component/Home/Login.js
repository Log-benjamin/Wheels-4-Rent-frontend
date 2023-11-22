import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { loginUser } from '../../redux/userSlice';
import lambergini from '../../assets/9296454.gif';
import '../../style/loginpage.css';

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
        localStorage.setItem('carID', 1);
      }
    });
  };
  return (
    <div className="loginpage_container">
      <img className="loginpage_bg_logo" src={lambergini} alt="loginpage_bg_logo" />
      <div className="signuppage_inner_container">
        <h1>Wheels-4-Rent</h1>
        <h2>Drive Your Way to Freedom, Rent a Car Today</h2>
        <div className="loginpage_form_container">
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
            <Button type="submit" className="loginpage_login_btn" variant="success">
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
