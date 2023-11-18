import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  reservations: [],
  loading: false,
  error: '',
};

export const fetchReservations = createAsyncThunk('fetch/reservations', async () => {
  const response = await axios.get('http://localhost:3000/api/v1/reservation');
  return response.data;
});

export const createReservation = createAsyncThunk('post/reservations', async (newReservation) => {
  const response = await axios.post('http://localhost:3000/api/v1/reservation', newReservation);
  return response.data;
});

export const deleteReservation = createAsyncThunk('delete/reservation', async (id) => {
  const response = await axios.delete(`http://localhost:3000/api/v1/reservation/${id}`);
  return response.data.id;
});

const reservationSlice = createSlice({
  name: 'reserve',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchReservations.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReservations.fulfilled, (state, action) => {
      state.loading = false;
      state.reservations = action.payload;
    });
  },
});

export default reservationSlice.reducer;
