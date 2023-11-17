import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  reservations: [],
  loading: false,
  error: '',
};

export const fetchReservation = createAsyncThunk('fetch/reservations', async () => {
  const response = await axios.post('http://localhost:3000/api/v1/reservation');
  return response.data;
});

export const createReservation = createAsyncThunk('post/reservations', async (newReservation) => {
  const response = await axios.post('http://localhost:3000/api/v1/reservation', newReservation);
  return response.data;
});

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchReservation.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReservation.fulfilled, (state, action) => {
      state.loading = false;
      state.reservations = action.payload;
    });
  },
});

export default reservationSlice.reducer;
