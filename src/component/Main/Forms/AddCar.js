/* eslint linebreak-style: ["error", "windows"] */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import NavBar from '../NavBar';
import NavigationPanel from '../NavigationPanel';
import { addLatestCarModel } from '../../../redux/carSlice';
import '../../../style/addremovecar.css';
import lambergini from '../../../assets/9296454.gif';

export default function AddCar() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
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
    setShow(true);
  };
  const handleClose = () => setShow(false);
  return (
    <>
      <div className="addform-top-container">
        <img className="lambo_logo" src={lambergini} alt="lambergini-logo" />
        <div className="addform_inner_container">
          <NavBar />
          <div className="addform_inner_first_div">
            <NavigationPanel />
            <div className="login_page_form_container addcar_form_container">
              <h2>Fill The Form To Add A Car</h2>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Confirmed</Modal.Title>
                </Modal.Header>
                <Modal.Body>New car was added succesfully</Modal.Body>
              </Modal>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  placeholder="Name"
                  className="addform-input"
                  required
                />
                <br />
                <input
                  type="text"
                  name="model"
                  onChange={handleChange}
                  placeholder="Model"
                  className="addform-input"
                  required
                />
                <br />
                <textarea
                  type="text"
                  name="description"
                  rows="4"
                  cols="6"
                  onChange={handleChange}
                  placeholder="Description"
                  className="addform-input"
                  required
                />
                <br />
                <input
                  type="text"
                  name="image"
                  onChange={handleChange}
                  placeholder="Image URL"
                  className="addform-input"
                  required
                />
                <br />
                <input
                  type="number"
                  name="price_per_day"
                  onChange={handleChange}
                  placeholder="Price / Day"
                  className="addform-input"
                  required
                />
                <Button type="submit" className="addcarform-btn" variant="success">ADD</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
