import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import API from '../modules/api';

function renderItem( menuItem ) {
  return (
        <API type={ 
            [ menuItem.id, menuItem.type, menuItem.name ] 
        }/>
  );
}

const styles = {
    NavLink: {
        textDecoration: 'none'
    },
}
function NavMenu({ menu }) {
  return (
        <div>
            <nav>
                <ul className="app__menu">
                    {
                        menu.map(( menuItem ) => (
                                <li key={ menuItem.id }>
                                    <NavLink key={ menuItem.id } to={`${ menuItem.path }`} style={ styles.NavLink }>
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
                        path={ menuItem.path }
                        render={ () => renderItem( menuItem ) }
                        exact
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
