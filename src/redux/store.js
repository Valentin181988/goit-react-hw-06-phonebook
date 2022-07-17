import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './slices/filterSlice';
import { contactsSlice } from './slices/contactsSlice';

  

  export const store = configureStore({
    reducer: {
      contacts: contactsSlice.reducer,
      filter: filterSlice.reducer,
    },
  });


  /* import { createAction, createReducer } from '@reduxjs/toolkit';

export const addContact = createAction('newContact');
export const removeContact = createAction('removeContact');
export const filter = createAction('filter');

const contactsReduser = createReducer([], {  
   [addContact]: (state, action) => [...state, action.payload],
   [removeContact]: (state, action) => state.filter(item => item.id !== action.payload),
});

const filterReducer = createReducer('',{
    [filter]: (state, action) => action.payload,
});

export const store = configureStore({
    reducer: {
        contacts: contactsReduser,
        filter: filterReducer,
    },
  }); */