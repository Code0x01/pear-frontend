import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
	ADD_CATEGORY_START,
	UPDATE_CATEGORY_START,
	DELETE_CATEGORY_START,
	FETCH_ONE_CATEGORY_START,
	FETCH_ALL_CATEGORIES_START
} from "../actions";
import {
	addCategorySuccess,
	addCategoryFailure,
	updateCategorySuccess,
	updateCategoryFailure,
	deleteCategorySuccess,
	deleteCategoryFailure,
	fetchOneCategorySuccess,
	fetchOneCategoryFailure,
	fetchAllCategoriesStart,
	fetchAllCategoriesSuccess,
	fetchAllCategoriesFailure
} from "./actions"
import instance from "../../helpers/instance";

/* ADD CATEGORY */
const addCategoryAsync = async (category) => {
	return await instance.post("api/categories", category)
		.then(resp => ({ category: resp.data, message: "category added successfully" }))
		.catch(err => ({ errors: err.response.data.errors }));
}

function* addCategory({ payload }) {
	const { category } = payload;
	try {
		let resp = yield call(addCategoryAsync, category);
		if (resp.category) yield put(addCategorySuccess(resp.category, resp.message));
		if (resp.errors) yield put(addCategoryFailure(resp.errors));
	} catch (error) { }
}

export function* watchAddCategoryStart() {
	yield takeEvery(ADD_CATEGORY_START, addCategory);
}

/* UPDATE CATEGORY */
const updateCategoryAsync = async (category) => {
	return await instance.put("api/categories", category).then(resp => resp.data);
};

function* updateCategory({ payload }) {
	const { category } = payload;
	let resp = null;
	try {
		resp = yield call(updateCategoryAsync, category);
		if (resp) {
			yield put(updateCategorySuccess());
		}
		if (resp.errors) {
			yield put(updateCategoryFailure(resp.errors));
		}
	} catch(error) { }
}

export function* watchUpdateCategoryStart() {
	yield takeEvery(UPDATE_CATEGORY_START, updateCategory);
}

/* DELETE CATEGORY */
const deleteCategoryAsync = async (id) => {
	return await instance.delete(`api/categories/${id}`)
		.then(resp => ({ message:  "category deleted successfully" }))
		.catch(err => ({ errors: err.response.data.errors }));
}

function* deleteCategory({ payload }) {
	const { id } = payload;
	try {
		let resp = yield call(deleteCategoryAsync, id);
		if (resp) yield put(deleteCategorySuccess(id, resp.message));
		if (resp.errors) yield put(deleteCategoryFailure(resp.errors));
	} catch(err) { }
}

export function* watchDeleteCategoryStart() {
	yield takeEvery(DELETE_CATEGORY_START, deleteCategory);
}

/* FETCH ONE CATEGORY */
const fetchOneCategoryAsync = async (id) => {
	return await instance.get(`api/categories/${id}`)
		.then(resp => ({ category: resp.data }))
		.catch(err => ({ errors: err.response.data.errors}));
};

function* fetchOneCategory({ payload }) {
	const { id } = payload;
	try {
		let resp = yield call(fetchOneCategoryAsync, id);
		if (resp) yield put(fetchOneCategorySuccess(resp.category));
		if (resp.errors) yield put(fetchOneCategoryFailure(resp.errors));
	} catch(error) { }
}

export function* watchFetchOneCategoryStart() {
	yield takeEvery(FETCH_ONE_CATEGORY_START, fetchOneCategory);
}

/* FETCH ALL CATEGORIES */
const fetchAllCategoriesAsync = async () => {
	return await instance.get("api/categories")
		.then(resp => ({ categories: resp.data }))
		.catch(error => ({ errors: error.resp.data.errors }));
};

function* fetchAllCategories() {
	try {
		let resp = yield call(fetchAllCategoriesAsync);
		console.log(resp);
		if (resp) yield put(fetchAllCategoriesSuccess(resp.categories));
		if (resp.errors) yield put(fetchAllCategoriesFailure(resp.errors));
	} catch (error) {
		const { errors } = error.response.data;
		yield put(fetchAllCategoriesFailure(errors));
	}
}

export function* watchFetchAllCategoriesStart() {
	yield takeEvery(FETCH_ALL_CATEGORIES_START, fetchAllCategories);
}

export default function* rootSaga() {
	yield all([
		fork(watchAddCategoryStart),
		fork(watchUpdateCategoryStart),
		fork(watchDeleteCategoryStart),
		fork(watchFetchOneCategoryStart),
		fork(watchFetchAllCategoriesStart)
	]);
}