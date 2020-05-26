import {
  ON_CREATE_CARD_START,
  ON_CREATE_CARD_SUCCESS,
  ON_CREATE_CARD_FAILED,
} from "../actions/types";

const initialState = {
    success: null,
    loading: false,
  error: "",
  btnSubmit: {
    msg: "Order !",
    color: "default",
  },
};
export default function(state = initialState, action) {
  switch (action.type) {
    case ON_CREATE_CARD_START:
      return {
        ...state,
        loading: true,
        btnSubmit: {
          msg: "Loading",
          color: "disabled",
        },
      };
    case ON_CREATE_CARD_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        error: "",
        btnSubmit: {
          msg: "Ordered !!",
          color: "primary",
        },
      };
    case ON_CREATE_CARD_FAILED:
      return {
        ...state,
        error: action.payload,
        success: false,
        loading: false,
        btnSubmit: {
          msg: "Error",
          color: "secondary",
        },
      };
    default:
      return state;
  }
}
