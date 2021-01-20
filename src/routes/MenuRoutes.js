import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LeaguesRoutes from './LeagueRoutes';
import TeamsRoutes from './TeamsRoutes';
import MainPage from '../pages/Main';

const MenuRoutes = () => (
    <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/leagues" component={LeaguesRoutes} exact />
        <Route path="/teams" component={TeamsRoutes} exact />
    </Switch>
);

export default MenuRoutes;
