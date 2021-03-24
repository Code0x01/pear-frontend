import React, { useState } from "react";
import { 
	Container,
	Card,
	CardHeader,
	CardBody,
	Row,
	Col,
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormText
} from "reactstrap";
import Cart from "../../components/cart";
import OrderPreviewModal from "../../components/order-preview-modal";
import "./style.css";

const Home = props => {
	const [ orderType, setOrderType ] = useState("sell");

	const handleOnSubmit = e => {
		e.preventDefault();
	};

	return (
		<Container>
			<Form onSubmit={handleOnSubmit}>
				<Card className="mt-2">
					<CardBody>
						<Row>
							<Col md="4">
								<legend>Order No:</legend>
								<FormGroup>
									<Input type="text" name="orderNumber" id="orderNumber" placeholder="Order number" />
								</FormGroup>
							</Col>
							<Col md="4">
								<legend>Order Type:</legend>
								<Row>
									<Col sm="4">
										<FormGroup check>
						          <Label check onClick={() => setOrderType("sell")}>
						            <Input type="radio" name="orderType" checked={orderType === "sell"} />{' '}Sell
						          </Label>
						        </FormGroup>
									</Col>
									<Col>
										<FormGroup check>
						          <Label check onClick={() => setOrderType("purchase")}>
						            <Input type="radio" name="orderType" checked={orderType === "purchase"} />{' '}Purchase
						          </Label>
						        </FormGroup>
									</Col>
								</Row>
							</Col>
							<Col md="4">
								<legend>Order Date:</legend>
								<FormGroup>
									<Input type="date" name="orderNumber" id="orderNumber" placeholder="Order number" />
								</FormGroup>
							</Col>
						</Row>
					</CardBody>
				</Card>
				<Card className="mt-2">
					<CardBody>
						<Row>
							<Col md="4">
								<Card className="h100">
									<CardHeader>
										<i className="fa fa-cube"/> Select Product:
									</CardHeader>
									<CardBody>
										<legend>Product Name:</legend>
										<FormGroup>
											<Input type="select" name="productName" id="productName">
							          <option>Product 1</option>
							          <option>Product 2</option>
							          <option>Product 3</option>
							          <option>Product 4</option>
							          <option>Product 5</option>
							        </Input>
										</FormGroup>
										<legend>Product ID:</legend>
										<FormGroup>
											<Input 
												type="text" 
												name="productId" 
												id="productId" 
												placeholder="Product ID"
												disabled={true}
											/>
										</FormGroup>
										<legend>Price: </legend>
										<FormGroup>
											<Input 
												type="text" 
												name="price" 
												id="price" 
												placeholder="Price"
												disabled={true}
											/>
										</FormGroup>
										<legend>Stock: </legend>
										<FormGroup>
											<Input 
												type="text" 
												name="stock" 
												id="stock" 
												placeholder="Stock" 
												disabled={true}
											/>
										</FormGroup>
									</CardBody>
								</Card>
							</Col>
							<Col md="4">
								<Card className="h100">
									<CardHeader>
										<i className="fa fa-user"/> Select Customer:
									</CardHeader>
									<CardBody>
										<legend>Customer Name:</legend>
										<FormGroup>
											<Input type="select" name="customerName" id="customerName">
							          <option>Customer 1</option>
							          <option>Customer 2</option>
							          <option>Customer 3</option>
							          <option>Customer 4</option>
							          <option>Customer 5</option>
							        </Input>
										</FormGroup>
										<legend>Customer ID:</legend>
										<FormGroup>
											<Input 
												type="text" 
												name="custoemrId" 
												id="customerId" 
												placeholder="Customer ID"
												disabled={true}
											/>
										</FormGroup>
										<legend>Phone: </legend>
										<FormGroup>
											<Input 
												type="text" 
												name="phone" 
												id="phone" 
												placeholder="Customer phone"
												disabled={true}
											/>
										</FormGroup>
									</CardBody>
								</Card>
							</Col>
							<Col md="4">
								<Card className="h100">
									<CardHeader>
										<i className="fa fa-list"/> Order Details:
									</CardHeader>
									<CardBody>
										<legend>Quantity:</legend>
										<FormGroup>
											<Input 
												type="text" 
												name="quantity" 
												id="quantity" 
												placeholder="Product quantity"
												disabled={true}
											/>
										</FormGroup>
										<legend>Total: </legend>
										<FormGroup>
											<Input 
												type="text" 
												name="total" 
												id="total" 
												placeholder="Total"
												disabled={true}
											/>
										</FormGroup>
										<Button color="success">
											<i className="fa fa-check"/> Submit
										</Button>
									</CardBody>
								</Card>
							</Col>
						</Row>
					</CardBody>
				</Card>
				<Cart />
				<OrderPreviewModal />
			</Form>
		</Container>
	);
};

export default Home;