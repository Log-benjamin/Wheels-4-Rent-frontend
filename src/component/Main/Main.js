/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import NavBar from './NavBar';
import NavigationPanel from './NavigationPanel';
import CarLatestModels from './CarLatestModels';

function Main() {
  return (
    <>
      <NavBar />
      <div className="content_container">
        <NavigationPanel />
        <div className="main_model_container">
          <h2>Latest Models</h2>
          <p>Please Select your choice</p>
          <div>
            <CarLatestModels />
          </div>
        </div>
      </div>
    </>
  );
}
export default Main;
