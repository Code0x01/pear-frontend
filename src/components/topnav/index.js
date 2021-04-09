import React, { Component } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownMenu,
	DropdownItem,
	DropdownToggle,
	NavbarText,
	Container
} from "reactstrap";
import { connect } from "react-redux";
import { 
	toggleTopnavDropdownMenu,
	clickTopnavMenuLink,
	logoutUser
} from "../../redux/actions";
import { Link } from "react-router-dom";
import classnames from "classnames";
import "./style.css";
import PearLogo from "../../assets/images/pear-logo.png";

class Topnav extends Component {

	constructor() {
		super();

		this.onLogout = this.onLogout.bind(this);
	}

	onLogout(e) {
		e.preventDefault();
		this.props.logoutUser();
	};

	onNavItemClick(e, name) {
		this.props.clickTopnavMenuLink(name);
	}

	render() {

		const { authUser } = this.props;

		const userLoggedInNavLinks = (
			<React.Fragment>
				<Nav className="mr-auto" navbar>
					<NavItem className={classnames({"active": this.props.activeItem === "home"})}>
						<Link to="/app/home" className="nav-link" onClick={() => this.onNavItemClick("home")}>
							<i className="fa fa-home mr-2"/>Home
						</Link>
					</NavItem>
					<NavItem className={classnames({"active": this.props.activeItem === "products"})}>
						<Link to="/app/products" className="nav-link" onClick={() => this.onNavItemClick("products")}>
							<i className="fa fa-cubes mr-2"/>Products
						</Link>
					</NavItem>
					<NavItem className={classnames({"active": this.props.activeItem === "customers"})}>
						<Link to="/app/customers" className="nav-link" onClick={() => this.onNavItemClick("customers")}>
							<i className="fa fa-group mr-2"/>Customers
						</Link>
					</NavItem>
					<NavItem className={classnames({"active": this.props.activeItem === "staff"})}>
						<Link to="/app/staff" className="nav-link" onClick={() => this.onNavItemClick("staff")}>
							<i className="fa fa-user mr-2"/>Staff
						</Link>
					</NavItem>
					<NavItem className={classnames({"active": this.props.activeItem === "orders"})}>
						<Link to="/app/orders" className="nav-link" onClick={() => this.onNavItemClick("orders")}>
							<i className="fa fa-list mr-2"/>Orders
						</Link>
					</NavItem>
				</Nav>
				<Nav className="ml-auto" navbar>
					<UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              <i className="fa fa-user-circle" />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                { authUser && (authUser.firstName + ' ' + authUser.lastName ) }
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <a herf="#" onClick={ this.onLogout } className="btn-logout">
									Logout
								</a>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
				</Nav>
			</React.Fragment>
		);

		const userLoggedOutNavLinks = (
			<Nav className="ml-auto" navbar>
				<NavItem className={classnames({"active": this.props.activeItem === "login"})}>
					<Link to="/login" className="nav-link" onClick={() => this.onNavItemClick("login")}>
						<i className="fa fa-user mr-2"/>Login
					</Link>
				</NavItem>
			</Nav>
		);

		const navLinks = authUser != null ? userLoggedInNavLinks : userLoggedOutNavLinks;
	
		return (
			<div>
				<Navbar className="topnav" dark expand="md">
					<Container>
						<Link to="/app/home" className="navbar-brand" onClick={() => this.onNavItemClick("home")}>
							<img src={PearLogo} alt="" />
							Pear
						</Link>
						<NavbarToggler onClick={this.props.toggleTopnavDropdownMenu} />
						<Collapse isOpen={this.props.isOpen} navbar>
							{ navLinks }
						</Collapse>
					</Container>
				</Navbar>
			</div>
		);
	}
};

const mapStateToProps = ({ topnav, auth }) => {
	const { isOpen, activeItem } = topnav;
	const { user: authUser } = auth;
	return { isOpen, activeItem, authUser };
};

const mapActionsToProps = dispatch => ({
	toggleTopnavDropdownMenu: () => dispatch(toggleTopnavDropdownMenu()),
	clickTopnavMenuLink: (itemName) => dispatch(clickTopnavMenuLink(itemName)),
	logoutUser: () => dispatch(logoutUser())
});

export default connect(
	mapStateToProps,
	mapActionsToProps
)(Topnav);