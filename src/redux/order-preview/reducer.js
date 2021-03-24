import {
	TOGGLE_ORDER_PREVIEW_MODAL
} from "../actions";

const initialState = {
	isOpen: false
};

export const orderPreviewModalReducer = (state = initialState, action) => {
	switch(action.type) {
		case TOGGLE_ORDER_PREVIEW_MODAL:
			return {
				...state,
				isOpen: !state.isOpen
			};

		default: return {...state};
	}
};

export default orderPreviewModalReducer;