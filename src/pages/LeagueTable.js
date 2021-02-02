import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

function LeagueTable() {
  const { id } = useParams();
  const history = useHistory();
  return (
      <div>
        {id}
        <button type="button" onClick={() => history.goBack()}>
          Go back
        </button>
      </div>
  );
}

export default LeagueTable;
