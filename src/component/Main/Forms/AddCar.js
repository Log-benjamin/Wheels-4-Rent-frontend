/* eslint linebreak-style: ["error", "windows"] */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import NavBar from '../NavBar';
import NavigationPanel from '../NavigationPanel';
import { addLatestCarModel } from '../../../redux/carSlice';
import '../../../style/addnewcar.css';

export default function AddCar() {
  const dispatch = useDispatch();
  const [carParams, setCarParams] = useState({
    car: {
      name: '',
      model: '',
      description: '',
      image: '',
      price_per_day: 0,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarParams((prev) => ({
      ...prev,
      car: {
        ...prev.car,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addLatestCarModel(carParams));
  };

  return (
    <>
      <NavBar />
      <div className="content_container">
        <NavigationPanel />
        <h2>Add a Car Form</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="The New Car Name"
            required
          />
          <br />
          <input
            type="text"
            name="model"
            onChange={handleChange}
            placeholder="The New Car Model"
            required
          />
          <br />
          <input
            type="text"
            name="description"
            onChange={handleChange}
            placeholder="The New Car Description"
            required
          />
          <br />
          <input
            type="text"
            name="image"
            onChange={handleChange}
            placeholder="The New Car Photo Url"
            required
          />
          <br />
          <input
            type="number"
            name="price_per_day"
            onChange={handleChange}
            placeholder="The New Car Price / Day"
            required
          />
          <Button type="submit" className="login_btn login_page_btn" variant="success">Add</Button>
        </form>
      </div>
    </>
  );
}
