import * as React from 'react';
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './dashboard';

// Router.
const Routes = () => (
  <Switch>
    <Route
      exact
      path="/dashboard"
      component={Dashboard}
    />
  </Switch>
);

export default withRouter(Routes);
