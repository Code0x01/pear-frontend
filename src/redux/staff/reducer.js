import {
	ADD_STAFF_SUCCESS,
	ADD_STAFF_FAILURE,
	UPDATE_STAFF_SUCCESS,
	UPDATE_STAFF_FAILURE,
	DELETE_STAFF_SUCCESS,
	DELETE_STAFF_FAILURE,
	FETCH_ONE_STAFF_SUCCESS,
	FETCH_ONE_STAFF_FAILURE,
	FETCH_ALL_STAFF_SUCCESS,
	FETCH_ALL_STAFF_FAILURE,
} from "../actions";

const initialState = {
	staff: null,
	allStaff: null,
	errors: {},
	message: ""
};

export const staffReducer = (state = initialState, action) => {

	switch(action.type) {

		case ADD_STAFF_SUCCESS:
			return {
				...state,
				message: "Staff added successfully"
			}

		case ADD_STAFF_FAILURE:
			return {
				...state,
				errors: action.payload.errors
			}

		case UPDATE_STAFF_SUCCESS:
			return {
				...state,
				message: "Staff updated successfully"
			}

		case UPDATE_STAFF_FAILURE:
			return {
				...state,
				errors: action.payload.errors
			}

		case FETCH_ONE_STAFF_SUCCESS:
			return {
				...state,
				staff: action.payload.staff
			}

		case FETCH_ONE_STAFF_FAILURE:
			return {
				...state,
				errors: action.payload.errors
			}

		case FETCH_ALL_STAFF_SUCCESS:
			return {
			 	...state,
			 	allStaff: action.payload.errors
			}

		case FETCH_ALL_STAFF_FAILURE:
			return {
				...state,
				errors: action.payload.errors
			}

		default:
			return {
				...state
			}

	}

}

export default staffReducer;