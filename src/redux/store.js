import { configureStore } from '@reduxjs/toolkit';

import { contactsInitState } from 'redux/contacts/init-state';
import { contactsReducer } from 'redux/contacts/contacts.slice';
import { filterReducer } from 'redux/contacts/filter.slice';
import { authReducer } from 'redux/auth/auth.slice';



// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });



export const store = configureStore({
  preloadedState: contactsInitState,
  devTools: true,
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});


