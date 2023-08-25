import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'http://localhost:5000/api';


export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (queryParams, thunkAPI) => {
        try {
            const response = await axios.get("/contacts", { params: queryParams });
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (inputValue, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", {
                name: inputValue.name,
                email: inputValue.email,
                phone: inputValue.number
            });
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const changeStatus = createAsyncThunk(
    "contacts/changeStatus",
    async (contactData, thunkAPI) => {
        try {
            const response = await axios.patch(`/contacts/${contactData.id}/favorite`, {
                favorite: contactData.status
            });
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);



