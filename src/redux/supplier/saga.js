import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
	ADD_SUPPLIER_START,
	UPDATE_SUPPLIER_START,
	DELETE_SUPPLIER_START,
	FETCH_ONE_SUPPLIER_START,
	FETCH_ALL_SUPPLIERS_START
} from "../actions";
import {
	addSupplierSuccess,
	addSupplierFailure,
	updateSupplierSuccess,
	updateSupplierFailure,
	deleteSupplierSuccess,
	deleteSupplierFailure,
	fetchOneSupplierSuccess,
	fetchOneSupplierFailure,
	fetchAllSuppliersSuccess,
	fetchAllSuppliersFailure
} from "./actions"
import instance from "../../helpers/instance";

/* ADD SUPPLIER */
const addSupplierAsync = async (supplier) => {
	return await instance.post("api/suppliers", supplier).then(resp => resp.data);
};

function* addSupplier({ payload }) {
	const { supplier } = payload;
	let resp = null;
	try {
		resp = yield call(addSupplierAsync, supplier);
		if (resp) yield put(addSupplierSuccess());
		if (resp.errors) yield put(addSupplierFailure(resp.errors));
	} catch (error) { }
}

export function* watchAddSupplierStart() {
	yield takeEvery(ADD_SUPPLIER_START, addSupplier);
}

/* UPDATE SUPPLIER */
const updateSupplierAsync = async (supplier) => {
	return await instance.put("api/suppliers", supplier).then(resp => resp.data);
};

function* updateSupplier({ payload }) {
	const { supplier } = payload;
	let resp = null;
	try {
		resp = yield call(updateSupplierAsync, supplier);
		if (resp) yield put(updateSupplierSuccess());
		if (resp.errors) yield put(updateSupplierFailure(resp.errors));
	} catch (error) { }
}

export function* watchUpdateSupplierStart() {
	yield takeEvery(UPDATE_SUPPLIER_START, updateSupplier);
}

/* DELETE SUPPLIER */
const deleteSupplierAsync = async (id) => {
	return await instance.delete(`api/suppliers/${id}`).then(resp => resp.data);
};

function* deleteSupplier({ payload }) {
	const { id } = payload;
	let resp = null;
	try {
		resp = yield call(deleteSupplierAsync, id);
		if (resp) yield put(deleteSupplierSuccess(resp));
		if (resp.errors) yield put(deleteSupplierFailure(resp.errors));
	} catch(error) { }
}

export function* watchDeleteSupplierStart() {
	yield takeEvery(DELETE_SUPPLIER_START, deleteSupplier);
}

/* FETCH ONE SUPPLIER */
const fetchOneSupplierAsync = async (id) => {
	return await instance.get(`api/suppliers/${id}`).then(resp => resp.data);
};

function* fetchOneSupplier({ payload }) {
	const { id } = payload;
	let resp = null;
	try {
		resp = yield call(fetchOneSupplierAsync, id);
		if (resp) yield put(fetchAllSuppliersSuccess(resp));
		if (resp.errors) yield put(fetchAllSuppliersFailure(resp.errors));
	} catch(error) { }
}

export function* watchFetchOneSupplierStart() {
	yield takeEvery(FETCH_ONE_SUPPLIER_START, fetchOneSupplier);
}

/* FETCH ALL SUPPLIERS */
const fetchAllSuppliersAsync = async () => {
	return await instance.get("api/suppliers").then(resp => resp.data);
};

function* fetchAllSuppliers() {
	let resp = null;
	try {
		resp = yield call(fetchAllSuppliersAsync);
		if (resp) yield put(fetchAllSuppliersSuccess(resp));
		if (resp.errors) yield put(fetchAllSuppliersFailure(resp.errors));
	} catch(error) { }
}

export function* watchFetchAllSuppliersStart() {
	yield takeEvery(FETCH_ALL_SUPPLIERS_START, fetchAllSuppliers);
}

export default function* rootSaga() {
	yield all([
		fork(watchAddSupplierStart),
		fork(watchUpdateSupplierStart),
		fork(watchDeleteSupplierStart),
		fork(watchFetchOneSupplierStart),
		fork(watchFetchAllSuppliersStart)
	]);
}