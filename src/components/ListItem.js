import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ListItem(props) {
  return (
      <li className="list-group-item list-group-item-action list-group-item-light" >
        {
          props.type === 2
            ? <Link className="text-dark" key={ props.item.id } to={`/leagues/${props.item.id}`}>
              { props.item.name }
            </Link>
            : <Link className="text-dark" key={ props.item.id } to={`/teams/${props.item.id}`}>
              { props.item.name }
            </Link>
        }
      </li>
  );
}

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  type: PropTypes.number.isRequired,
};

export default ListItem;
