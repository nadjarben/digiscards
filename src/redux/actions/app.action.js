import { ON_PLAN_CHOOSEN } from "./types";


export const onPlanChoosen = (plan) => (dispatch) => {
  dispatch({
    type: ON_PLAN_CHOOSEN,
    payload: plan
  });
};
