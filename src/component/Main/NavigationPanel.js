/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import '../../style/navigationPanel.css';

export default function NavigationPanel() {
  const token = localStorage.getItem('user');
  const result = jwtDecode(token);
  const currentuser = result.isAdmin;
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-auto">
          <ul>
            <li>
              <NavLink to="/main" className="nav-link px-2">
                <span className="ms-1 d-none d-sm-inline">Latest Models</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/reserve" className="nav-link px-2">
                <span className="ms-1 d-none d-sm-inline">Reserve</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/my-reservations" className="nav-link px-2">
                <span className="ms-1 d-none d-sm-inline">My Reservations</span>
              </NavLink>
            </li>
            <li>
              {currentuser === true ? (
                <NavLink to="/add-a-car" className="nav-link px-2">
                  <span className="ms-1 d-none d-sm-inline">Add Car</span>
                </NavLink>
              ) : (
                <button type="button" className="normal-user add_car_btn">
                  <span className="ms-1 d-none d-sm-inline">Add Car</span>
                </button>
              )}
            </li>
            <li>
              {currentuser === true ? (
                <NavLink to="/remove-a-car" className="nav-link px-2">
                  <span className="ms-1 d-none d-sm-inline">Remove Car</span>
                </NavLink>
              ) : (
                <button type="button" className="normal-user rmv_btn">
                  <span className="ms-1 d-none d-sm-inline">Remove Car</span>
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
