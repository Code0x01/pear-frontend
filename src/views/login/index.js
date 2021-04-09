import React, { Component } from "react";
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
	Alert,
	FormFeedback
} from "reactstrap";
import { connect } from "react-redux";
import { loginUserStart } from "../../redux/actions";
import classnames from "classnames";
import "./style.css";

class Login extends Component {

	constructor() {
		super();

		this.state = {
			email: "",
			password: ""
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit(e) {
		e.preventDefault();

		const user = { ...this.state };
		const { loginUserStart, history } = this.props;

		loginUserStart(user, history);
	};

	componentDidMount() {
		const { authUser, history } = this.props;

		if (authUser) {
			history.push("/app/home");
		}
	}
 	
 	render() {
 		const { errors } = this.props;
 		return (
			<Container className="mt-2">
				<Card className="login">
					<CardHeader>
						<strong>Login to your Pear account</strong>
					</CardHeader>
					<CardBody>
						{errors.badCredentials && (
							<Alert color="danger">
								{errors.badCredentials}
							</Alert>
						)}
						<Form onSubmit={this.onSubmit}>
							<InputGroup className="mb-2">
								<InputGroupAddon addonType="prepend">
									<InputGroupText><i className="fa fa-user"/></InputGroupText>
								</InputGroupAddon>
								<Input 
									type="email" 
									name="email" 
									id="email" 
									placeholder="Email" 
									onChange={this.onChange}
									value={this.state.email}
									className={classnames({ "invalid": errors.username })}
									invalid={errors.username ? true : false}
								/>
								{errors.username && (
									<FormFeedback>
										{errors.username}
									</FormFeedback>
								)}
							</InputGroup>


								<InputGroup className="mb-2">
									<InputGroupAddon addonType="prepend">
										<InputGroupText><i className="fa fa-lock"/></InputGroupText>
									</InputGroupAddon>
									<Input 
										type="password" 
										name="password" 
										id="password" 
										placeholder="Password" 
										onChange={this.onChange}
										value={this.state.password}
										invalid={errors.password ? true : false}
									/>
									{errors.password && (
										<FormFeedback invalid>
											{errors.password}
										</FormFeedback>
									)}
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
 	}
	
};

const mapStateToProps = ({ auth }) => {
	const { user: authUser, errors } = auth;
	return { authUser, errors };
};

const mapActionsToProps = (dispatch) => ({
	loginUserStart: (user, history) => dispatch(loginUserStart(user, history))
});

export default connect(
	mapStateToProps,
	mapActionsToProps
)(Login);