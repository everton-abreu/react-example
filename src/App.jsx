import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PrivatedRoute from './utils/privatedRoute';

import { HelloWorld } from './components';

import Home from './pages/home';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivatedRoute path="/**" component={HelloWorld} redirectTo="/" />
      </Switch>
    </BrowserRouter>
  );
}
