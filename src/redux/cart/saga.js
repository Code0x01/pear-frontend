import { all, fork, put, takeEvery } from "redux-saga/effects";
import {
	ADD_ITEM,
	REMOVE_ITEM,
	CHANGE_QUANTITY,
} from "../actions";
import {
	calculateTotal
} from "./actions";

function* invokeCalculateTotal() {
	yield put(calculateTotal());
}

export function* watchAddItem() {
	yield takeEvery(ADD_ITEM, invokeCalculateTotal);
}

export function* watchRemoveItem() {
	yield takeEvery(REMOVE_ITEM, invokeCalculateTotal);
}

export function* watchChangeQuantity() {
	yield takeEvery(CHANGE_QUANTITY, invokeCalculateTotal);
}

export default function* rootSaga() {
	yield all([
		fork(watchAddItem),
		fork(watchRemoveItem),
		fork(watchChangeQuantity)
	]);
}