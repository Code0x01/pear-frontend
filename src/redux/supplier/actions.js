import {
	ADD_SUPPLIER_START,
	ADD_SUPPLIER_SUCCESS,
	ADD_SUPPLIER_FAILURE,
	UPDATE_SUPPLIER_START,
	UPDATE_SUPPLIER_SUCCESS,
	UPDATE_SUPPLIER_FAILURE,
	DELETE_SUPPLIER_START,
	DELETE_SUPPLIER_SUCCESS,
	DELETE_SUPPLIER_FAILURE,
	FETCH_ONE_SUPPLIER_START,
	FETCH_ONE_SUPPLIER_SUCCESS,
	FETCH_ONE_SUPPLIER_FAILURE,
	FETCH_ALL_SUPPLIERS_START,
	FETCH_ALL_SUPPLIERS_SUCCESS,
	FETCH_ALL_SUPPLIERS_FAILURE,
	TOGGLE_SUPPLIER_FORM_MODAL,
	LOAD_SAVED_SUPPLIER,
	UNLOAD_SAVED_SUPPLIER,
} from "../actions";

export const addSupplierStart = (supplier) => ({
	type: ADD_SUPPLIER_START,
	payload: { supplier }
});

export const addSupplierSuccess = (supplier, message) => ({
	type: ADD_SUPPLIER_SUCCESS,
	payload: { supplier, message }
});

export const addSupplierFailure = (errors) => ({
	type: ADD_SUPPLIER_FAILURE,
	payload: { errors }
});

export const updateSupplierStart = (supplier) => ({
	type: UPDATE_SUPPLIER_START,
	payload: { supplier }
});

export const updateSupplierSuccess = (supplier, message) => ({
	type: UPDATE_SUPPLIER_SUCCESS,
	payload: { supplier, message }
});

export const updateSupplierFailure = (errors) => ({
	type: UPDATE_SUPPLIER_FAILURE,
	payload: { errors }
});

export const deleteSupplierStart = (id) => ({
	type: DELETE_SUPPLIER_START,
	payload: { id }
});

export const deleteSupplierSuccess = (id, message) => ({
	type: DELETE_SUPPLIER_SUCCESS,
	payload: { id, message }
});

export const deleteSupplierFailure = (errors) => ({
	type: DELETE_SUPPLIER_FAILURE,
	payload: { errors }
});

export const fetchOneSupplierStart = (id) => ({
	type: FETCH_ONE_SUPPLIER_START,
	payload: { id }
});

export const fetchOneSupplierSuccess = (supplier) => ({
	type: FETCH_ONE_SUPPLIER_SUCCESS,
	payload: { supplier }
});

export const fetchOneSupplierFailure = (errors) => ({
	type: FETCH_ONE_SUPPLIER_FAILURE,
	payload: { errors }
});

export const fetchAllSuppliersStart = () => ({
	type: FETCH_ALL_SUPPLIERS_START,
	payload: { }
});

export const fetchAllSuppliersSuccess = (suppliers) => ({
	type: FETCH_ALL_SUPPLIERS_SUCCESS,
	payload: { suppliers }
});

export const fetchAllSuppliersFailure = (errors) => ({
	type: FETCH_ALL_SUPPLIERS_FAILURE,
	payload: { errors }
});

export const toggleSupplierFormModal = () => ({
	type: TOGGLE_SUPPLIER_FORM_MODAL,
	payload: { }
});

export const loadSavedSupplier = (id) => ({
	type: LOAD_SAVED_SUPPLIER,
	payload: { id }
});

export const unloadSavedSupplier = () => ({
	type: UNLOAD_SAVED_SUPPLIER,
	payload: { }
});