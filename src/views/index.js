import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

const Customers = React.lazy(() => import("./customers"));
const Home = React.lazy(() => import("./home"));
const Orders = React.lazy(() => import("./orders"));
const Products = React.lazy(() => import("./products"));
const Staff = React.lazy(() => import("./staff"));
const Categories = React.lazy(() => import("./categories"));
const Suppliers = React.lazy(() => import("./suppliers"))

const Main = ({match}) => {
  return (
  	<Suspense fallback={<div className="loading" />}>
  		<Switch>
  			<Redirect
  				exact
  				from={`${match.url}/`}
  				to={`${match.url}/home`}
  			/>
  			<Route
  				path={`${match.url}/home`}
  				render={(props) => <Home {...props} />}
  			/>
        <Route
          path={`${match.url}/products`}
          render={(props) => <Products {...props} />}
        />
  			<Route
  				path={`${match.url}/customers`}
  				render={(props) => <Customers {...props} />}
  			/>
  			<Route
  				path={`${match.url}/orders`}
  				render={(props) => <Orders {...props} />}
  			/>
  			<Route
  				path={`${match.url}/staff`}
  				render={(props) => <Staff {...props} />}
  			/>
        <Route
          path={`${match.url}/categories`}
          render={(props) => <Categories {...props} />}
        />
        <Route
          path={`${match.url}/suppliers`}
          render={(props) => <Suppliers {...props} />}
        />
  		</Switch>
  	</Suspense>
  );
}

export default Main;