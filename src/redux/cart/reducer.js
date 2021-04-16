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
import _ from "lodash";
const initialState = {
	items: [],
	total: 0
};

export const cartReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_ITEM:
			return {
				...state,
				items: [...state.items, action.payload.item]
			};
		case REMOVE_ITEM:
			return {
				...state,
				items: _.filter(state.items, item => item.id !== action.payload.id)
			};
		case CHECKOUT:
			return {
				...state
			};
		case INCREMENT_QUANTITY:
			state.items[_.findIndex(state.items, item => item.id === action.payload.id)].quantity += 1;
			return {
				...state
			};
		case DECREMENT_QUANTITY:
			state.items[_.findIndex(state.items, item => item.id === action.payload.id)].quantity -= 1;
			return {
				...state
			};
		case CHANGE_QUANTITY:
			let item = state.items[_.findIndex(state.items, item => item.id === action.payload.id)];
			item.quantity = action.payload.quantity;
			item.total = _.floor(item.unitPrice * action.payload.quantity, 2);
			return {
				...state
			};
		case CALCULATE_TOTAL:
			return {
				...state,
				total: _.floor(_.sumBy(state.items, item => item.total), 2)
			}
		case INIT_CART:
			return {
				...state,
				items: [],
				total: 0
			}
		default: 
			return {
				...state
			};
	}
};

export default cartReducer;