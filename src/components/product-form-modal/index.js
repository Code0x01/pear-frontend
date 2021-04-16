import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Formik, Form } from "formik";
import { FormikInput, FormikSelect, FormikRadioButtons } from "../formik-controls";
import * as Yup from "yup";
import {
	toggleProductFormModal,
	addProductStart,
	updateProductStart,
	unloadSavedProduct,
	fetchAllSuppliersStart,
	fetchAllCategoriesStart,
} from "../../redux/actions";
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from "reactstrap";
import "./style.css";

const ProductFormModal = (props) => {
	const {
		isOpen,
		toggleProductFormModal,
		addProductStart,
		updateProductStart,
		fetchAllCategoriesStart,
		fetchAllSuppliersStart,
		className,
		product,
		categories,
		suppliers,
	} = props;

	const initialValues = {
		id: "",
		name: "",
		description: "",
		unit: "",
		quantity: "",
		price: "",
		status: "",
		supplierId: "",
		categoryId: "",
		otherDetails: ""
	};

	const validationSchema = Yup.object({
		name: Yup.string().required("Required!").max(50),
		description: Yup.string().required("Required!").max(255),
		unit: Yup.string().required("Required!").max(20),
		quantity: Yup.number().positive().integer().required("Required!"),
		price: Yup.number().positive().required("Required!"),
		status: Yup.string().required("Required!"),
		supplierId: Yup.number().required("Required!"),
		categoryId: Yup.number().required("Required!"),
		otherDetails: Yup.string().max(255)
	});

	const onSubmit = values => {
		if (!values.id) addProductStart(values);
		else updateProductStart(values);
		toggleProductFormModal();
	};

	useEffect(() => {
		fetchAllCategoriesStart();
		fetchAllSuppliersStart();
	}, [fetchAllCategoriesStart, fetchAllSuppliersStart]);

	return (
		<Modal isOpen={isOpen} toggle={toggleProductFormModal} className={className} size="lg" >
			<Formik initialValues={product || initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
				{formik => (
					<Form>
						<ModalHeader toggle={toggleProductFormModal}>Product Form</ModalHeader>
						<ModalBody>
							<FormikInput name="id" id="id" type="text" label="Product ID" disabled={true} />
							<FormikInput name="name" id="name" type="text" label="Name" />
							<FormikInput name="description" id="description" type="textarea" label="Description" />
							<FormikInput name="unit" id="unit" type="text" label="Unit" />
							<FormikInput name="quantity" id="quantity" type="text" label="Quantity" />
							<FormikInput name="price" id="price" type="text" label="Price" />
							<FormikRadioButtons 
								name="status" 
								id="status" 
								label="Quantity" 
								options={[
									{key: "Available", value: "1"},
									{key: "Not Available", value: "2"}
								]} 
							/>
							<FormikSelect 
								name="categoryId" 
								id="categoryId" 
								label="Category" 
								options={categories && [{key: "--- Categories ---", value: ""}, ...categories.map(category => ({ key: category.name, value: category.id }))]} 
							/>
							<FormikSelect 
								name="supplierId" 
								id="supplierId" 
								label="Supplier" 
								options={suppliers && [{key: "--- Suppliers ---", value: ""}, ...suppliers.map(supplier => ({ key: supplier.name, value: supplier.id }))]} 
							/>
							<FormikInput name="otherDetails" id="otherDetails" label="Other Details" type="textarea" />
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
										toggleProductFormModal();
										unloadSavedProduct();
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

const mapStateToProps = ({ product: productState, category: categoryState, supplier: supplierState }) => {
	const { isOpen, product } = productState;
	const { categories } = categoryState;
	const { suppliers } = supplierState;
	return { isOpen, product, categories, suppliers };
};

const mapActionsToProps = dispatch => ({
	toggleProductFormModal: () => dispatch(toggleProductFormModal()),
	addProductStart: (product) => dispatch(addProductStart(product)),
	updateProductStart: (product) => dispatch(updateProductStart(product)),
	unloadSavedProduct: () => dispatch(unloadSavedProduct()),
	fetchAllCategoriesStart: () => dispatch(fetchAllCategoriesStart()),
	fetchAllSuppliersStart: () => dispatch(fetchAllSuppliersStart()),
});

export default connect(
	mapStateToProps,
	mapActionsToProps
)(ProductFormModal);