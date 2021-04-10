import {
	ADD_STAFF_START,
	ADD_STAFF_SUCCESS,
	ADD_STAFF_FAILURE,
	UPDATE_STAFF_START,
	UPDATE_STAFF_SUCCESS,
	UPDATE_STAFF_FAILURE,
	DELETE_STAFF_START,
	DELETE_STAFF_SUCCESS,
	DELETE_STAFF_FAILURE,
	FETCH_ONE_STAFF_START,
	FETCH_ONE_STAFF_SUCCESS,
	FETCH_ONE_STAFF_FAILURE,
	FETCH_ALL_STAFF_START,
	FETCH_ALL_STAFF_SUCCESS,
	FETCH_ALL_STAFF_FAILURE,
} from "../actions";

export const addStaffStart = (staff) => ({
	type: ADD_STAFF_START,
	payload: { staff }
});

export const addStaffSuccess = () => ({
	type: ADD_STAFF_SUCCESS,
	payload: { }
});

export const addStaffFailure = (errors) => ({
	type: ADD_STAFF_FAILURE,
	payload: { errors }
});

export const updateStaffStart = (staff) => ({
	type: UPDATE_STAFF_START,
	payload: { staff }
});

export const updateStaffSuccess = () => ({
	type: UPDATE_STAFF_SUCCESS,
	payload: { }
});

export const updateStaffFailure = (errors) => ({
	type: UPDATE_STAFF_FAILURE,
	payload: { errors }
});

export const deleteStaffStart = (id) => ({
	type: DELETE_STAFF_START,
	payload: { id }
});

export const deleteStaffSuccess = () => ({
	type: DELETE_STAFF_SUCCESS,
	payload: {}
});

export const deleteStaffFailure = (errors) => ({
	type: DELETE_STAFF_FAILURE,
	payload: { errors }
});

export const fetchOneStaffStart = (id) => ({
	type: FETCH_ONE_STAFF_START,
	payload: { id }
});

export const fetchOneStaffSuccess = (staff) => ({
	type: FETCH_ONE_STAFF_SUCCESS,
	payload: { staff }
});

export const fetchOneStaffFailure = (errors) => ({
	type: FETCH_ONE_STAFF_FAILURE,
	payload: { errors }
});

export const fetchAllStaffStart = () => ({
	type: FETCH_ALL_STAFF_START,
	payload: { }
});

export const fetchAllStaffSuccess = (allStaff) => ({
	type: FETCH_ALL_STAFF_SUCCESS,
	payload: { allStaff }
});

export const fetchAllStaffFailure = (errors) => ({
	type: FETCH_ALL_STAFF_FAILURE,
	payload: { errors }
});