import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Leagues from '../pages/Leagues';
import Teams from '../pages/Teams';
import MainPage from '../pages/Main';

const currentPath = window.location.pathname;

const MenuRoutes = () => (
    <Switch>
        <Route path={`${currentPath}/`} component={MainPage} exact />
        <Route path="/leagues" component={Leagues} exact />
        <Route path="/teams" component={Teams} exact />
    </Switch>
);

export default MenuRoutes;
