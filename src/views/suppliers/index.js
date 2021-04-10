import React from "react";
import { 
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
	Input
} from "reactstrap";
import "./style.css";

const Suppliers = props => {
	const handleOnSubmit = e => {
		e.preventDefault();
	};

	return (
		<Container className="mt-2">
			<Row noGutters={true}>
				<Col md="4">
					<Card>
						<CardHeader>
							<strong>
								<i className="fa fa-user"/> Insert Supplier
							</strong>
						</CardHeader>
						<CardBody>
							<Form onSubmit={handleOnSubmit}>
								<FormGroup>
									<label htmlFor="customerId">Supplier ID:</label>
									<Input type="text" name="customerId" id="customerId" placeholder="Customer ID" disabled={true}/>
								</FormGroup>
								<FormGroup>
									<label htmlFor="customerName">Supplier Name:</label>
									<Input type="text" name="customerName" id="customerName" placeholder="Customer Name"/>
								</FormGroup>
								<FormGroup>
									<label htmlFor="phone">Phone:</label>
									<Input type="text" name="phone" id="phone" placeholder="Phone"/>
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
								<i className="fa fa-users"/> Supplier Details
							</strong>
						</CardHeader>
						<CardBody>
							<Table bordered>
								<thead>
									<tr>
										<th>ID</th>
										<th>Supplier Name</th>
										<th>Phone</th>
										<th className="action-col">Action</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1</td>
										<td>Supplier 1</td>
										<td>123456789</td>
										<td>
											<Button color="warning" size="sm" className="mr-1">
												<i className="fa fa-edit" /> Edit
											</Button>
											<Button color="danger" size="sm">
												<i className="fa fa-times" /> Remove
											</Button>
										</td>
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

export default Suppliers;