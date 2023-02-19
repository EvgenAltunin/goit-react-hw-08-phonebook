import { createSlice } from '@reduxjs/toolkit';
import { contactsInitState } from 'redux/contacts/init-state';

const filterSlice = createSlice({
  name: 'filter',
  initialState: contactsInitState,
  reducers: {
    setFilterValueAction: (_, { payload }) => {
      return payload;
    },
  },
});

export const { setFilterValueAction } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
