import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Teams from '../pages/Teams';
import TeamTable from '../pages/TeamTable';

const TeamsRoutes = () => (
    <Switch>
      <Route exact path='/teams' component={Teams}/>
      <Route exact path='/teams/:id' component={TeamTable}/>
    </Switch>
);

export default TeamsRoutes;
