import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
	ADD_STAFF_START,
	UPDATE_STAFF_START,
	DELETE_STAFF_START,
	FETCH_ONE_STAFF_START,
	FETCH_ALL_STAFF_START
} from "../actions";
import {
	addStaffSuccess,
	addStaffFailure,
	updateStaffSuccess,
	updateStaffFailure,
	deleteStaffSuccess,
	deleteStaffFailure,
	fetchOneStaffSuccess,
	fetchOneStaffFailure,
	fetchAllStaffSuccess,
	fetchAllStaffFailure
} from "./actions"
import instance from "../../helpers/instance";

/* ADD STAFF */
const addStaffAsync = async (staff) => {
	return await instance.post("api/satff").then(resp => resp.data);
};

function* addStaff({ payload }) {
	const { staff } = payload;
	let resp = null;
	try {
		resp = yield call(addStaffAsync, staff);
		if (resp) yield put(addStaffSuccess());
		if (resp.errors) yield put(addStaffFailure(resp.errors));
	} catch(error) { }
}

export function* watchAddStaffStart() {
	yield takeEvery(ADD_STAFF_START, addStaff);
}

/* UPDATE STAFF */
const updateStaffAsync = async (staff) => {
	return await instance.put("api/staff", staff).then(resp => resp.data);
};

function* updateStaff({ payload }) {
	const { staff } = payload;
	let resp = null;
	try {
		resp = yield call(updateStaffAsync, staff);
		if (resp) yield put(updateStaffSuccess());
		if (resp.errors) yield put(updateStaffFailure(resp.errors));
	} catch(error) { }
}

export function* watchUpdateStaffStart() {
	yield takeEvery(UPDATE_STAFF_START, updateStaff);
}

/* DELETE STAFF */
const deleteStaffAsync = async (id) => {
	return await instance.delete(`api/staff/${id}`).then(resp => resp.data);
};

function* deleteStaff({ payload }) {
	const { id } = payload;
	let resp = null;
	try {
		resp = yield call(deleteStaffAsync, id);
		if (resp) yield put(deleteStaffSuccess());
		if (resp.errors) yield put(deleteStaffFailure(resp.errors));
	} catch(error) { }
}

export function* watchDeleteStaffStart() {
	yield takeEvery(DELETE_STAFF_START, deleteStaff);
}

/* FETCH ONE STAFF */
const fetchOneStaffAsync = async (id) => {
	return await instance.get(`api/staff/${id}`).then(resp => resp.data);
};

function* fetchOneStaff({ payload }) {
	const { id } = payload;
	let resp = null;
	try {
		resp = yield call(fetchOneStaffAsync, id);
		if (resp) yield put(fetchOneStaffSuccess(resp));
		if (resp.errors) yield put(fetchOneStaffFailure(resp.errors));
	} catch(error) { }
}

export function* watchFetchOneStaffStart() {
	yield takeEvery(FETCH_ONE_STAFF_START, fetchOneStaff);
}

/* FETCH ALL STAFFS */
const fetchAllStaffAsync = async () => {
	return await instance.get("api/staff").then(resp => resp.data);
};

function* fetchAllStaff() {
	let resp = null;
	try {
		resp = yield call(fetchAllStaffAsync);
		if (resp) yield put(fetchAllStaffSuccess(resp));
		if (resp.errors) yield put(fetchAllStaffFailure(resp.errors));
	} catch(error) { }
}

export function* watchFetchAllStaffStart() {
	yield takeEvery(FETCH_ALL_STAFF_START, fetchAllStaff);
}

export default function* rootSaga() {
	yield all([
		fork(watchAddStaffStart),
		fork(watchUpdateStaffStart),
		fork(watchDeleteStaffStart),
		fork(watchFetchOneStaffStart),
		fork(watchFetchAllStaffStart)
	]);
}