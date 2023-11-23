import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { jwtDecode } from 'jwt-decode';
import Button from 'react-bootstrap/Button';
import '../../style/mobilemenu.css';

const Mobilemenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem('user');
  const result = jwtDecode(token);
  const navigate = useNavigate();

  const togglemenu = () => {
    if (isOpen === true) {
      setIsOpen(false);
    }
    if (isOpen === false) {
      setIsOpen(true);
    }
  };

  const handleLogOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('carID');
    localStorage.removeItem('startdate');
    localStorage.removeItem('enddate');
    navigate('/');
  };

  return (
    <>
      <nav className="mobile_menu_container">
        <ul>
          <li className="first_li_in_ul">
            <button type="button" className="Mobile_Menu_btn" onClick={togglemenu}>
              <i aria-label="Mobile Menu Icon" className="fa fa-bars" />
            </button>
          </li>
          <li className="second_li_in_ul">
            <ul className={`dvs-header_menuItems ${isOpen ? 'is-open' : 'not-open'}`}>
              <li>
                <NavLink to="/main">
                  <span>Latest Models</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/reserve">
                  <span>Reserve</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/my-reservations">
                  <span>My Reservations</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/add-a-car">
                  <span>Add Car</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/remove-a-car">
                  <span>Remove Car</span>
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
        <div className="current_user_container">
          <span>
            {result.name}
          </span>
        </div>
        <div>
          <Button type="button" className="mobilemenu_logout-btn" onClick={handleLogOut} variant="info">Log out</Button>
        </div>
      </nav>
    </>
  );
};
export default Mobilemenu;
