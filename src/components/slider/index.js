import React, { useState } from "react";
import {
	Button
} from "reactstrap";
import "./style.css";

const Slider = props => {
	const { minVal, maxVal } = props;
	const [ val, setVal ] = useState(minVal);
	return (
		<React.Fragment>
			<ul className="slider">
				<li>
					<Button size="sm" color="danger" onClick={() => setVal( val > minVal ? val - 1 : val )}>
						<i className="fa fa-minus"/>
					</Button>
				</li>
				<li className="val">{val}</li>
				<li>
					<Button size="sm" color="success" onClick={() => setVal( val < maxVal ? val + 1 : val )}>
						<i className="fa fa-plus"/>
					</Button>
				</li>
			</ul>
		</React.Fragment>
	);
};

export default Slider;