/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../style/navigationPanel.css';

export default function NavigationPanel() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-auto bg-white">
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
                <span className="ms-1 d-none d-sm-inline">My reservations</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/add-a-car" className="nav-link px-2">
                <span className="ms-1 d-none d-sm-inline">Add a Car</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/remove-a-car" className="nav-link px-2">
                <span className="ms-1 d-none d-sm-inline">Remove a Car</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
