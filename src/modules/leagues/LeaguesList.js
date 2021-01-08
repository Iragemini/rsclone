import React from 'react';
import PropTypes from 'prop-types';
import LeagueItem from './LeaguesItem';

function LeaguesList(props) {
  return (
        <ul>
            {
                props.leagues.map((data) => <LeagueItem league={data.name} key={data.id} />)
            }
        </ul>
  );
}

LeaguesList.propTypes = {
  leagues: PropTypes.array.isRequired,
};

export default LeaguesList;
