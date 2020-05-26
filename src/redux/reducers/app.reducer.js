import { ON_PLAN_CHOOSEN } from "../actions/types";

const initialState = {
    plan: ""
};

export default function (state = initialState, action) {
  switch (action.type) {
      case ON_PLAN_CHOOSEN:
        return {
          ...state, 
          plan: action.payload
        }
    default:
      return state;
  }
}
