import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { detailCarInfo } from '../../redux/detailCarSlice';
import NavBar from './NavBar';
import NavigationPanel from './NavigationPanel';
import '../../style/detailsPage.css';

export default function Detail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const latestModels = useSelector((state) => state.detailCarInfo.values);

  useEffect(() => {
    dispatch(detailCarInfo(id));
  }, [dispatch, id]);

  const handleClick = () => {
    localStorage.setItem('carID', id);
    navigate('/reservee');
  };
  return (
    <>
      <NavBar />
      <div className="content_container">
        <NavigationPanel />
        <div className="details_image_container">
          <img src={latestModels.image} className="detail-block w-150" alt="car-1" />
        </div>
        <div className="description_container">
          <h2>
            {latestModels.name}
          </h2>
          <h5>
            {latestModels.model}
          </h5>
          <div className="price_per_day_div">
            <p>Price Per Day </p>
            <p>
              £
              {latestModels.price_per_day}
            </p>
          </div>
          <div className="description_div">
            <h4 className="first_p">Description</h4>
            <p>{latestModels.description}</p>
          </div>
          <div className="reseve_btn_div">
            <Button type="submit" className="login_btn login_page_btn" onClick={handleClick} variant="success">
              Reserve
            </Button>
          </div>

        </div>
      </div>
    </>
  );
}
