import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
	ADD_ORDER_START,
	UPDATE_ORDER_START,
	DELETE_ORDER_START,
	FETCH_ONE_ORDER_START,
	FETCH_ALL_ORDERS_START
} from "../actions";
import {
	addOrderSuccess,
	addOrderFailure,
	updateOrderSuccess,
	updateOrderFailure,
	deleteOrderSuccess,
	deleteOrderFailure,
	fetchOneOrderSuccess,
	fetchOneOrderFailure,
	fetchAllOrdersSuccess,
	fetchAllOrdersFailure
} from "./actions"
import instance from "../../helpers/instance";

/* ADD ORDER */
const addOrderAsync = async (order) => {
	return await instance.post("api/orders", order).then(resp => resp.data);
}

function* addOrder({ payload }) {
	const { order } = payload;
	let resp = null;
	try {
		resp = yield call(addOrderAsync, order);
		if (resp) yield put(addOrderSuccess());
		if (resp.errors) yield put(addOrderFailure(resp.errors));
	} catch (error) { }
}

export function* watchAddOrderStart() {
	yield takeEvery(ADD_ORDER_START, addOrder);
}

/* UPDATE ORDER */
const updateOrderAsync = async (order) => {
	return await instance.put("api/orders", order).then(resp => resp.data);
};

function* updateOrder({ payload }) {
	const { order } = payload;
	let resp = null;
	try {
		resp = yield call(updateOrderAsync, order);
		if (resp) yield put(updateOrderSuccess(order));
		if (resp.errors) yield put(updateOrderFailure(resp.errors));
	} catch(error) { }
}

export function* watchUpdateOrderStart() {
	yield takeEvery(UPDATE_ORDER_START, updateOrder);
}

/* DELETE ORDER */
const deleteOrderAsync = async (id) => {
	return await instance.delete(`api/orders/${id}`).then(resp => resp.data);
};

function* deleteOrder({ payload }) {
	const { id } = payload;
	let resp = null;
	try {
		resp = yield call(deleteOrderAsync, id);
		if (resp) yield put(deleteOrderSuccess());
		if (resp.errors) yield put(deleteOrderFailure(resp.errors));
	} catch(error) { }
}

export function* watchDeleteOrderStart() {
	yield takeEvery(DELETE_ORDER_START, deleteOrder);
}

/* FETCH ONE ORDER */
const fetchOneOrderAsync = async (id) =>  {
	return await instance.get(`api/orders/${id}`).then(resp => resp.data);
};

function* fetchOneOrder({ payload }) {
	const { id } = payload;
	let resp = null;
	try {
		resp = yield call(fetchOneOrderAsync, id);
		if (resp) yield put(fetchOneOrderSuccess(resp));
		if (resp.errors) yield put(fetchOneOrderFailure(resp.errors));
	} catch(error) { }
}

export function* watchFetchOneOrderStart() {
	yield takeEvery(FETCH_ONE_ORDER_START, fetchOneOrder);
}

/* FETCH ALL ORDERS */
const fetchAllOrdersAsync = async () => {
	return await instance.get("api/orders").then(resp => resp.data);
};

function* fetchAllOrders() {
	let resp = null;
	try {
		resp = yield all(fetchAllOrdersAsync);
		if (resp) yield put(fetchAllOrdersSuccess());
		if (resp.errors) yield put(fetchAllOrdersFailure(resp.errors));
	} catch(error) { }
}

export function* watchFetchAllOrdersStart() {
	yield takeEvery(FETCH_ALL_ORDERS_START, fetchAllOrders);
}

export default function* rootSaga() {
	yield all([
		fork(watchAddOrderStart),
		fork(watchUpdateOrderStart),
		fork(watchDeleteOrderStart),
		fork(watchFetchOneOrderStart),
		fork(watchFetchAllOrdersStart)
	]);
}