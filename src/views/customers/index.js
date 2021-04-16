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
	fetchAllCustomersStart,
	deleteCustomerStart,
	toggleCustomerFormModal,
	loadSavedCustomer,
} from "../../redux/actions";
import CustomerFormModal from "../../components/customer-form-modal";
import Message from "../../components/message";
import "./style.css";

const Customers = props => {
	
	const {
		toggleCustomerFormModal,
		fetchAllCustomersStart,
		deleteCustomerStart,
		loadSavedCustomer,
		customers,
		message
	} = props;

	useEffect(() => {
		fetchAllCustomersStart();
	}, [fetchAllCustomersStart]);

	return (
		<Container className="mt-2">
			{message && <Message color="success"><i className="fa fa-check mr-1"/> {message}</Message>}
			<div className="mb-2">
				<Button color="primary" className="mr-1" size="sm" onClick={toggleCustomerFormModal}>
					New Customer
				</Button>
				<Button color="success" size="sm" onClick={fetchAllCustomersStart}>
					<i className="fa fa-refresh mr-1"/>
				</Button>
			</div>
			<CustomerFormModal />
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
								<th>Full Name</th>
								<th>Phone</th>
								<th>Email</th>
								<th>Address</th>
								<th className="action-col">Action</th>
							</tr>
						</thead>
						<tbody>
							{customers && customers.map(customer => {
								const { id, firstName, lastName, phone, email, address } = customer;
								return (
									<tr key={id}>
										<td>{id}</td>
										<td>{firstName + ' ' + lastName}</td>
										<td>{phone}</td>
										<td>{email}</td>
										<td>{address}</td>
										<td>
											<Button color="primary" size="sm" className="mr-1" onClick={() => loadSavedCustomer(id)}>
												<i className="fa fa-edit" /> Edit
											</Button>
											<Button color="danger" size="sm" onClick={() => deleteCustomerStart(id)}>
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

const mapStateToProps = ({ customer }) => {
	const { customers, message } = customer;
	return { customers, message };
};

const mapActionsToProps = dispatch => ({
	fetchAllCustomersStart: () => dispatch(fetchAllCustomersStart()),
	deleteCustomerStart: (id) => dispatch(deleteCustomerStart(id)),
	toggleCustomerFormModal: () => dispatch(toggleCustomerFormModal()),
	loadSavedCustomer: (id) => dispatch(loadSavedCustomer(id)),
}); 

export default connect(
	mapStateToProps,
	mapActionsToProps
)(Customers);