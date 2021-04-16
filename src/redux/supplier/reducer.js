import {
	ADD_SUPPLIER_SUCCESS,
	ADD_SUPPLIER_FAILURE,
	UPDATE_SUPPLIER_SUCCESS,
	UPDATE_SUPPLIER_FAILURE,
	DELETE_SUPPLIER_SUCCESS,
	DELETE_SUPPLIER_FAILURE,
	FETCH_ONE_SUPPLIER_SUCCESS,
	FETCH_ONE_SUPPLIER_FAILURE,
	FETCH_ALL_SUPPLIERS_SUCCESS,
	FETCH_ALL_SUPPLIERS_FAILURE,
	TOGGLE_SUPPLIER_FORM_MODAL,
	LOAD_SAVED_SUPPLIER,
	UNLOAD_SAVED_SUPPLIER,
} from "../actions";
import _ from "lodash";

const initialState = {
	supplier: null,
	suppliers: null,
	errors: {},
	message: "",
	isOpen: false
};

export const supplierReducer = (state = initialState, action) => {

	switch(action.type) {

		case ADD_SUPPLIER_SUCCESS:
			return {
				...state,
				suppliers: [...state.suppliers, action.payload.supplier],
				message: action.payload.message,
				errors: { }
			};

		case ADD_SUPPLIER_FAILURE:
			return {
				...state,
				errors: action.payload.errors
			};

		case UPDATE_SUPPLIER_SUCCESS:
			const idx = _.findIndex(state.suppliers, supplier => supplier.id === action.payload.supplier.id);
			state.suppliers[idx] = action.payload.supplier;
			return {
				...state,
				message: action.payload.message,
				errors: { }
			};

		case UPDATE_SUPPLIER_FAILURE:
			return {
				...state,
				errors: action.payload.errors
			};

		case DELETE_SUPPLIER_SUCCESS:
			return {
				...state,
				suppliers: _.filter(state.suppliers, supplier => supplier.id !== action.payload.id),
				message: action.payload.message,
				errors: { }
			};

		case DELETE_SUPPLIER_FAILURE:
			return {
				...state,
				errors: action.payload.errors
			};

		case FETCH_ONE_SUPPLIER_SUCCESS:
			return {
				...state,
				supplier: action.payload.supplier,
				errors: { }
			};

		case FETCH_ONE_SUPPLIER_FAILURE:
			return {
				...state,
				errors: action.payload.errors
			};

		case FETCH_ALL_SUPPLIERS_SUCCESS:
			return {
			 	...state,
			 	suppliers: action.payload.suppliers,
			 	errors: { }
			};

		case FETCH_ALL_SUPPLIERS_FAILURE:
			return {
				...state,
				errors: action.payload.errors
			};

		case TOGGLE_SUPPLIER_FORM_MODAL:
			return {
				...state,
				isOpen: !state.isOpen,
				supplier: null
			};

		case LOAD_SAVED_SUPPLIER:
			return {
				...state,
				supplier: _.find(state.suppliers, supplier => supplier.id === action.payload.id),
				isOpen: true,
			};

		case UNLOAD_SAVED_SUPPLIER:
			return {
				...state,
				supplier: null
			};

		default:
			return {
				...state
			};
	}
}

export default supplierReducer;