import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PrivatedRoute from './utils/privatedRoute';

import { HelloWorld } from './components';

import Home from './pages/home';
import HomeWithContent from './pages/home2';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home2" component={HomeWithContent} />
        <PrivatedRoute path="/**" component={HelloWorld} redirectTo="/" />
      </Switch>
    </BrowserRouter>
  );
}
