import React from "react";
import { connect } from "react-redux";
import { Formik, Form } from "formik";
import { FormikInput } from "../formik-controls";
import * as Yup from "yup";
import {
	toggleCustomerFormModal,
	addCustomerStart,
	updateCustomerStart,
	unloadSavedCustomer,
} from "../../redux/actions";
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from "reactstrap";
import "./style.css";

const CustomerFormModal = (props) => {
	const {
		isOpen,
		toggleCustomerFormModal,
		className,
		addCustomerStart,
		updateCustomerStart,
		customer
	} = props;

	const initialValues = {
		id: "",
		firstName: "",
		lastName: "",
		phone: "",
		email: "",
		address: ""
	};

	const validationSchema = Yup.object({
		firstName: Yup.string().required("Required!").max(50),
		lastName: Yup.string().required("Required!").max(50),
		phone: Yup.string().required("Required!").max(50),
		email: Yup.string().email("Invalid email format").required("Required!"),
		address: Yup.string().required("Required!").max(50),
	});

	const onSubmit = values => {
		if (!values.id) addCustomerStart(values);
		else updateCustomerStart(values);
		toggleCustomerFormModal();
	};

	return (
		<Modal isOpen={isOpen} toggle={toggleCustomerFormModal} className={className} size="lg">
			<Formik
				initialValues={customer || initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				{formik => (
					<React.Fragment>
						<Form>
							<ModalHeader toggle={toggleCustomerFormModal}>Customer Form</ModalHeader>
							<ModalBody>
								<FormikInput
									name="id"
									id="id"
									type="text"
									label="Customer ID"
									disabled={true}
								/>
								<FormikInput
									name="firstName"
									id="firstName"
									type="text"
									label="First Name"
								/>
								<FormikInput
									name="lastName"
									id="lastName"
									type="text"
									label="Last Name"
								/>
								<FormikInput
									name="phone"
									id="phone"
									type="text"
									label="Phone Number"
								/>
								<FormikInput
									name="email"
									id="email"
									type="email"
									label="Email"
								/>
								<FormikInput
									name="address"
									id="address"
									type="text"
									label="Address"
								/>
							</ModalBody>
							<ModalFooter>
								<Button
									color="primary"
									type="sumbit"
								>
									Save
								</Button>
								<Button
									color="secondary"
									onClick={() => {
										toggleCustomerFormModal();
										unloadSavedCustomer();
									}}
								>
									Cancel
								</Button>
							</ModalFooter>
						</Form>
					</React.Fragment>
				)}
			</Formik>
		</Modal>
	);
};

const mapStateToProps = ({ customer: customerState }) => {
	const { isOpen, customer } = customerState;
	return { isOpen, customer };
};

const mapActionsToProps = dispatch => ({
	toggleCustomerFormModal: () => dispatch(toggleCustomerFormModal()),
	addCustomerStart: (customer) => dispatch(addCustomerStart(customer)),
	updateCustomerStart: (customer) => dispatch(updateCustomerStart(customer)),
	unloadSavedCustomer: () => dispatch(unloadSavedCustomer()),
});

export default connect(
	mapStateToProps,
	mapActionsToProps
)(CustomerFormModal);