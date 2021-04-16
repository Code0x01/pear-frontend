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
	fetchAllCustomersFailure,
	unloadSavedCustomer
} from "./actions"
import instance from "../../helpers/instance";

/* ADD CUSTOMER */
const addCustomerAsync = async (customer) => {
	return await instance.post("api/customers", customer)
		.then(resp => ({ customer: resp.data, message: "Customer created successfully" }))
		.catch(err => ({ errors: err.response.data.errors }));
};

function* addCustomer({ payload }) {
	const { customer } = payload;
	try {
		let resp = yield call(addCustomerAsync, customer);
		if (resp.customer) yield put(addCustomerSuccess(resp.customer, resp.message));
		if (resp.errors) yield put(addCustomerFailure(resp.errors));
	} catch(error) { }
}

export function* watchAddCustomerStart() {
	yield takeEvery(ADD_CUSTOMER_START, addCustomer);
}

/* UPDATE CUSTOMER */
const updateCustomerAsync = async (customer) => {
	return await instance.put("api/customers", customer)
		.then(resp => ({ customer: resp.data, message: "Customer updated successfully" }))
		.catch(err => ({ errors: err.response.data.errors }));
};

function* updateCustomer({ payload }) {
	const { customer } = payload;
	try {
		let resp = yield call(updateCustomerAsync, customer);
		if (resp.customer) {
			yield put(updateCustomerSuccess(resp.customer, resp.message));
			yield put(unloadSavedCustomer());
		}
		if (resp.errors) yield put(updateCustomerFailure(resp.errors));
	} catch(error) { }
}

export function* watchUpdateCustomerStart() {
	yield takeEvery(UPDATE_CUSTOMER_START, updateCustomer);
}

/* DELETE CUSTOMER */
const deleteCustomerAsync = async (id) => {
	return await instance.delete(`api/customers/${id}`)
		.then(resp => ({ id: id, message: "Customer deleted successfully" }))
		.catch(err => ({ errors: err.response.data.errors }));
};

function* deleteCustomer({ payload }) {
	const { id } = payload;
	try {
		let resp = yield call(deleteCustomerAsync, id);
		if (resp.id) yield put(deleteCustomerSuccess(id, resp.message));
		if (resp.errors) yield put(deleteCustomerFailure(resp.errors));
	} catch(error) { }
}

export function* watchDeleteCustomerStart() {
	yield takeEvery(DELETE_CUSTOMER_START, deleteCustomer);
}

/* FETCH ONE CUSTOMER */
const fetchOneCustomerAsync = async (id) => {
	return await instance.get(`api/customers/${id}`)
		.then(resp => ({ customer: resp.data }))
		.catch(err => ({ errors: err.response.data.errors }));
};

function* fetchOneCustomer({ payload }) {
	const { id } = payload;
	try {
		let resp = yield call(fetchOneCustomerAsync, id);
		if (resp.customer) yield put(fetchOneCustomerSuccess(resp.customer));
		if (resp.errors) yield put(fetchOneCustomerFailure(resp.errors));
	} catch(error) { }
}

export function* watchFetchOneCustomerStart() {
	yield takeEvery(FETCH_ONE_CUSTOMER_START, fetchOneCustomer);
}

/* FETCH ALL CUSTOMERS */
const fetchAllCustomersAsync = async () => {
	return await instance.get("api/customers")
		.then(resp => ({ customers: resp.data }))
		.catch(err => ({ errors: err.response.data.errors }));
};

function* fetchAllCustomers() {
	try {
		let resp = yield call(fetchAllCustomersAsync);
		if (resp.customers) yield put(fetchAllCustomersSuccess(resp.customers));
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