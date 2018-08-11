import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import CatsPage from 'components/cat/CatsPage';

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/cats' component={CatsPage} />
  </Switch>
);

export default Main;
