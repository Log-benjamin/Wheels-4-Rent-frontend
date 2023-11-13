import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import LogIn from './Home/Login';
import Register from './Home/Signup';
import Welcome from './Main/Welcome';
import Reserve from './Main/Forms/Reserve';
import MyReservation from './Main/Forms/MyReservation';
import AddCar from './Main/Forms/AddCar';
import RemoveCar from './Main/Forms/RemoveCar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/main" element={<Welcome />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/my-reservations" element={<MyReservation />} />
          <Route path="/add-a-car" element={<AddCar />} />
          <Route path="/remove-a-car" element={<RemoveCar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
