import { combineReducers } from "redux";
import app from "./app.reducer";
import page from "./page.reducer";
import socials from "./social.reducer";
import auth from "./auth.reducer";
import card from "./card.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["socials", "auth", "app"],
  blacklist: ["page"],
};

const rootReducer = combineReducers({
  app,
  auth,
  page,
  socials,
  card
});

export default persistReducer(persistConfig, rootReducer);
