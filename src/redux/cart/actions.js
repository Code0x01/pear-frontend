import {
	ADD_ITEM,
	REMOVE_ITEM,
	CHECKOUT,
	INCREMENT_QUANTITY,
	DECREMENT_QUANTITY,
	CHANGE_QUANTITY,
	CALCULATE_TOTAL,
	INIT_CART,
} from "../actions";

export const addItem = (item) => ({
	type: ADD_ITEM,
	payload: { item }
});

export const removeItem = (id) => ({
	type: REMOVE_ITEM,
	payload: { id }
});

export const checkout = () => ({
	type: CHECKOUT,
	payload: { }
});

export const incrementQuantity = (id) => ({
	type: INCREMENT_QUANTITY,
	payload: { id }
});

export const decrementQuantity = (id) => ({
	type: DECREMENT_QUANTITY,
	payload: { id }
});

export const changeQuantity = (id, quantity) => ({
	type: CHANGE_QUANTITY,
	payload: { id, quantity }
});

export const calculateTotal = () => ({
	type: CALCULATE_TOTAL,
	payload: { }
});

export const initCart = () => ({
	type: INIT_CART,
	payload: { }
});

