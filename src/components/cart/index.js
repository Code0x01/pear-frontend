import React from "react";
import { connect } from "react-redux";
import {
	removeItem,
} from "../../redux/actions";
import {
	Card,
	CardBody,
	Table,
	Button
} from "reactstrap";
import Slider from "../slider";
import "./style.css";
import _ from "lodash";

const Cart = props => {

	const {
		removeItem,
		items,
		total
	} = props;

	return (
		<Card className="mt-2">
			<CardBody>
				<Table bordered>
					<thead>
						<tr>
							<th>#</th>
							<th>Product Name</th>
							<th>Price</th>
							<th className="quantity-col">Quantity</th>
							<th className="remove-col">Action</th>
							<th>Total</th>
						</tr>
					</thead>
					<tbody>
						{(!_.isEmpty(items) && !_.isNull(items) && items.map((item, idx) => (
							<tr key={idx}>
								<td scope="row">{item.id}</td>
								<td>{item.name}</td>
								<td>{item.unitPrice}</td>
								<td><Slider itemId={item.id} /></td>
								<td>
									<Button color="danger" size="sm" onClick={() => removeItem(item.id)}>
										<i className="fa fa-times"/> Remove
									</Button>
								</td>
								<td>{item.total}</td>
							</tr>
						)))}
						<tr>
							<th className="text-right" colSpan="5">Total:</th>
							<th>{total}</th>
						</tr>
					</tbody>
				</Table>
			</CardBody>
		</Card>
	);
};

const mapStateToProps = ({ cart }) => {
	const { items, total } = cart;
	return { items, total };
};

const mapActionsToProps = dispatch => ({
	removeItem: (id) => dispatch(removeItem(id)),
});

export default connect(
	mapStateToProps,
	mapActionsToProps
)(Cart);