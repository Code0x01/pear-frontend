import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
	ADD_ORDER_START,
	DELETE_ORDER_START,
	FETCH_ONE_ORDER_START,
	FETCH_ALL_ORDERS_START
} from "../actions";
import {
	addOrderSuccess,
	addOrderFailure,
	deleteOrderSuccess,
	deleteOrderFailure,
	fetchOneOrderSuccess,
	fetchOneOrderFailure,
	fetchAllOrdersSuccess,
	fetchAllOrdersFailure,
} from "./actions";
import {
	initCart,
} from "../cart/actions";
import instance from "../../helpers/instance";

/* ADD ORDER */
const addOrderAsync = async (order) => {
	return await instance.post("api/orders", order)
		.then(resp => ({ order: resp.data, message: "Order created successfully" }))
		.catch(err => ({ errors: err.response.data.errors }));
}

function* addOrder({ payload }) {
	const { order, history } = payload;
	try {
		let resp = yield call(addOrderAsync, order);
		if (resp.order) {
			yield put(addOrderSuccess(resp.message));
			yield put(initCart());
			console.log(history);
			history.push("/app/orders");
		}
		if (resp.errors) yield put(addOrderFailure(resp.errors));
	} catch (error) { }
}

export function* watchAddOrderStart() {
	yield takeEvery(ADD_ORDER_START, addOrder);
}

/* DELETE ORDER */
const deleteOrderAsync = async (id) => {
	return await instance.delete(`api/orders/${id}`)
		.then(resp => ({ message: "Order deleted successfully" }))
		.catch(err => ({ errors: err.response.data.errors }));
};

function* deleteOrder({ payload }) {
	const { id } = payload;
	try {
		let resp = yield call(deleteOrderAsync, id);
		if (resp.message) yield put(deleteOrderSuccess(resp.message));
		if (resp.errors) yield put(deleteOrderFailure(resp.errors));
	} catch(error) { }
}

export function* watchDeleteOrderStart() {
	yield takeEvery(DELETE_ORDER_START, deleteOrder);
}

/* FETCH ONE ORDER */
const fetchOneOrderAsync = async (id) =>  {
	return await instance.get(`api/orders/${id}`)
		.then(resp => ({ order: resp.data }))
		.catch(resp => ({ errors: resp.response.data.errors }));
};

function* fetchOneOrder({ payload }) {
	const { id } = payload;
	try {
		let resp = yield call(fetchOneOrderAsync, id);
		if (resp.order) yield put(fetchOneOrderSuccess(resp.order));
		if (resp.errors) yield put(fetchOneOrderFailure(resp.errors));
	} catch(error) { }
}

export function* watchFetchOneOrderStart() {
	yield takeEvery(FETCH_ONE_ORDER_START, fetchOneOrder);
}

/* FETCH ALL ORDERS */
const fetchAllOrdersAsync = async () => {
	return await instance.get("api/orders")
		.then(resp => ({ orders: resp.data }))
		.catch(err => ({ errors: err.response.data.errors }));
};

function* fetchAllOrders() {
	try {
		let resp = yield call(fetchAllOrdersAsync);
		if (resp.orders) yield put(fetchAllOrdersSuccess(resp.orders));
		if (resp.errors) yield put(fetchAllOrdersFailure(resp.errors));
	} catch(error) { }
}

export function* watchFetchAllOrdersStart() {
	yield takeEvery(FETCH_ALL_ORDERS_START, fetchAllOrders);
}

export default function* rootSaga() {
	yield all([
		fork(watchAddOrderStart),
		fork(watchDeleteOrderStart),
		fork(watchFetchOneOrderStart),
		fork(watchFetchAllOrdersStart)
	]);
}