import React from 'react';
import PropTypes from 'prop-types';

function LeagueItem({ item }) {
  return (
        <li>{ item }</li>
  );
}

LeagueItem.propTypes = {
  item: PropTypes.string.isRequired,
};

export default LeagueItem;
