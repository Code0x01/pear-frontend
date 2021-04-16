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
	TOGGLE_CUSTOMER_FORM_MODAL,
	LOAD_SAVED_CUSTOMER,
	UNLOAD_SAVED_CUSTOMER,
} from "../actions";
import _ from "lodash";

const initialState = {
	customer: null,
	customers: null,
	errors: {},
	message: "",
	isOpen: false
};

export const customerReducer = (state = initialState, action) => {

	switch(action.type) {

		case ADD_CUSTOMER_SUCCESS:
			return {
				...state,
				customers: [...state.customers, action.payload.customer],
				message: action.payload.message,
				errors: {}
			}

		case ADD_CUSTOMER_FAILURE:
			return {
				...state,
				errors: action.payload.errors
			}

		case UPDATE_CUSTOMER_SUCCESS:
			const idx = _.findIndex(state.customers, customer => customer.id === action.payload.customer.id);
			state.customers[idx] = action.payload.customer;
			return {
				...state,
				message: action.payload.message,
				errors: {}
			}

		case UPDATE_CUSTOMER_FAILURE:
			return {
				...state,
				errors: action.payload.errors
			}

		case DELETE_CUSTOMER_SUCCESS:
			return {
				...state,
				customers: _.filter(state.customers, customer => customer.id !== action.payload.id),
				message: action.payload.message,
				errors: { }
			}

		case DELETE_CUSTOMER_FAILURE:
			return {
				...state,
				errors: action.payload.errors
			}

		case FETCH_ONE_CUSTOMER_SUCCESS:
			return {
				...state,
				customer: action.payload.customer,
				errors: { }
			}

		case FETCH_ONE_CUSTOMER_FAILURE:
			return {
				...state,
				errors: action.payload.errors
			}

		case FETCH_ALL_CUSTOMERS_SUCCESS:
			return {
			 	...state,
			 	customers: action.payload.customers,
			 	errors: { }
			}

		case FETCH_ALL_CUSTOMERS_FAILURE:
			return {
				...state,
				errors: action.payload.errors,
			}

		case TOGGLE_CUSTOMER_FORM_MODAL:
			return {
				...state,
				isOpen: !state.isOpen,
				customer: null
			};

		case LOAD_SAVED_CUSTOMER:
			return {
				...state,
				customer: _.find(state.customers, customer => customer.id === action.payload.id),
				isOpen: true
			};

		case UNLOAD_SAVED_CUSTOMER:
			return {
				...state,
				customer: null
			};

		default:
			return {
				...state
			};
	}
}

export default customerReducer;