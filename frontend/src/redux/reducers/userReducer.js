import { createReducer } from "@reduxjs/toolkit";

import axios from "axios";
import {USER_LOGOUT,ME} from "../actions/action-type";

// export const authReducer = createReducer(
//   {},
//   {
//     loadUserRequest: (state) => {
//       state.loading = true;
//     },
//     loadUserSuccess: (state, action) => {
//       state.loading = false;
//       state.isAuthenticated = true;
//       state.user = action.payload;
//     },
//     loadME:(state, action)=>{
//         state.loading = false;
//       state.isAuthenticated = true;
//       state.user = action.payload;
//     },
//     loadUserFail: (state, action) => {
//       state.loading = false;
//       state.isAuthenticated = false;
//       state.error = action.payload;
//     },
//     logoutRequest: (state) => {
//       state.loading = true;
//     },
//     logoutSuccess: (state) => {
//       state.loading = false;
//       state.isAuthenticated = false;
//       state.user = null;
//     },
//     logoutFail: (state, action) => {
//       state.loading = false;
//       state.isAuthenticated = true;
//       state.error = action.payload;
//     },
//     clearError: (state) => {
//       state.error = null;
//     },
//     clearMessage: (state) => {
//       state.message = null;
//     },
//   }
// );


const initialState=[];
const authUser= (state=initialState,action)=>{
    switch(action.type){
        case ME:
            return [...state,action.payload]
        case USER_LOGOUT:
        default:
            return state;

    }
}
export default authUser;



