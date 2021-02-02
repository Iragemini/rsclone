import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function Header({ menu }) {
  return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="collapsibleNavbar">
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
        </div>
  );
}

Header.propTypes = {
  menu: PropTypes.array.isRequired,
};

export default Header;
