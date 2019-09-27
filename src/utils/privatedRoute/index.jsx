import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import Auth from '../auth';

const PrivatedRoute = ({ path, component: Component, redirectTo }) => (
  <Route
    exact
    path={path}
    render={() => {
      const loggedin = Auth.isAuthenticated();
      // Variável criada somente para que o eslint permita usar function block
      return loggedin ? <Component /> : <Redirect to={redirectTo} />;
    }}
  />
);

PrivatedRoute.propTypes = {
  path: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  redirectTo: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  component: PropTypes.elementType.isRequired,
};

export default PrivatedRoute;
