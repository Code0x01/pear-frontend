import { all } from "redux-saga/effects";
import authSaga from "./auth/saga";
import topnavSaga from "./topnav/saga";
import categorySaga from "./category/saga";
import customerSaga from "./customer/saga";
import productSaga from "./product/saga";
import supplierSaga from "./supplier/saga";
import orderSaga from "./order/saga";
import staffSaga from "./staff/saga";
import cartSaga from "./cart/saga";

export default function* rootSaga(getState) {
  yield all([
  	authSaga(),
  	topnavSaga(),
  	categorySaga(),
  	customerSaga(),
  	productSaga(),
  	supplierSaga(),
  	orderSaga(),
  	staffSaga(),
    cartSaga(),
  ]);
}
