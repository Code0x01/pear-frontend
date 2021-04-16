import { combineReducers } from "redux";
import auth from "./auth/reducer";
import topnav from "./topnav/reducer";
import orderPreview from "./order-preview/reducer";
import category from "./category/reducer";
import customer from "./customer/reducer";
import product from "./product/reducer";
import supplier from "./supplier/reducer";
import order from "./order/reducer";
import staff from "./staff/reducer";
import cart from "./cart/reducer";

const reducers = combineReducers({
  auth,
  topnav,
  orderPreview,
  category,
  customer,
  product,
  supplier,
  order,
  staff,
  cart,
});

export default reducers;