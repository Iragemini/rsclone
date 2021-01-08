import React from 'react';
import PropTypes from 'prop-types';

function LeagueItem({ league }) {
  return (
        <li>{ league }</li>
  );
}

LeagueItem.propTypes = {
  league: PropTypes.string.isRequired,
};

export default LeagueItem;
