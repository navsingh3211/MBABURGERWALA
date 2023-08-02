import { configureStore } from "@reduxjs/toolkit";
import userDetails from "../features/userDetailsSlice"


const store = configureStore({
  reducer: {
    aboutMe: userDetails,
    // Add other reducers if you have more slices
  },
});

export default store;

// export const server = "https://mbaburgerwalaserver.vercel.app/api/v1";



