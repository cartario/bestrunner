import {combineReducers} from "redux";
import {reducer} from "./reducer.js";

export const reducers = combineReducers({
  SESSIONS: reducer,  
}); 
