import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import API from '../modules/api';

function renderItem(menuItem) {
  return (
        <API type={ [menuItem.type, menuItem.name] }/>
  );
}

function NavMenu({ menu }) {
  return (
        <div>
            <nav>
                <ul className="app__menu">
                    {
                        menu.map((menuItem) => (
                                <li key={ menuItem.id }>
                                    <NavLink key={ menuItem.id } to={`${menuItem.path}`}>
                                    {
                                        menuItem.name
                                    }
                                    </NavLink>
                                </li>
                        ))
                    }
                </ul>
            </nav>
            {
                menu.map((menuItem) => (
                    <Route
                        key={ menuItem.id }
                        path={menuItem.path}
                        exact
                        render={ () => renderItem(menuItem) }
                    />
                ))
            }
        </div>
  );
}

NavMenu.propTypes = {
  menu: PropTypes.array.isRequired,
};

export default NavMenu;
