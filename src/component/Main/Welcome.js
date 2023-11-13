/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import NavBar from './NavBar';
import NavigationPanel from './NavigationPanel';

function Welcome() {
  return (
    <>
      <NavBar />
      <div className="content_container">
        <NavigationPanel />
        <div className="main_model_container">
          <h2>Latest Models</h2>
          <p>Please Select your choice</p>
          <div>
            <Carousel>
              <Carousel.Item>
                <img src="https://media.istockphoto.com/id/1560494551/photo/3d-rendering-of-a-brand-less-generic-concept-car.jpg?s=1024x1024&w=is&k=20&c=EftCZjzGE5V5Yk9lQtkofih8DnhZo7zMXW4AW8VC0mo=" alt="first-model" className="d-block w-100" />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src="https://media.istockphoto.com/id/483210138/photo/generic-red-car-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=mGcaNDn0vSGqHZ_E0WrTARUDbWFZlOAHMJqFu_OMTw8=" alt="first-model" className="d-block w-100" />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src="https://media.istockphoto.com/id/156204321/photo/red-sport-car.jpg?s=1024x1024&w=is&k=20&c=opCIqqDq5dGliVT714DgMzvlComjRepXJOpJCh3xqog=" alt="first-model" className="d-block w-100" />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src="https://media.istockphoto.com/id/1292374088/photo/red-sportscar-front-view-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=o5kDLhUVedRdYmYFZr-gI9EnA7z1RA85k-_Xjj-afxU=" alt="first-model" className="d-block w-100" />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
export default Welcome;
