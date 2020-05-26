import { SET_PAGE } from "./types";


export const handlePage = (page) => (dispatch) => {
  dispatch({
    type: SET_PAGE,
    payload: page
  });
};

