import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  contactList: [],
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.contactList.push(action.payload);
      },

      prepare({ id, name, number }) {
        return {
          payload: {
            id,
            name,
            number,
          },
        };
      },
    },

    delContact: (state, action) => {
      state.contactList = state.contactList.filter(contact => contact.id !== action.payload);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

const contactReducer = contactSlice.reducer;
export const { addContact, delContact } = contactSlice.actions;
export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactReducer
);

