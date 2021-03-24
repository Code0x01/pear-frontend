import React from "react";
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

const Orders = props => {
	return (
		<Container className="mt-2">
			<Row noGutters={true}>
				<Col md="7" className="pr-2">
					<Card>
						<CardBody>
							<Input placeholder="search orders" className="float-right"/>
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
									<tr>
										<td>1</td>
										<td>Customer 1</td>
										<td>Sell</td>
										<td>25-01-2021</td>
										<td>1100</td>
										<td>
											<Button outline color="primary" size="sm"><i className="fa fa-search-plus"/></Button>
										</td>
									</tr>
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
									<tr>
										<td>1</td>
										<td>Product 1</td>
										<td>1</td>
										<td>1</td>
										<td>1</td>
									</tr>
									<tr>
										<td>2</td>
										<td>Product 2</td>
										<td>2</td>
										<td>2</td>
										<td>2</td>
									</tr>
								</tbody>
							</Table>
						</CardBody>
					</Card>
				</Col>
			</Row>
			
		</Container>
	);
};

export default Orders;