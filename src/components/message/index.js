import React, { useState } from "react";
import { Alert } from "reactstrap";

const Message = ({ color, children, ...rest }) => {
	const [visible, setVisible] = useState(true);
	const onDismiss = () => setVisible(false);
	return (
		<Alert color={color} isOpen={visible} toggle={onDismiss} {...rest}>
			{children}
		</Alert>
	);
};

export default Message;