import { createSlice } from "@reduxjs/toolkit";
import { registration, logIn, logOut, refreshUser } from './operations';

const initialState = {
    user: { name: null, email: null, subscription: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: builder =>
        builder
            .addCase(registration.fulfilled, (state, action) => {
                console.log(action);
                state.user = action.payload.user;
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logOut.fulfilled, (state) => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(refreshUser.pending, (state) => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(refreshUser.rejected, (state) => {
                state.isRefreshing = false;
            })
});

export const authReducer = authSlice.reducer;