import React, { Suspense, useEffect } from "react";
import { connect } from "react-redux";
import { setCurrentUserStart } from "./redux/actions";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from "react-router-dom";
import AuthRoute from "./helpers/authRoute";
import AppLayout from "./layout/AppLayout";

const ViewMain = React.lazy(() => import("./views"));
const ViewCustomers = React.lazy(() => import("./views/customers"));
const ViewHome = React.lazy(() => import("./views/home"));
const ViewOrders = React.lazy(() => import("./views/orders"));
const ViewProducts = React.lazy(() => import("./views/products"));
const ViewStaff = React.lazy(() => import("./views/staff"))

const App = props => {

  const { authUser, setCurrentUserStart } = props;

  useEffect(() => {
    setCurrentUserStart();
  }, [setCurrentUserStart]);

	return (
    <React.Fragment>
      <Suspense fallback={<div className="loading" />}>
        <Router>
          <AppLayout>
            <Switch>
              <Route
                path="/"
                exact
                render={props => (<ViewHome {...props} />)}
              />
              <Route
                path="/home"
                exact
                render={props => (<ViewHome {...props} />)}
              />
              <Route
                path="/products"
                exact
                render={props => (<ViewProducts {...props} />)}
              />
              <Route
                path="/customers"
                exact
                render={props => (<ViewCustomers {...props} />)}
              />
              <Route
                path="/staff"
                exact
                render={props => (<ViewStaff {...props} />)}
              />
              <Route
                path="/orders"
                exact
                render={props => (<ViewOrders {...props} />)}
              />
              <Redirect to="/error" />
            </Switch>
          </AppLayout>
        </Router>
      </Suspense>
    </React.Fragment>
	);
}

const mapStateToProps = ({ auth }) => {
  const { user: authUser } = auth;
  return { authUser };
};

const mapActionsToProps = dispatch => ({
  setCurrentUserStart: () => dispatch(setCurrentUserStart())
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
