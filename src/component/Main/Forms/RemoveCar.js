/* eslint linebreak-style: ["error", "windows"] */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { fetchLatesCarModels, deleteCar } from '../../../redux/carSlice';
import NavBar from '../NavBar';
import Mobilemenu from '../Mobilemenu';
import NavigationPanel from '../NavigationPanel';
import lambergini from '../../../assets/9296454.gif';
import '../../../style/removecar.css';

const RemoveCar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const latestModels = useSelector((state) => state.car.values);

  useEffect(() => {
    dispatch(fetchLatesCarModels());
  }, [dispatch]);

  const handleClick = (e) => {
    const { id } = e.currentTarget;
    dispatch(deleteCar(id));
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
    navigate('/main');
  };

  return (
    <>
      <div>
        <img className="lambo_logo" src={lambergini} alt="lambergini-logo" />
        <div className="removepage_inner_container">
          <Mobilemenu />
          <NavBar />
          <div className="removepage_inner_first_div">
            <NavigationPanel />
            <div className="removecar_form_container">
              <Modal className="my-modal" show={show} onHide={handleClose}>
                <Modal.Header closeButton className="my-modal-header">
                  <Modal.Title className="my-modal-title">Request to Delete is Confirmed</Modal.Title>
                </Modal.Header>
              </Modal>
              <div className="removepage_table_container">
                <table id="removepage_customers">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Model</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  {latestModels?.map((model) => (
                    <tr key={model.id}>
                      <td>{model.id}</td>
                      <td>
                        {model.name}
                      </td>
                      <td>
                        {model.model}
                      </td>
                      <td>
                        <Button id={model.id} type="submit" className="removepage_delte_button" onClick={((e) => handleClick(e))} variant="danger">Remove</Button>
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
};

export default RemoveCar;
