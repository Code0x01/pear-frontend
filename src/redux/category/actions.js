import {
	ADD_CATEGORY_START,
	ADD_CATEGORY_SUCCESS,
	ADD_CATEGORY_FAILURE,
	UPDATE_CATEGORY_START,
	UPDATE_CATEGORY_SUCCESS,
	UPDATE_CATEGORY_FAILURE,
	DELETE_CATEGORY_START,
	DELETE_CATEGORY_SUCCESS,
	DELETE_CATEGORY_FAILURE,
	FETCH_ONE_CATEGORY_START,
	FETCH_ONE_CATEGORY_SUCCESS,
	FETCH_ONE_CATEGORY_FAILURE,
	FETCH_ALL_CATEGORIES_START,
	FETCH_ALL_CATEGORIES_SUCCESS,
	FETCH_ALL_CATEGORIES_FAILURE,
	TOGGLE_CATEGORY_FORM_MODAL,
	LOAD_SAVED_CATEGORY,
	UNLOAD_SAVED_CATEGORY,
} from "../actions";

export const addCategoryStart = (category) => ({
	type: ADD_CATEGORY_START,
	payload: { category }
});

export const addCategorySuccess = (category, message) => ({
	type: ADD_CATEGORY_SUCCESS,
	payload: { category, message }
});

export const addCategoryFailure = (errors) => ({
	type: ADD_CATEGORY_FAILURE,
	payload: { errors }
});

export const updateCategoryStart = (category) => ({
	type: UPDATE_CATEGORY_START,
	payload: { category }
});

export const updateCategorySuccess = (category, message) => ({
	type: UPDATE_CATEGORY_SUCCESS,
	payload: { category, message }
});

export const updateCategoryFailure = (errors) => ({
	type: UPDATE_CATEGORY_FAILURE,
	payload: { errors }
});

export const deleteCategoryStart = (id) => ({
	type: DELETE_CATEGORY_START,
	payload: { id }
});

export const deleteCategorySuccess = (id, message) => ({
	type: DELETE_CATEGORY_SUCCESS,
	payload: { id, message }
});

export const deleteCategoryFailure = (errors) => ({
	type: DELETE_CATEGORY_FAILURE,
	payload: { errors }
});

export const fetchOneCategoryStart = (id) => ({
	type: FETCH_ONE_CATEGORY_START,
	payload: { id }
});

export const fetchOneCategorySuccess = (category) => ({
	type: FETCH_ONE_CATEGORY_SUCCESS,
	payload: { category }
});

export const fetchOneCategoryFailure = (errors) => ({
	type: FETCH_ONE_CATEGORY_FAILURE,
	payload: { errors }
});

export const fetchAllCategoriesStart = () => ({
	type: FETCH_ALL_CATEGORIES_START,
	payload: { }
});

export const fetchAllCategoriesSuccess = (categories) => ({
	type: FETCH_ALL_CATEGORIES_SUCCESS,
	payload: { categories }
});

export const fetchAllCategoriesFailure = (errors) => ({
	type: FETCH_ALL_CATEGORIES_FAILURE,
	payload: { errors }
});

export const toggleCategoryFormModal = () => ({
	type: TOGGLE_CATEGORY_FORM_MODAL,
	payload: { }
});

export const loadSavedCategory = (id) => ({
	type: LOAD_SAVED_CATEGORY,
	payload: { id }
});

export const unloadSavedCategory = () => ({
	type: UNLOAD_SAVED_CATEGORY,
	payload: { }
});

