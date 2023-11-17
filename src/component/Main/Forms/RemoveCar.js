/* eslint linebreak-style: ["error", "windows"] */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { fetchLatesCarModels, deleteCar } from '../../../redux/carSlice';
import NavBar from '../NavBar';
import NavigationPanel from '../NavigationPanel';
import lambergini from '../../../assets/9296454.gif';
import '../../../style/addremovecar.css';

export default function RemoveCar() {
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
              <div className="table_container">
                <table id="customers">
                  <thead>
                    <tr className="first_row">
                      <th>Id</th>
                      <th>Name</th>
                      <th>Model</th>
                      <th>Remove</th>
                    </tr>
                  </thead>

                  {latestModels?.map((model) => (
                    <tr key={model.id}>
                      <Modal className="my-modal" show={show} onHide={handleClose}>
                        <Modal.Header closeButton className="my-modal-header">
                          <Modal.Title className="my-modal-title">Request to Delete Confirmed</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="my-modal-body">
                          <p>
                            CarId
                            -
                            {model.id}
                          </p>
                          <p>
                            Name
                            -
                            { model.name}
                          </p>
                          <p>
                            Model
                            -
                            { model.model}
                          </p>
                          <p>
                            Price / Day
                            -
                            £
                            {model.price_per_day}
                          </p>
                        </Modal.Body>
                        <Modal.Footer className="my-modal-footer">
                          The Item with the above specification was Removed
                        </Modal.Footer>
                      </Modal>
                      <td>{model.id}</td>
                      <td>
                        {model.name}
                      </td>
                      <td>
                        {model.model}
                      </td>
                      <td>
                        <Button id={model.id} type="submit" className="delete-btn" onClick={((e) => handleClick(e))} variant="danger">Remove</Button>
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
