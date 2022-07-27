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
            console.log(token.data.body.token);
            return token.data.body.token;
        } catch (error) {
            console.log(error.response.data);
            return rejectWithValue(error.response.data);
        }
    }
);

/**
 * to get userProfile
 */
export const userProfile = createAsyncThunk(
    "user/userProfile",
    async (rejectWithValue) => {
        try {
            const user = await axios.post(
                "http://localhost:3001/api/v1/user/profile",
                {},
                {
                    headers: {
                        Authorization: `Bearer` + localStorage.getItem("token"),
                    },
                }
            );

            return user.data.body;
        } catch (error) {
            console.log(error.response.data);
            return rejectWithValue(error.response.data);
        }
    }
);

export const editUser = createAsyncThunk(
    "user/editProfile",
    async (value, { rejectWithValue }) => {
        try {
            const user = await axios.put(
                "http://localhost:3001/api/v1/user/profile",
                {
                    firstName: value.firstName,
                    lastName: value.lastName,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer` + localStorage.getItem("token"),
                    },
                }
            );

            return user.data.body;
        } catch (error) {
            console.log(error.response.data);
            return rejectWithValue(error.response.data);
        }
    }
);
