import React, { Component } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import config from '../../config/config';

function LeagueTable() {
  const { id } = useParams();
  const history = useHistory();
  return (
      <div className="calendar-wrap">
        {id}
        <button type="button" onClick={() => history.goBack()}>
          Go back
        </button>
      </div>
  );
}

export default LeagueTable;
