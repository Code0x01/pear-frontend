import { combineReducers } from "redux";
import auth from "./auth/reducer";
import topnav from "./topnav/reducer";
import orderPreview from "./order-preview/reducer";

const reducers = combineReducers({
    auth,
    topnav,
    orderPreview
});

export default reducers;