import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const fetchContacts = createAsyncThunk(
  '/contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      toast.error('Oops, something went wrong. Try again');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { name, number });
      toast.success(`${name} added to your contacts!`);
      return response.data;
    } catch (error) {
      toast.error('Oops, something went wrong. Try again');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      toast.success(`Contact successfully deleted!`);
      return response.data;
    } catch (error) {
      toast.error('Oops, something went wrong. Try again');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
