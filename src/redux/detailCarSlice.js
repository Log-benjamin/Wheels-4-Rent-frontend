import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  values: [],
  loading: false,
  status: false,
  error: '',
};

export const detailCarInfo = createAsyncThunk('car/detail', async (id) => {
  const response = await axios.get(`https://wheels-4-rent.onrender.com/api/v1/cars/${id}`);
  return response.data;
});

const detailCarSlice = createSlice({
  name: 'detailCarInfo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(detailCarInfo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(detailCarInfo.fulfilled, (state, action) => {
      state.loading = false;
      state.values = action.payload;
    });
  },
});

export default detailCarSlice.reducer;
