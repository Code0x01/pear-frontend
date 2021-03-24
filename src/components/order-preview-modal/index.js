import React, { useState } from "react";
import { connect } from "react-redux";
import {
	toggleOrderPreviewModal
} from "../../redux/actions";
import { 
	Button, 
	Modal, 
	ModalHeader, 
	ModalBody, 
	ModalFooter,
	Table
} from "reactstrap";
import "./style.css";

const OrderPreviewModal = props => {
	const {
		buttonLabel,
		className,
		isOpen,
		toggleOrderPreviewModal
	} = props;

	return (
		<div>
			<Modal isOpen={isOpen} toggle={toggleOrderPreviewModal} className={className} size="lg">
				<ModalHeader toggle={toggleOrderPreviewModal}>Order Preview</ModalHeader>
				<ModalBody>
					<Table striped>
						<tbody>
							<tr>
								<td>Order ID</td>
								<td>1</td>
							</tr>
							<tr>
								<td>Order Type</td>
								<td>Sell</td>
							</tr>
							<tr>
								<td>Order Date</td>
								<td>12-01-2021</td>
							</tr>
							<tr>
								<td>Customer ID</td>
								<td>1</td>
							</tr>
							<tr>
								<td>Amount</td>
								<td>101</td>
							</tr>
						</tbody>
					</Table>
					<br />
					<br />
					<strong>Order datails:</strong>
					<Table striped>
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
								<td>1203</td>
								<td>10</td>
								<td>12030</td>
							</tr>
							<tr>
								<td>1</td>
								<td>Product 1</td>
								<td>1203</td>
								<td>10</td>
								<td>12030</td>
							</tr>
						</tbody>
					</Table>
				</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={toggleOrderPreviewModal}>Do Something</Button>{' '}
					<Button color="secondary" onClick={toggleOrderPreviewModal}>Cancel</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
};

const mapStateToProps = ({ orderPreview }) => {
	const { isOpen } = orderPreview;
	return { isOpen };
};

const mapActionsToProps = dispatch => ({
	toggleOrderPreviewModal: () => dispatch(toggleOrderPreviewModal())
});

export default connect(
	mapStateToProps,
	mapActionsToProps
)(OrderPreviewModal);