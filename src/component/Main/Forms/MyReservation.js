/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import NavBar from '../NavBar';
import NavigationPanel from '../NavigationPanel';

export default function MyReservation() {
  return (
    <>
      <NavBar />
      <div className="content_container">
        <NavigationPanel />
        <h2>
          My Reservation List
        </h2>
      </div>
    </>
  );
}
