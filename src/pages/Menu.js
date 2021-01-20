import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import MenuRoutes from '../routes/MenuRoutes';
function NavMenu({ menu }) {
  return (
        <div  className="container-fluid">
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {
                        menu.map((menuItem) => (
                                <li className="nav-item" key={ menuItem.id }>
                                    <NavLink key={ menuItem.id } to={`${menuItem.path}`} className="nav-link">
                                    {
                                        menuItem.name
                                    }
                                    </NavLink>
                                </li>
                        ))
                    }
                </ul>
              </div>
            </nav>
            <MenuRoutes/>
        </div>
  );
}

NavMenu.propTypes = {
  menu: PropTypes.array.isRequired,
};

export default NavMenu;
