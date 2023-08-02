import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const showUser = createAsyncThunk(
    "showUser",
    async () => {
        try {
    //   const response = await fetch(
    //     "https://mbaburgerwalaserver.vercel.app/api/v1/me"
    //   );
        const  result  = await axios.get(
            "https://mbaburgerwalaserver.vercel.app/api/v1/me",
            {
                withCredentials: true,
            }   
         );
  
      
        // const result = await response.json();
        console.log(result.data.user,'aboutMeDetails');
        return result.data.user;
      } catch (error) {
        return async()=>{
            return error;
        };
      }
    }
  );

// const initialState={};
const userDetails=createSlice({
    name:"userDetails", 
    initialState:{
        users:[],
        loading:false,
        error:null
    },
        extraReducers: (builder) => {
            builder
              .addCase(showUser.fulfilled, (state, action) => {
                // console.log(state,'stateteats');
                state.users = action.payload;
                console.log(state.users,'tttt')
              })
            //   .addCase(fetchLogin.rejected, (state, action) => {
            //     state.error = action.error.message;
            //   })
            //   .addCase(verifyLoginAuth.fulfilled, (state, action) => {
            //     state.verify = action.payload;
            //   })
            //   .addCase(LogOutAuth.fulfilled, (state, action) => {
            //     state.logout = action.payload;
            //   });
          },


       
    
});

export const { actions } = userDetails;
export default userDetails.reducer;

