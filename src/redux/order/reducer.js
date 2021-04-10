import {
	ADD_ORDER_SUCCESS,
	ADD_ORDER_FAILURE,
	UPDATE_ORDER_SUCCESS,
	UPDATE_ORDER_FAILURE,
	DELETE_ORDER_SUCCESS,
	DELETE_ORDER_FAILURE,
	FETCH_ONE_ORDER_SUCCESS,
	FETCH_ONE_ORDER_FAILURE,
	FETCH_ALL_ORDERS_SUCCESS,
	FETCH_ALL_ORDERS_FAILURE,
} from "../actions";

const initialState = {
	order: null,
	orders: null,
	errors: {},
	message: ""
};

export const orderReducer = (state = initialState, action) => {

	switch(action.type) {

		case ADD_ORDER_SUCCESS:
			return {
				...state,
				message: "Order added successfully"
			}

		case ADD_ORDER_FAILURE:
			return {
				...state,
				errors: action.payload.errors
			}

		case UPDATE_ORDER_SUCCESS:
			return {
				...state,
				message: "Order updated successfully"
			}

		case UPDATE_ORDER_FAILURE:
			return {
				...state,
				errors: action.payload.errors
			}

		case FETCH_ONE_ORDER_SUCCESS:
			return {
				...state,
				order: action.payload.order
			}

		case FETCH_ONE_ORDER_FAILURE:
			return {
				...state,
				errors: action.payload.errors
			}

		case FETCH_ALL_ORDERS_SUCCESS:
			return {
			 	...state,
			 	orders: action.payload.orders
			}

		case FETCH_ALL_ORDERS_FAILURE:
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

export default orderReducer;