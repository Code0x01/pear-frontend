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
} from "../actions";

const initialState = {
	product: null,
	products: null,
	errors: {},
	message: ""
};

export const productReducer = (state = initialState, action) => {

	switch(action.type) {

		case ADD_PRODUCT_SUCCESS:
			return {
				...state,
				message: "Product added successfully"
			}

		case ADD_PRODUCT_FAILURE:
			return {
				...state,
				errors: action.payload.errors
			}

		case UPDATE_PRODUCT_SUCCESS:
			return {
				...state,
				message: "Product updated successfully"
			}

		case UPDATE_PRODUCT_FAILURE:
			return {
				...state,
				errors: action.payload.errors
			}

		case FETCH_ONE_PRODUCT_SUCCESS:
			return {
				...state,
				product: action.payload.product
			}

		case FETCH_ONE_PRODUCT_FAILURE:
			return {
				...state,
				errors: action.payload.errors
			}

		case FETCH_ALL_PRODUCTS_SUCCESS:
			return {
			 	...state,
			 	products: action.payload.products
			}

		case FETCH_ALL_PRODUCTS_FAILURE:
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

export default productReducer;