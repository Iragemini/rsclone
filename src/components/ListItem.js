import React from 'react';
import PropTypes from 'prop-types';
import TeamInfo from './TeamInfo';
import LeagueInfo from './LeagueInfo';

function ListItem(props) {
  return (
      <li className="list-group-item list-group-item-action list-group-item-light" >
        {
          <div>
            {
              props.type === 2
                ? <LeagueInfo data={props.item} url={props.url}/>
                : <TeamInfo data={props.item} url={props.url}/>
            }
          </div>
        }
      </li>
  );
}

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
  type: PropTypes.number.isRequired,
};

export default ListItem;
