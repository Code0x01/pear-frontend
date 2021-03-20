import { combineReducers } from "redux";
import auth from "./auth/reducer";
import topnav from "./topnav/reducer";

const reducers = combineReducers({
    auth,
    topnav
});

export default reducers;