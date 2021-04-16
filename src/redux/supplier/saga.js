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
	fetchAllSuppliersSuccess,
	fetchAllSuppliersFailure,
	unloadSavedSupplier,
} from "./actions"
import instance from "../../helpers/instance";

/* ADD SUPPLIER */
const addSupplierAsync = async (supplier) => {
	return await instance.post("api/suppliers", supplier)
		.then(resp => ({ supplier: resp.data, message: "Supplier added successfully" }))
		.catch(err => ({ errors: err.response.data.errors }));
};

function* addSupplier({ payload }) {
	const { supplier } = payload;
	try {
		let resp = yield call(addSupplierAsync, supplier);
		if (resp.supplier) yield put(addSupplierSuccess(resp.supplier, resp.message));
		if (resp.errors) yield put(addSupplierFailure(resp.errors));
	} catch (error) { }
}

export function* watchAddSupplierStart() {
	yield takeEvery(ADD_SUPPLIER_START, addSupplier);
}

/* UPDATE SUPPLIER */
const updateSupplierAsync = async (supplier) => {
	return await instance.put("api/suppliers", supplier)
		.then(resp => ({ supplier: resp.data, message: "Supplier updated successfully" }))
		.catch(err => ({ errors: err.response.data.errors }));
};

function* updateSupplier({ payload }) {
	const { supplier } = payload;
	try {
		let resp = yield call(updateSupplierAsync, supplier);
		if (resp.supplier) {
			yield put(updateSupplierSuccess(resp.supplier, resp.message));
			yield put(unloadSavedSupplier());
		}
		if (resp.errors) yield put(updateSupplierFailure(resp.errors));
	} catch (error) { }
}

export function* watchUpdateSupplierStart() {
	yield takeEvery(UPDATE_SUPPLIER_START, updateSupplier);
}

/* DELETE SUPPLIER */
const deleteSupplierAsync = async (id) => {
	return await instance.delete(`api/suppliers/${id}`)
		.then(resp => ({ id: id, message: "Supplier deleted successfully" }))
		.catch(err => ({ errors: err.response.data.errors }));
};

function* deleteSupplier({ payload }) {
	const { id } = payload;
	try {
		let resp = yield call(deleteSupplierAsync, id);
		if (resp.id) yield put(deleteSupplierSuccess(id, resp.message));
		if (resp.errors) yield put(deleteSupplierFailure(resp.errors));
	} catch(error) { }
}

export function* watchDeleteSupplierStart() {
	yield takeEvery(DELETE_SUPPLIER_START, deleteSupplier);
}

/* FETCH ONE SUPPLIER */
const fetchOneSupplierAsync = async (id) => {
	return await instance.get(`api/suppliers/${id}`)
		.then(resp => ({ supplier: resp.data }))
		.catch(err => ({ errors: err.response.data.errors }));
};

function* fetchOneSupplier({ payload }) {
	const { id } = payload;
	try {
		let resp = yield call(fetchOneSupplierAsync, id);
		if (resp.supplier) yield put(fetchAllSuppliersSuccess(resp.supplier));
		if (resp.errors) yield put(fetchAllSuppliersFailure(resp.errors));
	} catch(error) { }
}

export function* watchFetchOneSupplierStart() {
	yield takeEvery(FETCH_ONE_SUPPLIER_START, fetchOneSupplier);
}

/* FETCH ALL SUPPLIERS */
const fetchAllSuppliersAsync = async () => {
	return await instance.get("api/suppliers")
		.then(resp => ({ suppliers: resp.data }))
		.catch(err => ({ errors: err.response.data.errors }));
};

function* fetchAllSuppliers() {
	let resp = null;
	try {
		resp = yield call(fetchAllSuppliersAsync);
		if (resp.suppliers) yield put(fetchAllSuppliersSuccess(resp.suppliers));
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