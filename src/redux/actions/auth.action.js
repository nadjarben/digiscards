import axios from "axios";
import { API } from "../../utils/environment";
import { authenticate, signout } from "./auth.helper";
import {
  TOGGLE_LOGIN,
  CHANGE_PAGE_LOGIN,
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  SIGN_IN_RESET,
  FETCH_USER_START,
  FETCH_USER_FAIL,
  FETCH_USER_SUCCESS,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  SIGN_UP_RESET,
  SIGN_OUT,
  ON_GOOGLE_SIGN_IN_START,
  ON_GOOGLE_SIGN_IN_SUCCESS,
  ON_GOOGLE_SIGN_IN_FAILED,
} from "./types";

export const toggleLogin = (page) => ({
  type: TOGGLE_LOGIN,
  payload: page,
});

export const changePageLogin = (page) => ({
  type: CHANGE_PAGE_LOGIN,
  payload: page,
});

export const login = (email, password) => async (dispatch) => {
  dispatch({
    type: SIGN_IN_START,
  });
  try {
    const res = await axios.post(`${API}/auth/signin`, { email, password });
    setTimeout(() => {
      authenticate(res, () => {
        dispatch({
          type: SIGN_IN_SUCCESS,
          payload: res.data,
        });
        setTimeout(() => {
          dispatch({
            type: TOGGLE_LOGIN,
          });
        }, 2000);
      });
    }, 2000);
  } catch (error) {
    setTimeout(() => {
      setTimeout(() => {
        dispatch({
          type: SIGN_IN_RESET,
        });
      }, 5000);
      if (error.response.data.error) {
        dispatch({
          type: SIGN_IN_FAIL,
          payload: error.response.data.error,
        });
      } else {
        dispatch({
          type: SIGN_IN_FAIL,
          payload: "Server error, please try again",
        });
      }
    }, 3000);
  }
};

export const fetchUser = (token) => (dispatch) => {
  dispatch({
    type: FETCH_USER_START,
    payload: token,
  });
  if (!token) {
    dispatch({
      type: FETCH_USER_FAIL,
    });
  } else {
    dispatch({
      type: FETCH_USER_SUCCESS,
    });
  }
};

export const register = (name, email, password) => async (dispatch) => {
  dispatch({
    type: SIGN_UP_START,
  });
  try {
    await axios.post(`${API}/auth/signup`, { name, email, password });
    setTimeout(() => {
      dispatch({
        type: SIGN_UP_SUCCESS,
      });
      setTimeout(() => {
        dispatch({
          type: TOGGLE_LOGIN,
        });
      }, 2000);
    }, 3000);
  } catch (error) {
    setTimeout(() => {
      setTimeout(() => {
        dispatch({
          type: SIGN_UP_RESET,
        });
      }, 5000);
      if (error.response.data.error) {
        dispatch({
          type: SIGN_UP_FAIL,
          payload: error.response.data.error,
        });
      } else {
        dispatch({
          type: SIGN_UP_FAIL,
          payload: "Server error, please try again",
        });
      }
    }, 3000);
  }
};

export const signOut = () => (dispatch) => {
  signout(() => {
    dispatch({
      type: SIGN_OUT,
    });
  });
};

export const passwordNotMatch = (error) => (dispatch) => {
  dispatch({
    type: SIGN_UP_START,
  });
  setTimeout(() => {
    setTimeout(() => {
      dispatch({
        type: SIGN_UP_RESET,
      });
    }, 5000);
    dispatch({
      type: SIGN_UP_FAIL,
      payload: error,
    });
  }, 3000);
};

export const loginWithGoogle = (response, error) => (dispatch) => {
  dispatch({
    type: ON_GOOGLE_SIGN_IN_START,
  });
  dispatch({
    type: ON_GOOGLE_SIGN_IN_SUCCESS,
    payload: response
  })
  if(error) {
    dispatch({
      type: ON_GOOGLE_SIGN_IN_FAILED,
      payload: error
    })
  }
};
