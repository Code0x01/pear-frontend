import React from "react";
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
	clickTopnavMenuLink
} from "../../redux/actions";
import { Link } from "react-router-dom";
import classnames from "classnames";
import "./style.css";
import PearLogo from "../../assets/images/pear-logo.png";

const Topnav = props => {
	const {
		clickTopnavMenuLink,
		toggleTopnavDropdownMenu,
		isOpen,
		activeItem
	} = props;

	return (
		<div>
			<Navbar className="topnav" dark expand="md">
				<Container>
					<Link to="/" className="navbar-brand" onClick={() => clickTopnavMenuLink("home")}>
						<img src={PearLogo} alt="" />
						Pear
					</Link>
					<NavbarToggler onClick={toggleTopnavDropdownMenu} />
					<Collapse isOpen={isOpen} navbar>
						<Nav className="mr-auto" navbar>
							<NavItem
								className={classnames(
									{
										"active": activeItem === "home"
									}
								)}
							>
								<Link to="/home" className="nav-link" onClick={() => clickTopnavMenuLink("home")}>
									<i className="fa fa-home mr-2"/>Home
								</Link>
							</NavItem>
							<NavItem
								className={classnames(
									{
										"active": activeItem === "products"
									}
								)}
							>
								<Link to="/products" className="nav-link" onClick={() => clickTopnavMenuLink("products")}>
									<i className="fa fa-cubes mr-2"/>Products
								</Link>
							</NavItem>
							<NavItem
								className={classnames(
									{
										"active": activeItem === "customers"
									}
								)}
							>
								<Link to="/customers" className="nav-link" onClick={() => clickTopnavMenuLink("customers")}>
									<i className="fa fa-group mr-2"/>Customers
								</Link>
							</NavItem>
							<NavItem
								className={classnames(
									{
										"active": activeItem === "staff"
									}
								)}
							>
								<Link to="/staff" className="nav-link" onClick={() => clickTopnavMenuLink("staff")}>
									<i className="fa fa-user mr-2"/>Staff
								</Link>
							</NavItem>
							<NavItem
								className={classnames(
									{
										"active": activeItem === "orders"
									}
								)}
							>
								<Link to="/orders" className="nav-link" onClick={() => clickTopnavMenuLink("orders")}>
									<i className="fa fa-list mr-2"/>Orders
								</Link>
							</NavItem>
						</Nav>
						<Nav className="ml-auto" navbar>
							<NavItem
								className={classnames(
									{
										"active": activeItem === "login"
									}
								)}
							>
								<Link to="/login" className="nav-link" onClick={() => clickTopnavMenuLink("login")}>
									<i className="fa fa-user mr-2"/>Login
								</Link>
							</NavItem>
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
		</div>
	);

};

const mapStateToProps = ({ topnav}) => {
	const { isOpen, activeItem } = topnav;
	return { isOpen, activeItem };
};

const mapActionsToProps = dispatch => ({
	toggleTopnavDropdownMenu: () => dispatch(toggleTopnavDropdownMenu()),
	clickTopnavMenuLink: (itemName) => dispatch(clickTopnavMenuLink(itemName))
});

export default connect(
	mapStateToProps,
	mapActionsToProps
)(Topnav);