import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

function List(props) {
  return (
    <div>
      <ul className="list-group">
          {
              props.list.map((data) => <ListItem
                item={ data }
                type={ props.type }
                key={ data.id }
              />)
          }
      </ul>
    </div>
  );
}

List.propTypes = {
  list: PropTypes.array.isRequired,
  type: PropTypes.number.isRequired,
};

export default List;
