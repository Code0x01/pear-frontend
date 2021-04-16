import {
	ADD_PRODUCT_SUCCESS,
	ADD_PRODUCT_FAILURE,
	UPDATE_PRODUCT_SUCCESS,
	UPDATE_PRODUCT_FAILURE,
	DELETE_PRODUCT_SUCCESS,
	DELETE_PRODUCT_FAILURE,
	FETCH_ONE_PRODUCT_SUCCESS,
	FETCH_ONE_PRODUCT_FAILURE,
	FETCH_ALL_PRODUCTS_SUCCESS,
	FETCH_ALL_PRODUCTS_FAILURE,
	TOGGLE_PRODUCT_FORM_MODAL,
	LOAD_SAVED_PRODUCT,
	UNLOAD_SAVED_PRODUCT,
} from "../actions";
import _ from "lodash";

const initialState = {
	product: null,
	products: null,
	errors: {},
	message: "",
	isOpen: false
};

export const productReducer = (state = initialState, action) => {

	switch(action.type) {

		case ADD_PRODUCT_SUCCESS:
			return {
				...state,
				products: [...state.products, action.payload.product],
				message: action.payload.message,
				errors: { }
			};

		case ADD_PRODUCT_FAILURE:
			return {
				...state,
				errors: action.payload.errors
			};

		case UPDATE_PRODUCT_SUCCESS:
			const idx = _.findIndex(state.products, product => product.id === action.payload.product.id);
			state.products[idx] = action.payload.product;
			return {
				...state,
				message: action.payload.message,
				errors: { }
			};

		case UPDATE_PRODUCT_FAILURE:
			return {
				...state,
				errors: action.payload.errors
			};

		case DELETE_PRODUCT_SUCCESS:
			return {
				...state,
				products: _.filter(state.product, product => product.id !== action.payload.id),
				errors: { }
			};

		case DELETE_PRODUCT_FAILURE:
			return {

			};

		case FETCH_ONE_PRODUCT_SUCCESS:
			return {
				...state,
				product: action.payload.product
			};

		case FETCH_ONE_PRODUCT_FAILURE:
			return {
				...state,
				errors: action.payload.errors
			};

		case FETCH_ALL_PRODUCTS_SUCCESS:
			return {
			 	...state,
			 	products: action.payload.products
			};

		case FETCH_ALL_PRODUCTS_FAILURE:
			return {
				...state,
				errors: action.payload.errors
			};

		case TOGGLE_PRODUCT_FORM_MODAL:
		 	return {
		 		...state,
		 		isOpen: !state.isOpen,
		 		product: null
		 	};

		case LOAD_SAVED_PRODUCT:
			return {
				...state,
				product: _.find(state.products, product => product.id === action.payload.id),
				isOpen: true
			};

		case UNLOAD_SAVED_PRODUCT:
			return {
				...state,
				product: null
			};

		default:
			return {
				...state
			};
	}
}

export default productReducer;