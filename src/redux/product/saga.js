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
	fetchAllProductsSuccess,
	fetchAllProductsFailure,
	unloadSavedProduct,
} from "./actions"
import instance from "../../helpers/instance";

/* ADD PRODUCT */
const addProductAsync = async (product) => {
	return await instance.post("api/products", product)
		.then(resp => ({ product: resp.data, message: "Product created successfully" }))
		.catch(err => ({ errors: err.response.data.errors }));
};

function* addProduct({ payload }) {
	const { product } = payload;
	try {
		let resp = yield call(addProductAsync, product);
		if (resp.product) yield put(addProductSuccess(resp.product, resp.message));
		if (resp.errors) yield put(addProductFailure(resp.errors));
	} catch(error) { }
}

export function* watchAddProductStart() {
	yield takeEvery(ADD_PRODUCT_START, addProduct);
}

/* UPDATE PRODUCT */
const updateProductAsync = async (product) => {
	return await instance.put("api/products", product)
		.then(resp => ({ product: resp.data, message: "Product updated successfully" }))
		.catch(err => ({ errors: err.response.data.errors }));
};

function* updateProduct({ payload }) {
	const { product } = payload;
	try {
		let resp = yield call(updateProductAsync, product);
		if (resp.product) {
			yield put(updateProductSuccess(resp.product, resp.message));
			yield put(unloadSavedProduct());
		}
		if (resp.errors) yield put(updateProductFailure(resp.errors));
	} catch(error) { }
}

export function* watchUpdateProductStart() {
	yield takeEvery(UPDATE_PRODUCT_START, updateProduct);
}

/* DELETE PRODUCT */
const deleteProductAsync = async (id) => {
	return await instance.delete(`api/products/${id}`)
		.then(resp => ({ id: id, message: "Product deleted successfully" }))
		.catch(err => ({ errors: err.response.data.errors }));
}

function* deleteProduct({ payload }) {
	const { id } = payload;
	try {
		let resp = yield call(deleteProductAsync, id);
		if (resp.id) yield put(deleteProductSuccess(id, resp.message));
		if (resp.errors) yield put(deleteProductFailure(resp.errors));
	} catch(error) { }
}

export function* watchDeleteProductStart() {
	yield takeEvery(DELETE_PRODUCT_START, deleteProduct);
}

/* FETCH ONE PRODUCT */
const fetchOneProductAsync = async (id) => {
	return await instance.get(`api/products/${id}`)
		.then(resp => ({ product: resp.data }))
		.catch(err => ({ errors: err.response.data.response }));
};

function* fetchOneProduct({ payload }) {
	const { id } = payload;
	try {
		let resp = yield call(fetchOneProductAsync, id);
		if (resp.product) yield put(fetchOneProductSuccess(resp.product));
		if (resp.errors) yield put(fetchAllProductsFailure(resp.errors));
	} catch(error) { }
}

export function* watchFetchOneProductStart() {
	yield takeEvery(FETCH_ONE_PRODUCT_START, fetchOneProduct);
}

/* FETCH ALL PRODUCTS */
const fetchAllProductsAsync = async () => {
	return await instance.get("api/products")
		.then(resp => ({ products: resp.data }))
		.catch(err => ({ errors: err.response.data.errors }));
}

function* fetchAllProducts() {
	try {
		let resp = yield call(fetchAllProductsAsync);
		if (resp.products) yield put(fetchAllProductsSuccess(resp.products));
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