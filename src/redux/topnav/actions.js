import {
	TOGGLE_TOPNAV_DROPDOWN_MENU,
	CLOSE_TOPNAV_DROPDOWN_MENU,
	CLICK_TOPNAV_MENU_LINK
} from "../actions";

export const toggleTopnavDropdownMenu = () => ({
	type: TOGGLE_TOPNAV_DROPDOWN_MENU,
	payload: { }
});

export const closeTopnavDropdownMenu = () => ({
	type: CLOSE_TOPNAV_DROPDOWN_MENU,
	payload: { }
});

export const clickTopnavMenuLink = (itemName) => ({
	type: CLICK_TOPNAV_MENU_LINK,
	payload: { itemName }
});