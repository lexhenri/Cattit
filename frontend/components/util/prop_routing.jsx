import { Route } from 'react-router-dom';
import React from 'react';

const RouteWithProps = ({ component: Component, props, ...extraProps }) => (
  <Route
    {...extraProps}
    render={routeProps => <Component {...props} {...routeProps} />}
  />
);

export default RouteWithProps;