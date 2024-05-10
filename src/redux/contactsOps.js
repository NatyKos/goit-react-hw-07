import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://663e3e38e1913c4767970a9f.mockapi.io';
export const fetchContacts = createAsyncThunk('fetchAll', async () => {
  const response = await axios.get('/contacts');
  return response.data;
});
