import {
  ON_CREATE_CARD_START,
  ON_CREATE_CARD_SUCCESS,
  ON_CREATE_CARD_FAILED,
} from "./types";
import { API } from "../../config";
import axios from "axios";

export const createCard = (socials, user) => async (dispatch) => {
  dispatch({
    type: ON_CREATE_CARD_START,
  });
  try {
    const res = await axios.post(`${API}/card/create`, { socials, user } );
    setTimeout(() => {
      dispatch({
        type: ON_CREATE_CARD_SUCCESS,
        payload: res.data,
      });
    }, 2000);
  } catch (error) {
    setTimeout(() => {
      setTimeout(() => {
        dispatch({
          type: ON_CREATE_CARD_FAILED,
        });
      }, 2000);
      if (error.response.data.error) {
        dispatch({
          type: ON_CREATE_CARD_FAILED,
          payload: error.response.data.error,
        });
      } else {
        dispatch({
          type: ON_CREATE_CARD_FAILED,
          payload: "Server error, please try again",
        });
      }
    }, 3000);
  }
};
