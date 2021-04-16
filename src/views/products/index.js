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
	fetchAllProductsStart,
	fetchAllCategoriesStart,
	fetchAllSuppliersStart,
	deleteProductStart,
	toggleProductFormModal,
	loadSavedProduct,
} from "../../redux/actions";
import ProductFormModal from "../../components/product-form-modal";
import Message from "../../components/message";
import _ from "lodash";
import "./style.css";

const Products = props => {
	const {
		toggleProductFormModal,
		fetchAllSuppliersStart,
		fetchAllCategoriesStart,
		fetchAllProductsStart,
		deleteProductStart,
		loadSavedProduct,
		message,
		products,
		categories,
		suppliers
	} = props;

	useEffect(() => {
		fetchAllProductsStart();
		fetchAllCategoriesStart();
		fetchAllSuppliersStart();
	}, [fetchAllProductsStart, fetchAllCategoriesStart, fetchAllSuppliersStart]);

	return (
		<Container className="mt-2">
			{message && <Message color="success"><i className="fa fa-check mr-1"/> {message}</Message>}
			<div className="mb-2">
				<Button color="primary" className="mr-1" size="sm" onClick={toggleProductFormModal}>
					New Customer
				</Button>
				<Button color="success" size="sm" onClick={fetchAllProductsStart}>
					<i className="fa fa-refresh mr-1"/>
				</Button>
			</div>
			<ProductFormModal />
			<Card>
				<CardHeader>
					<strong>
						<i className="fa fa-cubes"/> Product Details
					</strong>
				</CardHeader>
				<CardBody>
					<Table bordered>
						<thead>
							<tr>
								<th>ID</th>
								<th>Name</th>
								<th>Description</th>
								<th>Unit</th>
								<th>Qty</th>
								<th>Price</th>
								<th>Status</th>
								<th>Supplier</th>
								<th>Category</th>
								<th>Other Details</th>
								<th className="action-col">Action</th>
							</tr>
						</thead>
						<tbody>
							{products && products.map(product => {
								const {
									id,
									name,
									description,
									unit,
									quantity,
									price,
									status,
									supplierId,
									categoryId,
									otherDetails
								} = product;
								return (
									<tr key={id}>
										<td>{id}</td>
										<td>{name}</td>
										<td>{description}</td>
										<td>{unit}</td>
										<td>{quantity}</td>
										<td>{price}</td>
										<td>{status}</td>
										<td>{suppliers && _.find(suppliers, supplier => supplier.id === supplierId).name}</td>
										<td>{categories && _.find(categories, category => category.id === categoryId).name}</td>
										<td>{otherDetails}</td>
										<td>
											<Button color="primary" size="sm" className="mr-1" onClick={() => loadSavedProduct(id)}>
												<i className="fa fa-edit" /> Edit
											</Button>
											<Button color="danger" size="sm" onClick={() => deleteProductStart(id)}>
												<i className="fa fa-times" /> Remove
											</Button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</Table>
				</CardBody>
			</Card>
		</Container>
	);
};

const mapStateToProps = ({ product, category, supplier }) => {
	const { products, message } = product;
	const { categories } = category;
	const { suppliers } = supplier;
	return { products, categories, suppliers, message };
};

const mapActionsToProps = dispatch => ({
	fetchAllProductsStart: () => dispatch(fetchAllProductsStart()),
	fetchAllCategoriesStart: () => dispatch(fetchAllCategoriesStart()),
	fetchAllSuppliersStart: () => dispatch(fetchAllSuppliersStart()),
	deleteProductStart: (id) => dispatch(deleteProductStart(id)),
	toggleProductFormModal: () => dispatch(toggleProductFormModal()),
	loadSavedProduct: (id) => dispatch(loadSavedProduct(id)),
});

export default connect(mapStateToProps, mapActionsToProps)(Products);