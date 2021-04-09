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
const ViewLogin = React.lazy(() => import("./views/login"));

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
              <AuthRoute
                path="/app"
                authUser={authUser}
                component={ViewMain}
              />
              <Route
                path="/login"
                exact
                render={props => (<ViewLogin {...props} />)}
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
