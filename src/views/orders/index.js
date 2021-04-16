import React, { useEffect, useState } from "react";
import { 
	Container,
	Card,
	CardHeader,
	CardBody,
	Table,
	Button,
	Row,
	Col,
	Input
} from "reactstrap";
import "./style.css";
import { connect } from "react-redux";
import { 
	fetchAllOrdersStart,
	fetchAllProductsStart,
	fetchAllCustomersStart,
} from "../../redux/actions";
import _ from "lodash";


const Orders = props => {

	const [ orderDetails, setOrderDetails ] = useState([]);

	const {
		fetchAllOrdersStart,
		fetchAllCustomersStart,
		fetchAllProductsStart,
		orders,
		customers,
		products
	} = props;

	useEffect(() => {
		fetchAllOrdersStart();
		fetchAllCustomersStart();
		fetchAllProductsStart();
	}, [fetchAllOrdersStart, fetchAllCustomersStart, fetchAllProductsStart]);

	return (
		<Container className="mt-2">
			<Row noGutters={true}>
				<Col md="7" className="pr-2">
					<Card>
						<CardBody>
							<Input placeholder="search orders" className="mb-2"/>
							<Table>
								<thead>
									<tr>
										<th>ID</th>
										<th>Customer Name</th>
										<th>Order Type</th>
										<th>Order Date</th>
										<th>Amount</th>
										<th>Details</th>
									</tr>
								</thead>
								<tbody>
									{orders && orders.map((order, idx) => { 
										const customer = _.find(customers, customer => customer.id === order.customerId);
										return (
										<tr key={idx}>
											<td>{order.id}</td>
											<td>{`${customer.firstName} ${customer.lastName}`}</td>
											<td>{order.orderType}</td>
											<td>{order.orderDate}</td>
											<td>1100</td>
											<td>
												<Button 
													outline 
													color="primary" 
													size="sm" 
													onClick={() => setOrderDetails(order.orderDetails)}
												>
													<i className="fa fa-search-plus"/>
												</Button>
											</td>
										</tr>)
									})}
								</tbody>
							</Table>
						</CardBody>
					</Card>
				</Col>
				<Col md="5">
					<Card>
						<CardHeader>
							Order Details
						</CardHeader>
						<CardBody>
							<Table>
								<thead>
									<tr>
										<th>ID</th>
										<th>Product Name</th>
										<th>Price</th>
										<th>Quantity</th>
										<th>Total</th>
									</tr>
								</thead>
								<tbody>
									{orderDetails.map((item, idx) => {
										const product = _.find(products, product => product.id === item.productId);
										return (
											<tr key={idx}>
												<td>{product.id}</td>
												<td>{product.name}</td>
												<td>{product.price}</td>
												<td>{item.quantity}</td>
												<td>{item.total}</td>
											</tr>
										);
									})}
								</tbody>
							</Table>
						</CardBody>
					</Card>
				</Col>
			</Row>
			
		</Container>
	);
};

const mapStateToProps = ({ order, product, customer }) => {
	const { orders } = order;
	const { products } = product;
	const { customers } = customer;
	return { orders, products, customers };
};

const mapActionsToProps = dispatch => ({
	fetchAllOrdersStart: () => dispatch(fetchAllOrdersStart()),
	fetchAllProductsStart: () => dispatch(fetchAllProductsStart()),
	fetchAllCustomersStart: () => dispatch(fetchAllCustomersStart()),
});

export default connect(
	mapStateToProps,
	mapActionsToProps
)(Orders);