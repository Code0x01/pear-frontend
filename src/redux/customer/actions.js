import {
	ADD_CUSTOMER_START,
	ADD_CUSTOMER_SUCCESS,
	ADD_CUSTOMER_FAILURE,
	UPDATE_CUSTOMER_START,
	UPDATE_CUSTOMER_SUCCESS,
	UPDATE_CUSTOMER_FAILURE,
	DELETE_CUSTOMER_START,
	DELETE_CUSTOMER_SUCCESS,
	DELETE_CUSTOMER_FAILURE,
	FETCH_ONE_CUSTOMER_START,
	FETCH_ONE_CUSTOMER_SUCCESS,
	FETCH_ONE_CUSTOMER_FAILURE,
	FETCH_ALL_CUSTOMERS_START,
	FETCH_ALL_CUSTOMERS_SUCCESS,
	FETCH_ALL_CUSTOMERS_FAILURE,
	TOGGLE_CUSTOMER_FORM_MODAL,
	LOAD_SAVED_CUSTOMER,
	UNLOAD_SAVED_CUSTOMER,
} from "../actions";

export const addCustomerStart = (customer) => ({
	type: ADD_CUSTOMER_START,
	payload: { customer }
});

export const addCustomerSuccess = (customer, message) => ({
	type: ADD_CUSTOMER_SUCCESS,
	payload: { customer, message }
});

export const addCustomerFailure = (errors) => ({
	type: ADD_CUSTOMER_FAILURE,
	payload: { errors }
});

export const updateCustomerStart = (customer) => ({
	type: UPDATE_CUSTOMER_START,
	payload: { customer }
});

export const updateCustomerSuccess = (customer, message) => ({
	type: UPDATE_CUSTOMER_SUCCESS,
	payload: { customer, message }
});

export const updateCustomerFailure = (errors) => ({
	type: UPDATE_CUSTOMER_FAILURE,
	payload: { errors }
});

export const deleteCustomerStart = (id) => ({
	type: DELETE_CUSTOMER_START,
	payload: { id }
});

export const deleteCustomerSuccess = (id, message) => ({
	type: DELETE_CUSTOMER_SUCCESS,
	payload: { id, message }
});

export const deleteCustomerFailure = (errors) => ({
	type: DELETE_CUSTOMER_FAILURE,
	payload: { errors }
});

export const fetchOneCustomerStart = (id) => ({
	type: FETCH_ONE_CUSTOMER_START,
	payload: { id }
});

export const fetchOneCustomerSuccess = (customer) => ({
	type: FETCH_ONE_CUSTOMER_SUCCESS,
	payload: { customer }
});

export const fetchOneCustomerFailure = (errors) => ({
	type: FETCH_ONE_CUSTOMER_FAILURE,
	payload: { errors }
});

export const fetchAllCustomersStart = () => ({
	type: FETCH_ALL_CUSTOMERS_START,
	payload: { }
});

export const fetchAllCustomersSuccess = (customers) => ({
	type: FETCH_ALL_CUSTOMERS_SUCCESS,
	payload: { customers }
});

export const fetchAllCustomersFailure = (errors) => ({
	type: FETCH_ALL_CUSTOMERS_FAILURE,
	payload: { errors }
});

export const toggleCustomerFormModal = () => ({
	type: TOGGLE_CUSTOMER_FORM_MODAL,
	payload: { }
});

export const loadSavedCustomer = (id) => ({
	type: LOAD_SAVED_CUSTOMER,
	payload: { id }
});

export const unloadSavedCustomer = () => ({
	type: UNLOAD_SAVED_CUSTOMER,
	payload: { }
});