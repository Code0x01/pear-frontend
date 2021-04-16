import React from "react";
import { connect } from "react-redux";
import { Formik, Form } from "formik";
import { FormikInput } from "../formik-controls";
import * as Yup from "yup";
import { 
	toggleCategoryFormModal,
	addCategoryStart,
	updateCategoryStart,
	unloadSavedCategory,
} from "../../redux/actions";
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from "reactstrap";
import "./style.css";

const CategoryFormModal = (props) => {

	const {
		isOpen,
		toggleCategoryFormModal,
		className,
		addCategoryStart,
		updateCategoryStart,
		category
	} = props;

	const initialValues = {
		id: "",
		name: "",
		description: ""
	};

	const validationSchema = Yup.object({
		name: Yup.string().required("Required").max(50),
		description: Yup.string().required("Required!").max(255)
	});

	const onSubmit = values => {
		if (!values.id) addCategoryStart(values);
		else updateCategoryStart(values);
	};

	return (
		<Modal isOpen={isOpen} toggle={toggleCategoryFormModal} className={className} size="lg">
			<Formik
				initialValues={category || initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				{formik => (
					<React.Fragment>
					<Form>
						<ModalHeader toggle={toggleCategoryFormModal}>Category Form</ModalHeader>
							<ModalBody>
								<FormikInput
									name="id"
									type="text"
									label="Category ID"
									disabled={true}
								/>
								<FormikInput
									name="name"
									type="text"
									label="Name"
								/>
								<FormikInput
									name="description"
									type="textarea"
									label="Description"
								/>
							</ModalBody>
							<ModalFooter>
								<Button 
									color="primary" 
									type="submit"
								>
									Save
								</Button>
								<Button 
									color="secondary" 
									onClick={() => {
										toggleCategoryFormModal();
										unloadSavedCategory();
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

const mapStateToProps = ({ category: cat }) => {
	const { isOpen, category } = cat;
	return { isOpen, category };
};

const mapActionsToProps = dispatch => ({
	toggleCategoryFormModal: () => dispatch(toggleCategoryFormModal()),
	addCategoryStart: (category) => dispatch(addCategoryStart(category)),
	updateCategoryStart: (category) => dispatch(updateCategoryStart(category)),
	unloadSavedCategory: () => dispatch(unloadSavedCategory()),
});

export default connect(
	mapStateToProps,
	mapActionsToProps
)(CategoryFormModal);