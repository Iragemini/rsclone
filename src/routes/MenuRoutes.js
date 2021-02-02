import React from 'react';
import { Route } from 'react-router-dom';
import Leagues from '../pages/Leagues';
import Teams from '../pages/Teams';
import MainPage from '../pages/Main';

const MenuRoutes = () => (
    <div>
        <Route path={'/'} component={MainPage} exact />
        <Route path={'/leagues'} component={Leagues} />
        <Route path={'/teams'} component={Teams} />
    </div>
);

export default MenuRoutes;
