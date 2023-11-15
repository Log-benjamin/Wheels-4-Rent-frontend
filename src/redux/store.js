import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import carReducer from './carSlice';
import detailCarReducer from './detailCarSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    car: carReducer,
    detailCarInfo: detailCarReducer,
  },
});

export default store;
