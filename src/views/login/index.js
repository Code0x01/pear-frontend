import React from "react";
import {
	Container,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Form,
	Input,
	FormGroup,
	Button,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
} from "reactstrap";
import "./style.css";

const Login = props => {
	const handleOnSubmit = e => {
		e.preventDefault();
	};

	return (
		<Container className="mt-2">
			<Card className="login">
				<CardHeader>
					<strong>Login to your Pear account</strong>
				</CardHeader>
				<CardBody>
					<Form onSubmit={handleOnSubmit}>
						<InputGroup className="mb-2">
							<InputGroupAddon addonType="prepend">
								<InputGroupText><i className="fa fa-user"/></InputGroupText>
							</InputGroupAddon>
							<Input type="email" name="email" id="email" placeholder="Email" />
						</InputGroup>
						<InputGroup className="mb-2">
							<InputGroupAddon addonType="prepend">
								<InputGroupText><i className="fa fa-lock"/></InputGroupText>
							</InputGroupAddon>
							<Input type="password" name="password" id="password" placeholder="Password" />
						</InputGroup>
						<Button className="btn-block" color="success">Login</Button>
					</Form>
				</CardBody>
				<CardFooter>
					<a href="">forgot password?</a>
				</CardFooter>
			</Card>
		</Container>
	);
};

export default Login;