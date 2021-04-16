import {
	all,
	fork,
	put,
	takeEvery
} from "redux-saga/effects";
import {
	CLICK_TOPNAV_MENU_LINK
} from "../actions";
import {
	closeTopnavDropdownMenu
} from "./actions";

function* closeDropdownMenu() {
	yield put(closeTopnavDropdownMenu());
}

export function* watchClickTopnavDropdownMenu() {
	yield takeEvery(CLICK_TOPNAV_MENU_LINK, closeDropdownMenu);
}

export default function* rootSaga() {
	yield all([
		fork(watchClickTopnavDropdownMenu)
	]);
}