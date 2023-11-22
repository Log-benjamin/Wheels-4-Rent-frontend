import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { fetchLatesCarModels } from '../../../redux/carSlice';
import { detailCarInfo } from '../../../redux/detailCarSlice';
import { createReservation } from '../../../redux/reserveSlice';
import NavBar from '../NavBar';
import Mobilemenu from '../Mobilemenu';
import NavigationPanel from '../NavigationPanel';
import city from './majorCity';
import lambergini from '../../../assets/9296454.gif';
import '../../../style/reserve.css';

const cities = city;

const Reserve = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const latestModels = useSelector((state) => state.car.values);
  const detailModelInfo = useSelector((state) => state.detailCarInfo.values);
  const token = localStorage.getItem('user');
  const result = jwtDecode(token);
  const userID = result.id;
  const selectedCarID = localStorage.getItem('carID');
  useEffect(() => {
    dispatch(fetchLatesCarModels());
  }, [dispatch]);

  const [newReservation, setNewReservation] = useState({
    reservation: {
      start_date: '',
      end_date: '',
      city: '',
      car_id: 1,
      days: 0,
      user_id: userID,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const startenddate = e.target.value;
    setNewReservation((prevReservation) => ({
      ...prevReservation,
      reservation: {
        ...prevReservation.reservation,
        [name]: value,
      },
    }));
    if (e.target.name === 'start_date') {
      localStorage.setItem('startdate', startenddate);
    } else {
      localStorage.setItem('enddate', startenddate);
    }
    const one = new Date(localStorage.getItem('startdate'));
    const two = new Date(localStorage.getItem('enddate'));
    const timeDifference = two - one;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    setNewReservation((prevReservation) => ({
      ...prevReservation,
      reservation: {
        ...prevReservation.reservation,
        days: daysDifference,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createReservation(newReservation));
    setShow(true);
  };

  const handleCityChange = (e) => {
    setNewReservation((prevReservation) => ({
      ...prevReservation,
      reservation: {
        ...prevReservation.reservation,
        city: e.target.value,
      },
    }));
  };
  const handleSelectCar = (e) => {
    const carID = Number(e.target.value);
    setNewReservation((prevReservation) => ({
      ...prevReservation,
      reservation: {
        ...prevReservation.reservation,
        car_id: carID,
      },
    }));
    localStorage.setItem('carID', carID);
  };
  useEffect(() => {
    dispatch(detailCarInfo(selectedCarID));
  }, [dispatch, selectedCarID]);
  const handleClose = () => {
    setShow(false);
    navigate('/my-reservations');
  };

  return (
    <div>
      <div className="reserveform-top-container">
        <img className="lambo_res_logo" src={lambergini} alt="lambergini-logo" />
        <div className="reserveform_inner_container">
          <Mobilemenu />
          <NavBar />
          <div className="reserve_form_inner_first_div">
            <NavigationPanel />
            <div className="reserve_form_container">
              <h4>Please Fill in the form to make Reservation</h4>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Your Reservation is Confirmed</Modal.Title>
                </Modal.Header>
                <Modal.Body>Thank you for Choosing Wheels 4 Rent</Modal.Body>
              </Modal>
              <form onSubmit={handleSubmit}>
                <div className="first_div">
                  <label htmlFor="start_date" className="start_date">
                    Start Date:
                    <input type="date" id="start_date" name="start_date" onChange={handleChange} required />
                  </label>

                  <label htmlFor="end_date" className="end_date">
                    End Date:
                    <input type="date" id="end_date" name="end_date" onChange={handleChange} required />
                  </label>
                </div>
                <div className="second_div">
                  <label htmlFor="cars" className="cars">
                    Select Car :
                    <select name="cars" className="cities_selector cars_selector" id="cars" onChange={(e) => handleSelectCar(e)}>
                      {latestModels?.map((model) => (
                        <option key={model.id} value={model.id}>
                          {model.name}
                          { ' - ' }
                          {model.model}
                        </option>
                      ))}
                    </select>
                    <img src={detailModelInfo.image} alt="reserved-car-img" className="smallsize_car_display" />
                  </label>
                  <label htmlFor="city" className="city">
                    Select City :
                    <select name="city" className="cities_selector cars_selector" id="city" onChange={(e) => handleCityChange(e)}>
                      {cities?.map((city) => (
                        <option key={city.value} value={city.value}>
                          {city.value}
                        </option>
                      ))}
                    </select>
                    <div className="reserve_btn_cont">
                      <Button type="submit" className="reserve_btn" variant="success">Reserve</Button>
                    </div>
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reserve;
