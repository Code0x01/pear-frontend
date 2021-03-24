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

const Products = props => {
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
								<i className="fa fa-cube"/> Insert Product
							</strong>
						</CardHeader>
						<CardBody>
							<Form onSubmit={handleOnSubmit}>
								<FormGroup>
									<label htmlFor="productId">Product ID:</label>
									<Input type="text" name="productId" id="productId" placeholder="Product ID" disabled={true}/>
								</FormGroup>
								<FormGroup>
									<label htmlFor="productName">Product Name:</label>
									<Input type="text" name="productName" id="productName" placeholder="Product Name"/>
								</FormGroup>
								<FormGroup>
									<label htmlFor="price">Price:</label>
									<Input type="text" name="price" id="price" placeholder="Price"/>
								</FormGroup>
								<FormGroup>
									<label htmlFor="quantity">Quantity:</label>
									<Input type="text" name="quantity" id="quantity" placeholder="Quantity"/>
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
								<i className="fa fa-cubes"/> Product Details
							</strong>
						</CardHeader>
						<CardBody>
							<Table bordered>
								<thead>
									<tr>
										<th>ID</th>
										<th>Product Name</th>
										<th>Price</th>
										<th>Quantity</th>
										<th className="action-col">Action</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1</td>
										<td>product 1</td>
										<td>1</td>
										<td>1</td>
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

export default Products;