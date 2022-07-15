import { configureStore } from '@reduxjs/toolkit';
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


  import { createSlice } from '@reduxjs/toolkit';

  export const contactsSlice = createSlice({
      name: 'contacts',
      initialState: [],
      reducers: {
          addContact(state, action) {
            return [...state, action.payload]; 
          },
          removeContact(state, action) {
              return state.filter(item => item.id !== action.payload);
          },
         
      },
  });

  export const { addContact, removeContact } = contactsSlice.actions;

  export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
      value: "",
    },
    reducers: {
        filter(state, action) {
           state.value = action.payload;
        },
    },
});
  
  export const { filter } = filterSlice.actions;

  export const store = configureStore({
    reducer: {
      contacts: contactsSlice.reducer,
      filter: filterSlice.reducer,
    },
  });