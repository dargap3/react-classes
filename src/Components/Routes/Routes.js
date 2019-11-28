import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../Views/Home';
import Messages from '../../Views/Messages';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/messages" component={Messages} />
  </Switch>
);

export default Routes;