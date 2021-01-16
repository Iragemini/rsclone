import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

function LeaguesList(props) {
  return (
        <ul>
            {
                props.list.map((data) => <ListItem item={data.name} key={data.id} />)
            }
        </ul>
  );
}

LeaguesList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default LeaguesList;
