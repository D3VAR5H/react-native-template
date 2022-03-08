import { combineReducers } from "redux";
import statusbarReducer from "./statusbarReducer";

const reducers = combineReducers({
    statusBar: statusbarReducer,
});

export default reducers;