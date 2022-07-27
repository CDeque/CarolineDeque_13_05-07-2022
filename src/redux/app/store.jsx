import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feature/authSlice";
import userReducer from "../feature/userSlice";
export default configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
    },
});
