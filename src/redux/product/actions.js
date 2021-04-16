import {
	ADD_PRODUCT_START,
	ADD_PRODUCT_SUCCESS,
	ADD_PRODUCT_FAILURE,
	UPDATE_PRODUCT_START,
	UPDATE_PRODUCT_SUCCESS,
	UPDATE_PRODUCT_FAILURE,
	DELETE_PRODUCT_START,
	DELETE_PRODUCT_SUCCESS,
	DELETE_PRODUCT_FAILURE,
	FETCH_ONE_PRODUCT_START,
	FETCH_ONE_PRODUCT_SUCCESS,
	FETCH_ONE_PRODUCT_FAILURE,
	FETCH_ALL_PRODUCTS_START,
	FETCH_ALL_PRODUCTS_SUCCESS,
	FETCH_ALL_PRODUCTS_FAILURE,
	TOGGLE_PRODUCT_FORM_MODAL,
	LOAD_SAVED_PRODUCT,
	UNLOAD_SAVED_PRODUCT,
} from "../actions";

export const addProductStart = (product) => ({
	type: ADD_PRODUCT_START,
	payload: { product }
});

export const addProductSuccess = (product, message) => ({
	type: ADD_PRODUCT_SUCCESS,
	payload: { product, message }
});

export const addProductFailure = (errors) => ({
	type: ADD_PRODUCT_FAILURE,
	payload: { errors }
});

export const updateProductStart = (product) => ({
	type: UPDATE_PRODUCT_START,
	payload: { product }
});

export const updateProductSuccess = (product, message) => ({
	type: UPDATE_PRODUCT_SUCCESS,
	payload: { product, message }
});

export const updateProductFailure = (errors) => ({
	type: UPDATE_PRODUCT_FAILURE,
	payload: { errors }
});

export const deleteProductStart = (id) => ({
	type: DELETE_PRODUCT_START,
	payload: { id }
});

export const deleteProductSuccess = (id, message) => ({
	type: DELETE_PRODUCT_SUCCESS,
	payload: { id, message }
});

export const deleteProductFailure = (errors) => ({
	type: DELETE_PRODUCT_FAILURE,
	payload: { errors }
});

export const fetchOneProductStart = (id) => ({
	type: FETCH_ONE_PRODUCT_START,
	payload: { id }
});

export const fetchOneProductSuccess = (product) => ({
	type: FETCH_ONE_PRODUCT_SUCCESS,
	payload: { product }
});

export const fetchOneProductFailure = (errors) => ({
	type: FETCH_ONE_PRODUCT_FAILURE,
	payload: { errors }
});

export const fetchAllProductsStart = () => ({
	type: FETCH_ALL_PRODUCTS_START,
	payload: { }
});

export const fetchAllProductsSuccess = (products) => ({
	type: FETCH_ALL_PRODUCTS_SUCCESS,
	payload: { products }
});

export const fetchAllProductsFailure = (errors) => ({
	type: FETCH_ALL_PRODUCTS_FAILURE,
	payload: { errors }
});

export const toggleProductFormModal = () => ({
	type: TOGGLE_PRODUCT_FORM_MODAL,
	payload: { }
});

export const loadSavedProduct = (id) => ({
	type: LOAD_SAVED_PRODUCT,
	payload: { id }
});

export const unloadSavedProduct = () => ({
	type: UNLOAD_SAVED_PRODUCT,
	payload: { }
});