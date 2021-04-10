import {
	ADD_CATEGORY_SUCCESS,
	ADD_CATEGORY_FAILURE,
	UPDATE_CATEGORY_SUCCESS,
	UPDATE_CATEGORY_FAILURE,
	DELETE_CATEGORY_SUCCESS,
	DELETE_CATEGORY_FAILURE,
	FETCH_ONE_CATEGORY_SUCCESS,
	FETCH_ONE_CATEGORY_FAILURE,
	FETCH_ALL_CATEGORIES_SUCCESS,
	FETCH_ALL_CATEGORIES_FAILURE,
} from "../actions";
import _ from "lodash";

const initialState = {
	category: null,
	categories: null,
	errors: {},
	message: ""
};

export const categoryReducer = (state = initialState, action) => {

	switch(action.type) {

		case ADD_CATEGORY_SUCCESS:
			return {
				...state,
				categories: [...state.categories, action.payload.category],
				message: action.payload.message,
				errors: {}
			}

		case ADD_CATEGORY_FAILURE:
			return {
				...state,
				errors: action.payload.errors
			}

		case UPDATE_CATEGORY_SUCCESS:
			return {
				...state,
				message: "Category updated successfully"
			}

		case UPDATE_CATEGORY_FAILURE:
			return {
				...state,
				errors: action.payload.errors
			}

		case DELETE_CATEGORY_SUCCESS:
			return {
				...state,
				categories: _.filter(state.categories, category => category.id != action.payload.id),
				message: action.payload.message,
				errors: {}
			};

		case DELETE_CATEGORY_FAILURE:
			return {
				...state,
				errors: action.payload.errors
			};

		case FETCH_ONE_CATEGORY_SUCCESS:
			return {
				...state,
				category: action.payload.category,
				errors: {}
			}

		case FETCH_ONE_CATEGORY_FAILURE:
			return {
				...state,
				errors: action.payload.errors
			}

		case FETCH_ALL_CATEGORIES_SUCCESS:
			return {
			 	...state,
			 	categories: action.payload.categories,
			 	errors: {}
			}

		case FETCH_ALL_CATEGORIES_FAILURE:
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

export default categoryReducer;