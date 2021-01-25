import React from 'react';
import { useRouteMatch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import TeamTable from '../pages/TeamTable';
import LeagueTable from '../pages/LeagueTable';

function List(props) {
  const { path, url } = useRouteMatch();

  return (
    <div>
      <ul className="list-group">
          {
              props.list.map((data) => <ListItem
                url={url}
                item={ data }
                type={props.type}
                key={ data.id }
              />)
          }
      </ul>
      <Route path={`${path}/:id`}>
          {
            props.type === 2
              ? <LeagueTable />
              : <TeamTable />
          }
      </Route>
    </div>
  );
}

List.propTypes = {
  list: PropTypes.array.isRequired,
  type: PropTypes.number.isRequired,
};

export default List;
