import axios from "axios";
import { server } from "../store";
import {ME} from "./action-type";


export const loadUser2 = () => async (dispatch) => {
    
    try {
        dispatch({
          type: "loadUserRequest",
        });

        const { data } = await axios.get(
          "https://mbaburgerwalaserver.vercel.app/api/v1/me",
          {
            withCredentials: true,
          }
        );
        // console.log(data);
        dispatch({
            type: "loadUserSuccess",
            payload:data.user
        });
        
    } catch (error) {
        dispatch({
            type: "loadUserFail",
            payload:error.response.data.message
        });
    }

}

export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: "logoutRequest",
    });

    await axios.get("https://mbaburgerwalaserver.vercel.app/api/v1/logout", {
      withCredentials: true,
    });
    
    dispatch({
      type: "logoutSuccess"
    });
  } catch (error) {
    dispatch({
      type: "logoutFail",
      payload: error.response.data.message,
    });
  }
};

export const userData=()=>({
    type:ME,
    payload:''
});

