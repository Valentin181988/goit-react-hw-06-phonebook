import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';

export const addContact = createAction('newContact');
export const removeContact = createAction('removeContact');

const contactsReduser = createReducer([], {
    
   [addContact]: (state, action) => [...state, action.payload],
   [removeContact]: (state, action) => state.filter(item => item.id !== action.payload),
});

export const store = configureStore({
    reducer: {
        contacts: contactsReduser,
    },
  });