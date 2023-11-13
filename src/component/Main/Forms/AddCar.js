/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import NavBar from '../NavBar';
import NavigationPanel from '../NavigationPanel';

export default function AddCar() {
  return (
    <>
      <NavBar />
      <div className="content_container">
        <NavigationPanel />
        <h2>Add a Car Form</h2>
      </div>
    </>
  );
}