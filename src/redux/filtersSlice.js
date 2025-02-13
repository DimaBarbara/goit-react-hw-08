import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter: '',
}
const slice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        findContact: (state, action) => {
state.filter = action.payload
        }
    }
    
})
export const filterReducer = slice.reducer;
export const { findContact } = slice.actions;
