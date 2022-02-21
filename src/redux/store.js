import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';

const addContact = createAction('newContact');
const removeContact = createAction('removeContact');

const contactsRaduser = createReducer([], {
   [addContact]: (state, action) => state.push(action.payload),
   [removeContact]: (state, action) => state.filter(item => item.id !== action.payload),
});

export const store = configureStore({
    reducer: {
        contacts: contactsRaduser,
    },
  });