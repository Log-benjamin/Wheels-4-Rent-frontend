import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import Select from 'react-select';
import Button from 'react-bootstrap/Button';
import { fetchLatesCarModels } from '../../../redux/carSlice';
import { createReservation } from '../../../redux/reserveSlice';
import NavBar from '../NavBar';
import NavigationPanel from '../NavigationPanel';
import city from './majorCity';
import lambergini from '../../../assets/9296454.gif';
import '../../../style/addremovecar.css';
import '../../../style/reserve.css';

const cities = city;

export default function Reserve() {
  const dispatch = useDispatch();
  const latestModels = useSelector((state) => state.car.values);
  const token = localStorage.getItem('user');
  const result = jwtDecode(token);
  const userID = result.id;

  useEffect(() => {
    dispatch(fetchLatesCarModels());
  }, [dispatch]);

  const [newReservation, setNewReservation] = useState({
    reservation: {
      start_date: '',
      end_date: '',
      city: '',
      car_id: 1,
      user_id: userID,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReservation((prevReservation) => ({
      ...prevReservation,
      reservation: {
        ...prevReservation.reservation,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createReservation(newReservation));
  };

  const handleCityChange = (selectedVal) => {
    setNewReservation((prevReservation) => ({
      ...prevReservation,
      reservation: {
        ...prevReservation.reservation,
        city: selectedVal.value,
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
  };
  return (
    <div>
      <div className="reserveform-top-container">
        <img className="lambo_res_logo" src={lambergini} alt="lambergini-logo" />
        <div className="reserveform_inner_container">
          <NavBar />
          <div className="reserve_form_inner_first_div">
            <NavigationPanel />
            <div className="reserve_form_container">
              <h4>Please Fill in the form to make Reservation</h4>
              <form onSubmit={handleSubmit}>
                <div className="inputBox">
                  <div className="flex">
                    <label htmlFor="start_date">
                      Start Date:
                      <input type="date" id="start_date" name="start_date" onChange={handleChange} required />
                    </label>

                    <label htmlFor="end_date">
                      End Date:
                      <input type="date" id="end_date" name="end_date" onChange={handleChange} required />
                    </label>
                  </div>
                  <div className="city_and_car_cont">
                    <div>
                      <span>Select City :</span>
                      <Select
                        name="city"
                        options={cities}
                        onChange={handleCityChange}
                        className="cities_selector"
                      />
                    </div>
                    <div>
                      <span>Select Car :</span>
                      <select name="cars" className="cities_selector cars_selector" id="cars" onChange={(e) => handleSelectCar(e)}>
                        {latestModels?.map((model) => (
                          <option key={model.id} value={model.id}>
                            {model.name}
                            { ' - ' }
                            {model.model}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <Button type="submit" className="addcarform-btn" variant="success">Reserve</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
