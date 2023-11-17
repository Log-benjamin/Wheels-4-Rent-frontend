import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import carReducer from './carSlice';
import detailCarReducer from './detailCarSlice';
import reservationSlice from './reserveSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    car: carReducer,
    detailCarInfo: detailCarReducer,
    reservation: reservationSlice,
  },
});

export default store;
