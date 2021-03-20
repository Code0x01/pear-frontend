import { all } from "redux-saga/effects";
import authSaga from "./auth/saga";
import topnavSaga from "./topnav/saga";

export default function* rootSaga(getState) {
  yield all([
  	authSaga(),
  	topnavSaga()
  ]);
}
