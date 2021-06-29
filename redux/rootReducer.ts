import { combineReducers } from "redux";
import { countReducer } from "./countReducer/countReducer";

export const rootReducer = combineReducers({ count: countReducer });
