import {
	TOGGLE_TOPNAV_DROPDOWN_MENU,
	CLOSE_TOPNAV_DROPDOWN_MENU,
	CLICK_TOPNAV_MENU_LINK
} from "../actions";

const initialState = {
	isOpen: false,
	activeItem: "home"
}

export const topnavReducer = (state = initialState, action) => {
	switch(action.type) {

		case TOGGLE_TOPNAV_DROPDOWN_MENU:
			return {
				...state,
				isOpen: !state.isOpen
			};

		case CLOSE_TOPNAV_DROPDOWN_MENU:
			return {
				...state,
				isOpen: false
			}

		case CLICK_TOPNAV_MENU_LINK:
			return {
				...state,
				activeItem: action.payload.itemName
			}

		default: return {...state};
	}
};

export default topnavReducer;