import React, { Fragment } from "react";
import Topnav from "../components/topnav";

const AppLayout = props => {
	return (
		<Fragment>
			<Topnav />
			{props.children}
		</Fragment>
	);
};

export default AppLayout;