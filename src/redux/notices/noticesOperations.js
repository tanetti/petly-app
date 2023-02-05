import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

export const fetchNotices = createAsyncThunk(
  'notices/getCategory',
  async (searchQuery, thunkAPI) => {
      try {
        const {categoryName, searchParams} = searchQuery
      const response = await axios.get(`/notices/${categoryName}?${searchParams}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNotice = createAsyncThunk(
  'notices/addNotice',
  async ({ newData }, thunkAPI) => {
    try {
      const response = await axios.post('/notices', { newData });
            return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteNotice = createAsyncThunk(
  'notices/deleteNotice',
  async (noticeId, thunkAPI) => {
    try {
      const response = await axios.delete(`/notices/${noticeId}`);
      
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
