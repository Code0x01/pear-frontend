import {
	ADD_ORDER_START,
	ADD_ORDER_SUCCESS,
	ADD_ORDER_FAILURE,
	DELETE_ORDER_START,
	DELETE_ORDER_SUCCESS,
	DELETE_ORDER_FAILURE,
	FETCH_ONE_ORDER_START,
	FETCH_ONE_ORDER_SUCCESS,
	FETCH_ONE_ORDER_FAILURE,
	FETCH_ALL_ORDERS_START,
	FETCH_ALL_ORDERS_SUCCESS,
	FETCH_ALL_ORDERS_FAILURE,
} from "../actions";

export const addOrderStart = (order, history) => ({
	type: ADD_ORDER_START,
	payload: { order, history }
});

export const addOrderSuccess = (message) => ({
	type: ADD_ORDER_SUCCESS,
	payload: { message }
});

export const addOrderFailure = (errors) => ({
	type: ADD_ORDER_FAILURE,
	payload: { errors }
});

export const deleteOrderStart = (id) => ({
	type: DELETE_ORDER_START,
	payload: { id }
});

export const deleteOrderSuccess = (message) => ({
	type: DELETE_ORDER_SUCCESS,
	payload: { message }
});

export const deleteOrderFailure = (errors) => ({
	type: DELETE_ORDER_FAILURE,
	payload: { errors }
});

export const fetchOneOrderStart = (id) => ({
	type: FETCH_ONE_ORDER_START,
	payload: { id }
});

export const fetchOneOrderSuccess = (order) => ({
	type: FETCH_ONE_ORDER_SUCCESS,
	payload: { order }
});

export const fetchOneOrderFailure = (errors) => ({
	type: FETCH_ONE_ORDER_FAILURE,
	payload: { errors }
});

export const fetchAllOrdersStart = () => ({
	type: FETCH_ALL_ORDERS_START,
	payload: { }
});

export const fetchAllOrdersSuccess = (orders) => ({
	type: FETCH_ALL_ORDERS_SUCCESS,
	payload: { orders }
});

export const fetchAllOrdersFailure = (errors) => ({
	type: FETCH_ALL_ORDERS_FAILURE,
	payload: { errors }
});