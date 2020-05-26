import {
  TOGGLE_LOGIN,
  CHANGE_PAGE_LOGIN,
  SIGN_IN_START,
  SIGN_IN_FAIL,
  SIGN_IN_SUCCESS,
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
  ON_GOOGLE_SIGN_IN_FAILED
} from "../actions/types";

const initialState = {
  toggle: false,
  token: undefined,
  pageLogin: "signin",
  isAuthenticated: null,
  loadingUser: null,
  user: null,
  error: "",
  btnSubmit: {
    msg: "Submit",
    color: "#404040",
  },
};
export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_LOGIN:
      return {
        ...state,
        pageLogin: action.payload,
        toggle: !state.toggle,
        error: initialState.error,
        btnSubmit: initialState.btnSubmit,
      };
      case CHANGE_PAGE_LOGIN:
      return {
        ...state,
        pageLogin: action.payload
      };
    case SIGN_IN_START:
      return {
        ...state,
        btnSubmit: {
          msg: "Loading",
          color: "#404040",
        },
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        error: "",
        btnSubmit: {
          msg: "Success",
          color: "#4caf50",
        },
        token: action.payload.token,
        user: {
          name: action.payload.user.name,
          mail: action.payload.user.email
        }
      };
    case SIGN_IN_FAIL:
      return {
        ...state,
        error: action.payload,
        btnSubmit: {
          msg: "Error",
          color: "#1ec503",
        },
      };
      case SIGN_IN_RESET:
      return {
        ...state,
        error: initialState.error,
        btnSubmit: initialState.btnSubmit
      };
    case FETCH_USER_START:
      return {
        ...state,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true
      };
    case FETCH_USER_FAIL:
      return {
        ...state,
        isAuthenticated: false,
      };
      case SIGN_UP_START:
      return {
        ...state,
        btnSubmit: {
          msg: "Loading",
          color: "#404040",
        },
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        error: "",
        btnSubmit: {
          msg: "Success",
          color: "#4caf50",
        },
      };
    case SIGN_UP_FAIL:
      return {
        ...state,
        error: action.payload,
        btnSubmit: {
          msg: "Error",
          color: "#1ec503",
        },
      };
      case SIGN_UP_RESET:
        return {
          ...state,
          error: initialState.error,
          btnSubmit: initialState.btnSubmit
        };
        case SIGN_OUT:
        return {
          initialState
        };
      case ON_GOOGLE_SIGN_IN_START:
        return {
          ...state,
          loadingUser: true
        }
        case ON_GOOGLE_SIGN_IN_SUCCESS:
        return {
          ...state,
          toggle: !state.toggle,
          token: action.payload.tokenId,
          loadingUser: false,
          user: {
            name: action.payload.Pt.Ad,
            email: action.payload.Pt.yu
          }
        }
        case ON_GOOGLE_SIGN_IN_FAILED:
        return {
          ...state,
          error: action.payload
        }
    default:
      return state;
  }
}
