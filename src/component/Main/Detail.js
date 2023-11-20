import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { detailCarInfo } from '../../redux/detailCarSlice';
import NavBar from './NavBar';
import lambergini from '../../assets/9296454.gif';
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
      <div className="addform-top-container">
        <img className="lambo_logo" src={lambergini} alt="lambergini-logo" />
        <div className="addform_inner_container">
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
                <p>Seating Capacity </p>
                <p>
                  {latestModels.seating_capacity}
                </p>
              </div>
              <div className="description_div">
                <p>{latestModels.description}</p>
              </div>
              <div className="price_per_day_div">
                <p>Price Per Day </p>
                <p>
                  <strong>
                    £
                    {latestModels.price_per_day}
                  </strong>
                </p>
              </div>
              <div className="reseve_btn_div">
                <Button type="submit" className="login_btn login_page_btn" onClick={handleClick} variant="success">
                  Reserve
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
