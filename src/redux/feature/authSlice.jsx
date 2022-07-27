import { createSlice } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
import { loginUser } from "../../services";

/**
 * @params to add token to the localStorage to get back a key ("token")
 * @params {string} token, email, _id
 * @params loginStatus  to check the status of the different actions performing( pending, fullfilled, rejected)
 * @params loginError to store the error if status is rejected
 * @params LoadUser to check if the user is loaded or not, so initial state false
 *
 * for http request the use of extra reducers to handle the status
 */
const initialState = {
    token: localStorage.getItem("token"),
    email: "",
    _id: "",
    loginStatus: "",
    loginError: "",
    userLoaded: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loadUser(state, action) {
            const token = state.token;

            if (token) {
                const user = jwt_decode(token);
                return {
                    ...state,
                    token,
                    email: user.email,
                    _id: user.id,
                    userLoaded: true,
                };
            } else return { ...state, userLoaded: true };
        },
        logOut(state, action) {
            localStorage.removeItem("token");
            return {
                ...state,
                token: "",
                email: "",
                _id: "",
                loginStatus: "",
                loginError: "",
                userLoaded: false,
            };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state, action) => {
            return { ...state, loginStatus: "pending" };
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            if (action.payload) {
                const user = jwt_decode(action.payload);
                return {
                    ...state,
                    token: action.payload,
                    email: user.email,
                    _id: user.id,
                    loginStatus: "success",
                };
            } else return state;
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            return {
                ...state,
                loginStatus: "rejected",
                loginError: action.payload,
            };
        });
    },
});
export const { loadUser, logOut } = authSlice.actions;
export default authSlice.reducer;
