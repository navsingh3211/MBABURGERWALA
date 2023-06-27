import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/userReducer";

const store = configureStore({
    reducer: {
        auth:authReducer
    },
});

export default store;

export const server = "https://mbaburgerwalaserver.vercel.app/api/v1";



