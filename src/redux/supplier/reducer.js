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
} from "../actions";

const initialState = {
	supplier: null,
	suppliers: null,
	errors: {},
	message: ""
};

export const supplierReducer = (state = initialState, action) => {

	switch(action.type) {

		case ADD_SUPPLIER_SUCCESS:
			return {
				...state,
				message: "Supplier added successfully"
			}

		case ADD_SUPPLIER_FAILURE:
			return {
				...state,
				errors: action.payload.errors
			}

		case UPDATE_SUPPLIER_SUCCESS:
			return {
				...state,
				message: "Supplier updated successfully"
			}

		case UPDATE_SUPPLIER_FAILURE:
			return {
				...state,
				errors: action.payload.errors
			}

		case FETCH_ONE_SUPPLIER_SUCCESS:
			return {
				...state,
				supplier: action.payload.supplier
			}

		case FETCH_ONE_SUPPLIER_FAILURE:
			return {
				...state,
				errors: action.payload.errors
			}

		case FETCH_ALL_SUPPLIERS_SUCCESS:
			return {
			 	...state,
			 	suppliers: action.payload.suppliers
			}

		case FETCH_ALL_SUPPLIERS_FAILURE:
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

export default supplierReducer;