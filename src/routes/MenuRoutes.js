import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Leagues from '../pages/Leagues';
import Teams from '../pages/Teams';
import MainPage from '../pages/Main';

const MenuRoutes = () => (
    <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/leagues" component={Leagues} />
        <Route path="/teams" component={Teams} />
    </Switch>
);

export default MenuRoutes;
