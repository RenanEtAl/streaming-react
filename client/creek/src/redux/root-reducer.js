import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import streamReducer from "./stream/stream.reducers";
import authReducer from "./auth/auth.reducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer
});
