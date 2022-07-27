import { createSlice } from "@reduxjs/toolkit";
import { editUser, userProfile } from "../../services";

const initialState = {
    token: localStorage.getItem("token"),
    email: "",
    _id: "",
    firstName: "",
    lastName: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getUser(state, action) {
            const token = state.token;

            if (token) {
                const user = action.payload;
                return {
                    ...state,
                    token,
                    email: user.email,
                    _id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    userLoaded: true,
                };
            } else return { ...state, userLoaded: true };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(userProfile.pending, (state, action) => {
            return { ...state, getUserStatus: "pending" };
        });
        builder.addCase(userProfile.fulfilled, (state, action) => {
            if (action.payload) {
                const user = action.payload;
                return {
                    ...state,
                    token: action.payload,
                    email: user.email,
                    _id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    getUserStatus: "success",
                };
            } else return state;
        });
        builder.addCase(userProfile.rejected, (state, action) => {
            return {
                ...state,
                getUserStatus: "rejected",
                getUserError: action.payload,
            };
        });
        builder.addCase(editUser.pending, (state, action) => {
            return { ...state, editUserStatus: "pending" };
        });
        builder.addCase(editUser.fulfilled, (state, action) => {
            if (action.payload) {
                const user = action.payload;
                return {
                    ...state,
                    token: action.payload,
                    _id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    EditUserStatus: "user updated",
                };
            } else return state;
        });
        builder.addCase(editUser.rejected, (state, action) => {
            return {
                ...state,
                getUserStatus: "rejected",
                editUserError: action.payload,
            };
        });
    },
});

export const { getUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
