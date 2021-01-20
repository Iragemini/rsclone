import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Leagues from '../pages/Leagues';
import LeagueTable from '../pages/LeagueTable';

const LeaguesRoutes = () => (
    <Switch>
      <Route exact path='/leagues' component={Leagues}/>
      <Route path='/leagues/:number' component={LeagueTable}/>
    </Switch>
);

export default LeaguesRoutes;
