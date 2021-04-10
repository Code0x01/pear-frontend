import {
	ADD_CUSTOMER_SUCCESS,
	ADD_CUSTOMER_FAILURE,
	UPDATE_CUSTOMER_SUCCESS,
	UPDATE_CUSTOMER_FAILURE,
	DELETE_CUSTOMER_SUCCESS,
	DELETE_CUSTOMER_FAILURE,
	FETCH_ONE_CUSTOMER_SUCCESS,
	FETCH_ONE_CUSTOMER_FAILURE,
	FETCH_ALL_CUSTOMERS_SUCCESS,
	FETCH_ALL_CUSTOMERS_FAILURE,
} from "../actions";

const initialState = {
	customer: null,
	customers: null,
	errors: {},
	message: ""
};

export const customerReducer = (state = initialState, action) => {

	switch(action.type) {

		case ADD_CUSTOMER_SUCCESS:
			return {
				...state,
				message: "Customer added successfully"
			}

		case ADD_CUSTOMER_FAILURE:
			return {
				...state,
				errors: action.payload.errors
			}

		case UPDATE_CUSTOMER_SUCCESS:
			return {
				...state,
				message: "Customer updated successfully"
			}

		case UPDATE_CUSTOMER_FAILURE:
			return {
				...state,
				errors: action.payload.errors
			}

		case DELETE_CUSTOMER_SUCCESS:
			return {
				...state,
				message: "Customer deleted successfully"
			}

		case DELETE_CUSTOMER_FAILURE:
			return {
				...state,
				errors: action.payload.errors
			}

		case FETCH_ONE_CUSTOMER_SUCCESS:
			return {
				...state,
				customer: action.payload.customer
			}

		case FETCH_ONE_CUSTOMER_FAILURE:
			return {
				...state,
				errors: action.payload.errors
			}

		case FETCH_ALL_CUSTOMERS_SUCCESS:
			return {
			 	...state,
			 	customers: action.payload.customers
			}

		case FETCH_ALL_CUSTOMERS_FAILURE:
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

export default customerReducer;