import React from "react";
import {
	Alert, 
	Container,
	Card,
	CardHeader,
	CardBody,
	Button,
	Table,
	Row,
	Col,
	Form,
	FormGroup,
	FormFeedback,
	Input
} from "reactstrap";
import { connect } from "react-redux";
import { 
	fetchAllCategoriesStart,
	addCategoryStart,
	deleteCategoryStart,
	fetchOneCategoryStart
} from "../../redux/actions";
import "./style.css";

class Categories extends React.Component {

	constructor() {
		super();

		this.state = {
			categoryId: "",
			categoryName: "",
			categoryDescription: ""
		};

		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();
		const category = {
			id: this.state.categoryId,
			name: this.state.categoryName,
			description: this.state.categoryDescription
		}
		const { addCategoryStart } = this.props;
		addCategoryStart(category);
	}

	onChange(e) {
		this.setState( { [e.target.name]: e.target.value } );
	}

	onDelete(id) {
		this.props.deleteCategoryStart(id);
	}

	selectItem(id) {
		this.props.fetchOneCategoryStart(id);
	}

	componentDidMount() {
		const { fetchAllCategoriesStart } = this.props;
		fetchAllCategoriesStart();
	}

	render() {
		const { 
			categories, 
			errors, 
			message
		} = this.props;

		return (
			<Container className="mt-2">
				{ message && (<Alert color="success">{message}</Alert>) }
				<Row noGutters={true}>
					<Col md="4">
						<Card>
							<CardHeader>
								<strong>
									<i className="fa fa-user"/> Insert Category
								</strong>
							</CardHeader>
							<CardBody>
								<Form onSubmit={this.onSubmit}>
									<FormGroup>
										<label htmlFor="categoryId">Category ID:</label>
										<Input
											type="text" 
											name="categoryId" 
											id="categoryId" 
											placeholder="Category ID" 
											disabled={true}
											value={this.state.categoryId}
										/>
									</FormGroup>
									<FormGroup>
										<label htmlFor="categoryName">Category Name:</label>
										<Input 
											type="text" 
											name="categoryName" 
											id="categoryName" 
											placeholder="Category Name"
											value={this.categoryName}
											onChange={this.onChange}
											invalid={errors.name && true}
										/>
										{ errors.name && (<FormFeedback>{errors.name}</FormFeedback>) }
									</FormGroup>
									<FormGroup>
										<label htmlFor="phone">Category Description:</label>
										<Input 
											type="text" 
											name="categoryDescription" 
											id="categoryDescription" 
											placeholder="Category Description"
											value={this.categoryDescription}
											onChange={this.onChange}
											invalid={errors.description && true}
										/>
										{ errors.description && (<FormFeedback>{errors.description}</FormFeedback>) }
									</FormGroup>
									<Button color="success">
										<i className="fa fa-send"/> Submit
									</Button>
								</Form>
							</CardBody>
						</Card>
					</Col>
					<Col md="8" className="pl-2">
						<Card>
							<CardHeader>
								<strong>
									<i className="fa fa-users"/> Customer Details
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
										{ categories && categories.map(category => 
											<tr key={category.id}>
												<td>{category.id}</td>
												<td>{category.name}</td>
												<td>{category.description}</td>
												<td>
													<Button 
														color="warning" 
														size="sm" 
														className="mr-1"
														onClick={() => this.selectItem(category.id)}
													>
														<i className="fa fa-edit" /> Edit
													</Button>
													<Button 
														color="danger" 
														size="sm" 
														onClick={() => this.onDelete(category.id)}
													>
														<i className="fa fa-times" /> Remove
													</Button>
												</td>
											</tr>
										) }
									</tbody>
								</Table>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		);
	}
	
};

const mapStateToProps = ({ category: cat }) => {
	const { categories, category, errors, message } = cat;
	return { categories, category, errors, message };
};

const mapActionsToProps = (dispatch) => ({
	fetchAllCategoriesStart: () => dispatch(fetchAllCategoriesStart()),
	addCategoryStart: (category) => dispatch(addCategoryStart(category)),
	deleteCategoryStart: (id) => dispatch(deleteCategoryStart(id)),
	fetchOneCategoryStart: (id) => dispatch(fetchOneCategoryStart(id))
});

export default connect(
	mapStateToProps,
	mapActionsToProps
)(Categories);