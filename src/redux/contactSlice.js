import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  items: [],
  filter: '',
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact({ items }, action) {
      items.push(action.payload);
    },
    filterContact(state, action) {
      state.filter = action.payload;
    },
    deletedContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const { addContact } = contactSlice.actions;
export const { filterContact } = contactSlice.actions;
export const { deletedContact } = contactSlice.actions;

// Selectors
export const getContacts = ({ contacts }) => contacts.items;
export const getFilteredContact = ({ contacts }) => contacts.filter;
