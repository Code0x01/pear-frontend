import {
	all,
	call,
	fork,
	put,
	takeEvery
} from "redux-saga/effects";
import {
	TOGGLE_TOPNAV_DROPDOWN_MENU,
	CLOSE_TOPNAV_DROPDOWN_MENU,
	CLICK_TOPNAV_MENU_LINK
} from "../actions";
import {
	closeTopnavDropdownMenu
} from "./actions";

function* closeDropdownMenu() {
	yield put(closeTopnavDropdownMenu());
}

export function* watchClickTopnavDropdownMenu() {
	console.log("hello");
	yield takeEvery(CLICK_TOPNAV_MENU_LINK, closeDropdownMenu);
}

export default function* rootSaga() {
	yield all([
		fork(watchClickTopnavDropdownMenu)
	]);
}