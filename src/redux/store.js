import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

const isDevtools =
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(...middleware))
    : applyMiddleware(...middleware);

export const store = createStore(rootReducer, initialState, isDevtools);
export const persistor = persistStore(store);
