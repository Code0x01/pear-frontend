import React, { useEffect } from "react";
import { 
	Container,
	Card,
	CardHeader,
	CardBody,
	Row,
	Col,
	Button,
} from "reactstrap";
import { Formik, Form } from "formik";
import { FormikInput, FormikRadioButtons, FormikSelect } from "../../components/formik-controls";
import Cart from "../../components/cart";
// import OrderPreviewModal from "../../components/order-preview-modal";
import "./style.css";
import { connect } from "react-redux";
import * as Yup from "yup";
import {
	fetchAllProductsStart,
	fetchAllCustomersStart,
	addItem,
	addOrderStart,
} from "../../redux/actions";
import _ from "lodash";

const Home = props => {

	const {
		fetchAllProductsStart,
		fetchAllCustomersStart,
		addItem,
		addOrderStart,
		products,
		customers,
		items,
		history,
	} = props;
	
	useEffect(() => {
		fetchAllProductsStart();
		fetchAllCustomersStart();
	}, []);

	const initialValues = {
		orderDate: "",
		orderType: "",
		otherDeatils: "",
		customerId: "",
		paymentType: "",
		productId: "",
	};

	const validationSchema = Yup.object({
		orderDate: Yup.date().required("Required"),
		orderType: Yup.string().required("Required"),
		otherDeatils: Yup.string().max(255),
		customerId: Yup.number().required(),
		paymentType: Yup.string().required()
	});

	const onSubmit = values => {
		
		const order = {
			orderDate: values.orderDate,
			orderType: values.orderType,
			otherDeatils: values.otherDetails,
			customerId: values.customerId,
			payment: {
				paymentType: values.paymentType,
				otherDetails: "",
			},
			orderDetails: _.map(items, item => ({
				unitPrice: item.unitPrice,
				size: 1,
				quantity: item.quantity,
				discount: 0,
				total: item.total,
				productId: item.id
			})),
		}

		addOrderStart(order, props.history);
	};

	const addToCart = (e, formik) => {
		e.preventDefault();
		if (!_.isNull(formik.values.productId)) {
			const product = _.find(products, product => product.id === parseInt(formik.values.productId));
			if (!_.isNull(product)) {
				addItem({
					id: product.id,
					name: product.name,
					unitPrice: product.price,
					quantity: 1,
					total: product.price
				});
			}	
		}
	};

	return (
		<Container>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				{formik => (
					<Form>
						<Card className="mt-2">
							<CardBody>
								<Row>
									<Col md="4">
										<FormikInput name="orderDate" id="orderDate" type="date" label="Order Date" />
									</Col>
									<Col md="2">
										<FormikRadioButtons
											name="orderType"
											id="orderType"
											label="Order Type"
											options={[
												{key: "Sell", value: "sell"},
												{key: "Purshase", value: "purshase"}
											]}
										/>
									</Col>
									<Col md="6">
										<FormikInput name="otherDetails" id="otherDetails" type="textarea" label="Other Details" placeholder="Other Details" />
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
												<i className="fa fa-cube"/> Select Product
											</CardHeader>
											<CardBody>
												{<FormikSelect
													name="productId"
													id="productId"
													label="Product Name"
													options={(!_.isNull(products) && !_.isEmpty(products) ? 
														[{key: "--- Products ---", value: ""}, ...products.map(product => ({ key: product.name, value: product.id }))] : 
														[]
													)}
												/>}
												<Button type="button" onClick={(e) => addToCart(e, formik)} block color="primary" size="sm">Add to Cart</Button>
											</CardBody>
										</Card>
									</Col>
									<Col md="4">
										<Card className="h100">
											<CardHeader>
												<i className="fa fa-user"/> Select Customer
											</CardHeader>
											<CardBody>
												{<FormikSelect
													name="customerId"
													id="customerId"
													label="Customer Name"
													options={(!_.isNull(customers) && !_.isEmpty(customers) ? 
														[{key: "--- Customers ---", value: ""}, ...customers.map(customer => ({ key: `${customer.firstName} ${customer.lastName}`, value: customer.id }))] : 
														[]
													)}
												/>}
											</CardBody>
										</Card>
									</Col>
									<Col md="4">
										<Card className="h100">
											<CardHeader>
												<i className="fa fa-dollar"/> Payment
											</CardHeader>
											<CardBody>
												<FormikRadioButtons
													name="paymentType"
													id="paymentType"
													label="Payment Type"
													options={[
														{key: "Cash", value: "cash"},
														{key: "Credit Card", value: "credit card"},
														{key: "Check", value: "check"}
													]}
												/>
											</CardBody>
										</Card>
									</Col>
								</Row>
							</CardBody>
						</Card>
						<Cart />
						<Card className="mt-2">
							<CardBody className="text-right">
								<Button color="primary mr-2" size="sm" type="button" onClick={(e) => e.preventDefault()}>
									<i className="fa fa-search-plus"/> Order Preview
								</Button>
								<Button color="success" size="sm" type="submit">
									<i className="fa fa-shopping-cart"/> Checkout
								</Button>
							</CardBody>
						</Card>
					</Form>
				)}
			</Formik>
		</Container>
	);
};

const mapStateToProps = ({ product, customer, cart }) => {
	const { products } = product;
	const { customers } = customer;
	const { items } = cart;
	return { products, customers, items };
};

const mapActionsToProps = dispatch => ({
	fetchAllProductsStart: () => dispatch(fetchAllProductsStart()),
	fetchAllCustomersStart: () => dispatch(fetchAllCustomersStart()),
	addItem: (item) => dispatch(addItem(item)),
	addOrderStart: (order) => dispatch(addOrderStart(order)),
});

export default connect(mapStateToProps, mapActionsToProps)(Home);