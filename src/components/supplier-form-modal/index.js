import React from "react";
import { connect } from "react-redux";
import { Formik, Form } from "formik";
import { FormikInput } from "../formik-controls";
import * as Yup from "yup";
import {
	toggleSupplierFormModal,
	addSupplierStart,
	updateSupplierStart,
	unloadSavedSupplier,
} from "../../redux/actions";
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from "reactstrap";
import "./style.css";

const SupplierFormModal = (props) => {
	const {
		isOpen,
		toggleSupplierFormModal,
		addSupplierStart,
		updateSupplierStart,
		className,
		supplier
	} = props;

	const initialValues = {
		id: "",
		name: "",
		address: "",
		phone: "",
		email: "",
		otherDetails: ""
	};

	const validationSchema = Yup.object({
		name: Yup.string().required("Required!").max(100),
		address: Yup.string().required("Required!").max(100),
		phone: Yup.string().required("Required!").max(100),
		email: Yup.string().email("Invalid email format").required("Required!"),
		otherDetails: Yup.string().max(255)
	});

	const onSubmit = values => {
		if (!values.id) addSupplierStart(values);
		else updateSupplierStart(values);
		toggleSupplierFormModal();
	};

	return (
		<Modal isOpen={isOpen} toggle={toggleSupplierFormModal} className={className} size="lg">
			<Formik initialValues={supplier || initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
				{formik => (
					<Form>
						<ModalHeader toggle={toggleSupplierFormModal}>Supplier Form</ModalHeader>
						<ModalBody>
							<FormikInput name="id" id="id" type="text" label="Supplier ID" disabled={true} />
							<FormikInput name="name" id="name" type="text" label="Name" />
							<FormikInput name="address" id="address" type="text" label="Address" />
							<FormikInput name="phone" id="phone" type="text" label="Phone" />
							<FormikInput name="email" id="email" type="email" label="Email" />
							<FormikInput name="otherDetails" id="otherDetails" type="textarea" label="Other Details" />
						</ModalBody>
						<ModalFooter>
							<Button color="primary" type="submit">Save</Button>
							<Button 
								color="secondary" 
								onClick={() => {
									toggleSupplierFormModal();
									unloadSavedSupplier();
								}}
							>
								Cancel
							</Button>
						</ModalFooter>
					</Form>
				)}
			</Formik>
		</Modal>
	);
};

const mapStateToProps = ({ supplier: supplierState }) => {
	const { isOpen, supplier } = supplierState;
	return { isOpen, supplier };
};

const mapActionsToProps = dispatch => ({
	toggleSupplierFormModal: () => dispatch(toggleSupplierFormModal()),
	addSupplierStart: (supplier) => dispatch(addSupplierStart(supplier)),
	updateSupplierStart: (supplier) => dispatch(updateSupplierStart(supplier)),
	unloadSavedSupplier: () => dispatch(unloadSavedSupplier()),
});

export default connect(
	mapStateToProps,
	mapActionsToProps
)(SupplierFormModal);