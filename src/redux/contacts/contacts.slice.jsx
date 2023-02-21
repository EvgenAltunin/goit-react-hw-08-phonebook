import { contactsInitState } from 'redux/contacts/init-state';
import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'redux/contacts/operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'items',
  initialState: contactsInitState.contacts,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(addContact.pending, handlePending)
      .addCase(deleteContact.pending, handlePending)

      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.rejected, handleRejected)

      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })

      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items.unshift(payload);
      })

      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === payload.id
        );
        state.items.splice(index, 1);
      }),
});

export const contactsReducer = contactsSlice.reducer;
