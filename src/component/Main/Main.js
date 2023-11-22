/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import NavBar from './NavBar';
import Mobilemenu from './Mobilemenu';
import NavigationPanel from './NavigationPanel';
import CarLatestModels from './CarLatestModels';
import lambergini from '../../assets/9296454.gif';
import '../../style/mainpage.css';

const Main = () => (
  <>
    <div className="mainpage-container">
      <img className="mainpage_bg_logo" src={lambergini} alt="lambergini-logo" />
      <div className="mainpage_inner_container">
        <Mobilemenu />
        <NavBar />
        <div className="mainpage_content_container">
          <NavigationPanel />
          <div className="mainpage_model_container">
            <h2>Latest Models</h2>
            <h4>Select your choice</h4>
            <div>
              <CarLatestModels />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
export default Main;
