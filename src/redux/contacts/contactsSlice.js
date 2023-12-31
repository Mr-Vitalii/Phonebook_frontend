import { createSlice } from "@reduxjs/toolkit";
import { logOut } from 'redux/auth/operations';
import { fetchContacts, addContact, deleteContact, changeStatus } from "./operations";

const handlePending = state => {
    state.isLoading = true;
};
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const initialState = {
    items: [],
    isLoading: false,
    error: null,
}



const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    extraReducers: builder =>
        builder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, handleRejected)

            .addCase(addContact.pending, handlePending)
            .addCase(addContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items.push(action.payload);
            })
            .addCase(addContact.rejected, handleRejected)

            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                const index = state.items.findIndex(task => task._id === action.payload.id);
                state.items.splice(index, 1);
            })
            .addCase(deleteContact.rejected, handleRejected)

            .addCase(changeStatus.pending, handlePending)
            .addCase(changeStatus.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
            })
            .addCase(changeStatus.rejected, handleRejected)


            .addCase(logOut.pending, handlePending)
            .addCase(logOut.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = [];
            })
            .addCase(logOut.rejected, handleRejected)

});


export const contactsReducer = contactsSlice.reducer;
