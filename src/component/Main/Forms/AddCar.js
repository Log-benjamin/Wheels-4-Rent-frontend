/* eslint linebreak-style: ["error", "windows"] */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const [carParams, setCarParams] = useState({
    car: {
      name: '',
      model: '',
      description: '',
      image: '',
      seating_capacity: '',
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
  const handleClose = () => {
    setShow(false);
    navigate('/main');
  };
  return (
    <>
      <div className="addform-top-container">
        <img className="lambo_logo" src={lambergini} alt="lambergini-logo" />
        <div className="addform_inner_container">
          <NavBar />
          <div className="addform_inner_first_div">
            <NavigationPanel />
            <div className="addcar_form_container">
              <h2>Fill The Form To Add A Car</h2>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Confirmed</Modal.Title>
                </Modal.Header>
                <Modal.Body>New car was added succesfully</Modal.Body>
              </Modal>
              <form onSubmit={handleSubmit}>
                <div>
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
                  <input
                    type="number"
                    name="seating_capacity"
                    onChange={handleChange}
                    placeholder="Seating Capacity"
                    className="addform-input"
                    required
                  />
                  <br />
                  <textarea
                    type="text"
                    name="description"
                    rows="7"
                    cols="9"
                    onChange={handleChange}
                    placeholder="Description"
                    className="addform-input"
                    required
                  />
                </div>
                <div className="second_div_with_addbtn">
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
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
