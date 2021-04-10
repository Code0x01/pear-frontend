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
} from "../actions";

export const addSupplierStart = (supplier) => ({
	type: ADD_SUPPLIER_START,
	payload: { supplier }
});

export const addSupplierSuccess = () => ({
	type: ADD_SUPPLIER_SUCCESS,
	payload: { }
});

export const addSupplierFailure = (errors) => ({
	type: ADD_SUPPLIER_FAILURE,
	payload: { errors }
});

export const updateSupplierStart = (supplier) => ({
	type: UPDATE_SUPPLIER_START,
	payload: { supplier }
});

export const updateSupplierSuccess = () => ({
	type: UPDATE_SUPPLIER_SUCCESS,
	payload: { }
});

export const updateSupplierFailure = (errors) => ({
	type: UPDATE_SUPPLIER_FAILURE,
	payload: { errors }
});

export const deleteSupplierStart = (id) => ({
	type: DELETE_SUPPLIER_START,
	payload: { id }
});

export const deleteSupplierSuccess = () => ({
	type: DELETE_SUPPLIER_SUCCESS,
	payload: {}
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