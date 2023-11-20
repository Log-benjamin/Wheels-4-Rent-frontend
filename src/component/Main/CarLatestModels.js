/* eslint linebreak-style: ["error", "windows"] */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLatesCarModels } from '../../redux/carSlice';

function CarLatestModels() {
  const dispatch = useDispatch();
  const latestModels = useSelector((state) => state.car.values);
  // const loading = useSelector((state) => state.car.loading);

  useEffect(() => {
    dispatch(fetchLatesCarModels());
  }, [dispatch]);

  return (
    <>
      <Carousel>
        {latestModels?.map((model) => (
          <Carousel.Item key={model.id}>
            <Link to={`/details/${model.id}`}>
              <img src={model.image} alt="car-model" className="d-block w-100" />
              <Carousel.Caption className="model-name_and_model">
                <h3>{model.name}</h3>
                <h6>{model.model}</h6>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default CarLatestModels;
