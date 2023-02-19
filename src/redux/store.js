import { configureStore } from '@reduxjs/toolkit';

import { contactsInitState } from 'redux/init-state';
import { contactsReducer } from 'redux/contacts.slice';
import { filterReducer } from 'redux/filter.slice';



// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });



export const store = configureStore({
  preloadedState: contactsInitState,
  devTools: true,
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer
  },
});


