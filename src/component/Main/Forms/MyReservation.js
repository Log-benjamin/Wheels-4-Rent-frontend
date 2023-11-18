/* eslint linebreak-style: ["error", "windows"] */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import NavBar from '../NavBar';
import NavigationPanel from '../NavigationPanel';
import lambergini from '../../../assets/9296454.gif';
import '../../../style/addremovecar.css';
import { fetchReservations, deleteReservation } from '../../../redux/reserveSlice';

export default function RemoveCar() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const token = localStorage.getItem('user');
  const result = jwtDecode(token);
  const dispatch = useDispatch();
  const fetchRes = useSelector((state) => state.reservation.reservations);
  const filteredReservations = fetchRes.filter((reservation) => reservation.user_id === result.id);

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  const handleClick = (e) => {
    const { id } = e.currentTarget;
    dispatch(deleteReservation(id));
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
            <div className="login_page_form_container addcar_form_container">
              <div className="table_container">
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>You have canceled this reservation</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Payment will be Reimbursed</Modal.Body>
                </Modal>
                <table id="customers">
                  <thead>
                    <tr className="first_row">
                      <th>Date</th>
                      <th>City</th>
                      <th>Selected Car</th>
                      <th>Change</th>
                    </tr>
                  </thead>
                  {filteredReservations?.map((reserve) => (
                    <tr key={reserve.id}>
                      <td>
                        <p>
                          From :
                          <strong>{reserve.start_date}</strong>
                        </p>
                        <p>
                          To :
                          <strong>{reserve.end_date}</strong>
                        </p>
                      </td>
                      <td>
                        <strong>{reserve.city}</strong>
                      </td>
                      <td>
                        <p>
                          {reserve.car}
                          {' - '}
                          {reserve.model}
                        </p>
                        <p>
                          £
                          {reserve.price}
                        </p>
                        <img src={reserve.image} className="myreservationCarImage" alt="reservedCarphoto" />
                      </td>
                      <td>
                        <Button id={reserve.id} type="submit" onClick={((e) => handleClick(e))} variant="danger">Cancel</Button>
                      </td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
