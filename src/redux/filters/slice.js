import { createSelector, createSlice } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";
import { selectNameFilter } from "./selectors";

const initialState = {
  name: "",
};
const slice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    if (Array.isArray(contacts)) {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return [];
  }
);
export const filterReducer = slice.reducer;
export const { changeFilter } = slice.actions;
