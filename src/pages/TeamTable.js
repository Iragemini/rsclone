import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

function TeamTable() {
  const { id } = useParams();
  let history = useHistory();
  return (
      <div>
        {id}
        <button type="button" onClick={() => history.goBack()}>
          Go back
        </button>
      </div>
  );
}

export default TeamTable;
