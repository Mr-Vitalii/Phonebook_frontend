import { createSlice } from "@reduxjs/toolkit";


const filterInitialState = {
    inputValue: "",
};

const filterSlice = createSlice({
    name: "filter",
    initialState: filterInitialState,
    reducers: {
        setStatusFilter(state, action) {
            state.inputValue = action.payload;
        },
    },
});


export const { setStatusFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;