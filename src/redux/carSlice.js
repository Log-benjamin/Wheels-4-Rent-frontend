import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  values: [],
  loading: false,
  status: false,
  error: '',
};

export const fetchLatesCarModels = createAsyncThunk('car/latestmodels', async () => {
  const response = await axios.get('http://localhost:3000/api/v1/cars');
  return response.data;
});

export const addLatestCarModel = createAsyncThunk('post/car', async (params) => {
  const response = await axios.post('http://localhost:3000/api/v1/cars', params);
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
  },
});

export default carSlice.reducer;
