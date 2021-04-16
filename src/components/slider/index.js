import React, { useState, useEffect } from "react";
import {
	Button
} from "reactstrap";
import "./style.css";
import { connect } from "react-redux";
import {
	changeQuantity,
} from "../../redux/actions";

const Slider = props => {
	const {
		itemId,
		changeQuantity
	} = props;

	const [ qty, setQty ] = useState(1);

	useEffect(() => {
		changeQuantity(itemId, qty);
	});

	return (
		<React.Fragment>
			<ul className="slider">
				<li>
					<Button size="sm" color="danger" onClick={() => {
						if (qty > 1) {
							setQty(qty - 1);
						}
					}}>
						<i className="fa fa-minus"/>
					</Button>
				</li>
				<li className="qty">{qty}</li>
				<li>
					<Button size="sm" color="success" onClick={() => {
						setQty(qty + 1);
					}}>
						<i className="fa fa-plus"/>
					</Button>
				</li>
			</ul>
		</React.Fragment>
	);
};

const mapActionsToProps = dispatch => ({
	changeQuantity: (id, quantity) => dispatch(changeQuantity(id, quantity)),
});

export default connect(null, mapActionsToProps)(Slider);