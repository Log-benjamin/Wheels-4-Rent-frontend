import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  values: [],
  loading: false,
  status: false,
  error: '',
};

export const fetchLatesCarModels = createAsyncThunk('car/latestmodels', async () => {
  const response = await axios.get('https://wheels-4-rent.onrender.com/api/v1/cars');
  return response.data;
});

export const addLatestCarModel = createAsyncThunk('post/car', async (params) => {
  const response = await axios.post('https://wheels-4-rent.onrender.com/api/v1/cars', params);
  return response.data;
});

export const deleteCar = createAsyncThunk('car/delete', async (id) => {
  const response = await axios.delete(`https://wheels-4-rent.onrender.com/api/v1/cars/${id}`);
  return response.data;
});

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLatesCarModels.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchLatesCarModels.fulfilled, (state, action) => {
      state.loading = false;
      state.values = action.payload;
    });
    builder.addCase(deleteCar.pending, (state) => {
      state.status = true;
    });
    builder.addCase(deleteCar.fulfilled, (state, action) => {
      state.status = false;
      const newState = state.values.filter((car) => car.id !== action.payload);
      state.values = newState;
    });
    builder.addCase(deleteCar.rejected, (state, action) => {
      state.status = false;
      state.error = action.error.message;
    });
  },
});

export default carSlice.reducer;
