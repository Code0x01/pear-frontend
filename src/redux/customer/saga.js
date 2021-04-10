import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
	ADD_CUSTOMER_START,
	UPDATE_CUSTOMER_START,
	DELETE_CUSTOMER_START,
	FETCH_ONE_CUSTOMER_START,
	FETCH_ALL_CUSTOMERS_START
} from "../actions";
import {
	addCustomerSuccess,
	addCustomerFailure,
	updateCustomerSuccess,
	updateCustomerFailure,
	deleteCustomerSuccess,
	deleteCustomerFailure,
	fetchOneCustomerSuccess,
	fetchOneCustomerFailure,
	fetchAllCustomersSuccess,
	fetchAllCustomersFailure
} from "./actions"
import instance from "../../helpers/instance";

/* ADD CUSTOMER */
const addCustomerAsync = async (customer) => {
	return await instance.post("api/customers", customer).then(resp => resp.data);
};

function* addCustomer({ payload }) {
	const { customer } = payload;
	let resp = null;
	try {
		resp = yield call(addCustomerAsync, customer);
		if (resp) yield put(addCustomerSuccess());
		if (resp.errors) yield put(addCustomerFailure(resp.errors));
	} catch(error) { }
}

export function* watchAddCustomerStart() {
	yield takeEvery(ADD_CUSTOMER_START, addCustomer);
}

/* UPDATE CUSTOMER */
const updateCustomerAsync = async (customer) => {
	return await instance.put("api/customers", customer).then(resp => resp.data);
};

function* updateCustomer({ payload }) {
	const { customer } = payload;
	let resp = null;
	try {
		resp = yield call(updateCustomerAsync, customer);
		if (resp) yield put(updateCustomerSuccess());
		if (resp.errors) yield put(updateCustomerFailure(resp.errors));
	} catch(error) { }
}

export function* watchUpdateCustomerStart() {
	yield takeEvery(UPDATE_CUSTOMER_START, updateCustomer);
}

/* DELETE CUSTOMER */
const deleteCustomerAsync = async (id) => {
	return await instance.delete(`api/customers/${id}`).then(resp => resp.data);
};

function* deleteCustomer({ payload }) {
	const { id } = payload;
	let resp = null;
	try {
		resp = yield call(deleteCustomerAsync, id);
		if (resp) yield put(deleteCustomerSuccess());
		if (resp.errors) yield put(deleteCustomerFailure(resp.errors));
	} catch(error) { }
}

export function* watchDeleteCustomerStart() {
	yield takeEvery(DELETE_CUSTOMER_START, deleteCustomer);
}

/* FETCH ONE CUSTOMER */
const fetchOneCustomerAsync = async (id) => {
	return await instance.get(`api/customers/${id}`).then(resp => resp.data);
};

function* fetchOneCustomer({ payload }) {
	const { id } = payload;
	let resp = null;
	try {
		resp = yield call(fetchOneCustomerAsync, id);
		if (resp) yield put(fetchOneCustomerSuccess(resp));
		if (resp.errors) yield put(fetchOneCustomerFailure(resp.errors));
	} catch(error) { }
}

export function* watchFetchOneCustomerStart() {
	yield takeEvery(FETCH_ONE_CUSTOMER_START, fetchOneCustomer);
}

/* FETCH ALL CUSTOMERS */
const fetchAllCustomersAsync = async () => {
	return await instance.get("api/customers").then(resp => resp.data);
};

function* fetchAllCustomers() {
	let resp = null;
	try {
		resp = yield call(fetchAllCustomersAsync);
		if (resp) yield put(fetchAllCustomersSuccess(resp));
		if (resp.errors) yield put(fetchAllCustomersFailure(resp.errors));
	} catch(error) {}
}

export function* watchFetchAllCustomersStart() {
	yield takeEvery(FETCH_ALL_CUSTOMERS_START, fetchAllCustomers);
}

export default function* rootSaga() {
	yield all([
		fork(watchAddCustomerStart),
		fork(watchUpdateCustomerStart),
		fork(watchDeleteCustomerStart),
		fork(watchFetchOneCustomerStart),
		fork(watchFetchAllCustomersStart)
	]);
}