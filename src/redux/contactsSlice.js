import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const phoneContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '+38 093 725 2356' },
  { id: 'id-2', name: 'Hermione Kline', number: '+38 050 143 6784' },
  { id: 'id-3', name: 'Eden Clements', number: '+38 067 567 4532' },
  { id: 'id-4', name: 'Annie Copeland', number: '+38 044 456 2245' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: phoneContacts,
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: { id: nanoid(), name, number },
        };
      },
    },
    removeContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload.id
      );
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;

export const contactsReducer = persistReducer(
  { key: 'contacts', storage },
  contactsSlice.reducer
);
