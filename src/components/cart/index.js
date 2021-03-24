import React from "react";
import { connect } from "react-redux";
import { toggleOrderPreviewModal } from "../../redux/actions";
import {
	Card,
	CardHeader,
	CardBody,
	Table,
	Button
} from "reactstrap";
import Slider from "../slider";
import "./style.css";

const Cart = props => {

	const { toggleOrderPreviewModal } = props;

	return (
		<Card className="mt-2">
			<CardBody>
				<Table bordered>
					<thead>
						<tr>
							<th>#</th>
							<th>Product Name</th>
							<th>Price</th>
							<th>Quantity</th>
							<th>Action</th>
							<th>Total</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td scope="row">1</td>
							<td>Product 1</td>
							<td>1</td>
							<td><Slider minVal={2} maxVal={10} /></td>
							<td>
								<Button color="danger" size="sm">
									<i className="fa fa-times"/> Remove
								</Button>
							</td>
							<td>1</td>
						</tr>
						<tr>
							<th className="text-right" colSpan="5">Total:</th>
							<th>1</th>
						</tr>
						<tr>
							<td className="text-right" colSpan="6">
								<Button color="success" onClick={toggleOrderPreviewModal}>
									<i className="fa fa-shopping-cart"/> Checkout
								</Button>
							</td>
						</tr>
					</tbody>
				</Table>
			</CardBody>
		</Card>
	);
};

const mapActionsToProps = dispatch => ({
	toggleOrderPreviewModal: () => dispatch(toggleOrderPreviewModal())
});

export default connect(
	null,
	mapActionsToProps
)(Cart);