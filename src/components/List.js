import React from 'react';
import { useRouteMatch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import TeamTable from '../pages/TeamTable';
import LeagueTable from '../pages/LeagueTable';

function List(props) {
  const { path, url } = useRouteMatch();

  return (
    <div className="row">
      <div className="col-lg">
        <div className="lists-wrapper">
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
        </div>
      </div>
      <div className="col-lg col-lg-auto no-padding max50">
        <Route path={`${path}/:id`}>
          {
            props.type === 2
              ? <LeagueTable data={props.list}/>
              : <TeamTable />
          }
        </Route>
      </div>
    </div>
  );
}

List.propTypes = {
  list: PropTypes.array.isRequired,
  type: PropTypes.number.isRequired,
};

export default List;
