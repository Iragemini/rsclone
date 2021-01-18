import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Leagues from './Leagues';
import Teams from './Teams';

const styles = {
  NavLink: {
    textDecoration: 'none',
  },
};
function NavMenu({ menu }) {
  return (
        <div>
            <nav>
                <ul className="app__menu">
                    {
                        menu.map((menuItem) => (
                                <li key={ menuItem.id }>
                                    <NavLink key={ menuItem.id } to={`${menuItem.path}`} style={ styles.NavLink }>
                                    {
                                        menuItem.name
                                    }
                                    </NavLink>
                                </li>
                        ))
                    }
                </ul>
            </nav>
            <Route path="/leagues" component={Leagues} exact />
            <Route path="/teams" component={Teams} exact />
        </div>
  );
}

NavMenu.propTypes = {
  menu: PropTypes.array.isRequired,
};

export default NavMenu;
