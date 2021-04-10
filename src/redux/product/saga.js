import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
	ADD_PRODUCT_START,
	UPDATE_PRODUCT_START,
	DELETE_PRODUCT_START,
	FETCH_ONE_PRODUCT_START,
	FETCH_ALL_PRODUCTS_START
} from "../actions";
import {
	addProductSuccess,
	addProductFailure,
	updateProductSuccess,
	updateProductFailure,
	deleteProductSuccess,
	deleteProductFailure,
	fetchOneProductSuccess,
	fetchOneProductFailure,
	fetchAllProductsSuccess,
	fetchAllProductsFailure
} from "./actions"
import instance from "../../helpers/instance";

/* ADD PRODUCT */
const addProductAsync = async (product) => {
	return await instance.post("api/products", product).then(resp => resp.data);
};

function* addProduct({ payload }) {
	const { product } = payload;
	let resp = null;
	try {
		resp = yield call(addProductAsync, product);
		if (resp) yield put(addProductSuccess());
		if (resp.errors) yield put(addProductFailure(resp.errors));
	} catch(error) { }
}

export function* watchAddProductStart() {
	yield takeEvery(ADD_PRODUCT_START, addProduct);
}

/* UPDATE PRODUCT */
const updateProductAsync = async (product) => {
	return await instance.put("api/products", product).then(resp => resp.data);
};

function* updateProduct({ payload }) {
	const { product } = payload;
	let resp = null;
	try {
		resp = yield call(updateProductAsync, product);
		if (resp) yield put(updateProductSuccess());
		if (resp.errors) yield put(updateProductFailure(resp.errors));
	} catch(error) { }
}

export function* watchUpdateProductStart() {
	yield takeEvery(UPDATE_PRODUCT_START, updateProduct);
}

/* DELETE PRODUCT */
const deleteProductAsync = async (id) => {
	return await instance.delete(`api/products/${id}`).then(resp => resp.data);
}

function* deleteProduct({ payload }) {
	const { id } = payload;
	let resp = null;
	try {
		resp = yield call(deleteProductAsync, id);
		if (resp) yield put(deleteProductSuccess());
		if (resp.errors) yield put(deleteProductFailure(resp.errors));
	} catch(error) { }
}

export function* watchDeleteProductStart() {
	yield takeEvery(DELETE_PRODUCT_START, deleteProduct);
}

/* FETCH ONE PRODUCT */
const fetchOneProductAsync = async (id) => {
	return await instance.get(`api/products/${id}`).then(resp => resp.data);
};

function* fetchOneProduct({ payload }) {
	const { id } = payload;
	let resp = null;
	try {
		resp = yield call(fetchOneProductAsync, id);
		if (resp) yield put(fetchOneProductSuccess(resp));
		if (resp.errors) yield put(fetchAllProductsFailure(resp.errors));
	} catch(error) { }
}

export function* watchFetchOneProductStart() {
	yield takeEvery(FETCH_ONE_PRODUCT_START, fetchOneProduct);
}

/* FETCH ALL PRODUCTS */
const fetchAllProductsAsync = async () => {
	return await instance.get("api/products").then(resp => resp.data);
}

function* fetchAllProducts() {
	let resp = null;
	try {
		resp = yield call(fetchAllProductsAsync);
		if (resp) yield put(fetchAllProductsSuccess(resp));
		if (resp.errors) yield put(fetchAllProductsFailure(resp.errors));
	} catch(error) { }
}

export function* watchFetchAllProductsStart() {
	yield takeEvery(FETCH_ALL_PRODUCTS_START, fetchAllProducts);
}

export default function* rootSaga() {
	yield all([
		fork(watchAddProductStart),
		fork(watchUpdateProductStart),
		fork(watchDeleteProductStart),
		fork(watchFetchOneProductStart),
		fork(watchFetchAllProductsStart)
	]);
}