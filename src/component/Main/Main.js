/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import NavBar from './NavBar';
import NavigationPanel from './NavigationPanel';
import CarLatestModels from './CarLatestModels';
import lambergini from '../../assets/9296454.gif';

function Main() {
  return (
    <>
      <div className="addform-top-container">
        <img className="lambo_logo" src={lambergini} alt="lambergini-logo" />
        <div className="addform_inner_container">
          <NavBar />
          <div className="content_container">
            <NavigationPanel />
            <div className="main_model_container">
              <h2>Latest Models</h2>
              <h4>Please Select your choice</h4>
              <div>
                <CarLatestModels />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Main;
