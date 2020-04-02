import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./root-reducer";
import logger from "redux-logger";
import reduxThunk from 'redux-thunk'

// redux devtools setup
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [reduxThunk];
// apply redux logger
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

export default store;
