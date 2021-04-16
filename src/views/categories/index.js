import React, { useEffect } from "react";
import {
	Container,
	Card,
	CardHeader,
	CardBody,
	Button,
	Table,
} from "reactstrap";
import { connect } from "react-redux";
import { 
	fetchAllCategoriesStart,
	deleteCategoryStart,
	toggleCategoryFormModal,
	loadSavedCategory,
} from "../../redux/actions";
import CategoryFormModal from "../../components/category-form-modal";
import Message from "../../components/message";
import "./style.css";

const Categories = (props) => {

	const {
		toggleCategoryFormModal,
		fetchAllCategoriesStart,
		deleteCategoryStart,
		loadSavedCategory,
		categories,
		message,
	} = props;

	useEffect(() => {
		fetchAllCategoriesStart();
	}, [fetchAllCategoriesStart]);

	return (
		<Container className="mt-2">
			{message && <Message color="success"><i className="fa fa-check mr-1"/> {message}</Message>}
			<Button color="primary" className="mb-2" onClick={toggleCategoryFormModal}>
				New Category
			</Button>
			<CategoryFormModal />
			<Card>
				<CardHeader>
					<strong>
						<i className="fa fa-users"/> Category Details
					</strong>
				</CardHeader>
				<CardBody>
					<Table bordered>
						<thead>
							<tr>
								<th>ID</th>
								<th>Name</th>
								<th>Description</th>
								<th className="action-col">Action</th>
							</tr>
						</thead>
						<tbody>
							{categories && categories.map(category => {
								const { id, name, description } = category; 
								return (
									<tr key={id}>
										<td>{id}</td>
										<td>{name}</td>
										<td>{description}</td>
										<td>
											<Button 
												color="warning" 
												size="sm" 
												className="mr-1"
												onClick={() => loadSavedCategory(id)}
											>
												<i className="fa fa-edit" /> Edit
											</Button>
											<Button 
												color="danger" 
												size="sm" 
												onClick={() => deleteCategoryStart(id)}
											>
												<i className="fa fa-times" /> Remove
											</Button>
										</td>
									</tr>
								)
							})}
						</tbody>
					</Table>
				</CardBody>
			</Card>
		</Container>
	);
	
};

const mapStateToProps = ({ category: cat }) => {
	const { categories, message } = cat;
	return { categories, message };
};

const mapActionsToProps = (dispatch) => ({
	fetchAllCategoriesStart: () => dispatch(fetchAllCategoriesStart()),
	deleteCategoryStart: (id) => dispatch(deleteCategoryStart(id)),
	toggleCategoryFormModal: () => dispatch(toggleCategoryFormModal()),
	loadSavedCategory: (id) => dispatch(loadSavedCategory(id)),
});

export default connect(
	mapStateToProps,
	mapActionsToProps
)(Categories);