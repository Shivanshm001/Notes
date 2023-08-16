import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, legacy_createStore } from "redux";

//Root Reducer
import rootReducer from './rootReducer';
import logger from "redux-logger";

const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))
export default store;