import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (value, { rejectWithValue }) => {
        try {
            const token = await axios.post(
                "http://localhost:3001/api/v1/user/login",
                {
                    email: value.email,
                    password: value.password,
                }
            );
            localStorage.setItem("token", token.data.body.token);
            console.log(token.data);
            return token.data.body.token;
        } catch (error) {
            console.log(error.response.data);
            return rejectWithValue(error.response.data);
        }
    }
);
