import React, { useEffect } from "react";
import { 
	Container,
	Card,
	CardHeader,
	CardBody,
	Button,
	Table
} from "reactstrap";
import { connect } from "react-redux";
import {
	fetchAllSuppliersStart,
	deleteSupplierStart,
	toggleSupplierFormModal,
	loadSavedSupplier,
} from "../../redux/actions";
import SupplierFormModal from "../../components/supplier-form-modal";
import Message from "../../components/message";
import "./style.css";

const Suppliers = props => {

	const {
		toggleSupplierFormModal,
		fetchAllSuppliersStart,
		deleteSupplierStart,
		loadSavedSupplier,
		suppliers,
		message
	} = props;

	useEffect(() => {
		fetchAllSuppliersStart();
	}, [fetchAllSuppliersStart]);

	return (
		<Container className="mt-2">
			{message && <Message color="success"><i className="fa fa-check mr-1"/> {message}</Message>}
			<div className="mb-2">
				<Button color="primary" className="mr-1" size="sm" onClick={toggleSupplierFormModal}>
					New Supplier
				</Button>
				<Button color="success" size="sm" onClick={fetchAllSuppliersStart}>
					<i className="fa fa-refresh mr-1"/>
				</Button>
			</div>
			<SupplierFormModal />
			<Card>
				<CardHeader>
					<strong>
						<i className="fa fa-users"/> Supplier Details
					</strong>
				</CardHeader>
				<CardBody>
					<Table bordered>
						<thead>
							<tr>
								<th>ID</th>
								<th>Name</th>
								<th>Address</th>
								<th>Phone</th>
								<th>Email</th>
								<th>OtherDetails</th>
								<th className="action-col">Action</th>
							</tr>
						</thead>
						<tbody>
							{suppliers && suppliers.map(supplier => {
								const { id, name, address, phone, email, otherDetails } = supplier;
								return (
									<tr key={id}>
										<td>{id}</td>
										<td>{name}</td>
										<td>{address}</td>
										<td>{phone}</td>
										<td>{email}</td>
										<td>{otherDetails}</td>
										<td>
											<Button color="primary" size="sm" className="mr-1" onClick={() => loadSavedSupplier(id)}>
												<i className="fa fa-edit" /> Edit
											</Button>
											<Button color="danger" size="sm" onClick={() => deleteSupplierStart(id)}>
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

const mapStateToProps = ({ supplier: supplierState }) => {
	const { suppliers, message } = supplierState;
	return { suppliers, message };
};

const mapActionsToProps = dispatch => ({
	fetchAllSuppliersStart: () => dispatch(fetchAllSuppliersStart()),
	deleteSupplierStart: (id) => dispatch(deleteSupplierStart(id)),
	toggleSupplierFormModal: () => dispatch(toggleSupplierFormModal()),
	loadSavedSupplier: (id) => dispatch(loadSavedSupplier(id)),
});

export default connect(
	mapStateToProps,
	mapActionsToProps
)(Suppliers);