import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const style = {
  a: {
    textDecoration: 'none',
    color: 'black',
  },
};

function LeagueInfo(props) {
  return (
        <div className="container-fluid">
            <div className="row">
                <Link className="text-dark" key={ props.data.id } to={`${props.url}/${props.data.id}`} style={style.a}>
                    {`${props.data.name} (${props.data.area.name})`}
                </Link>
            </div>
        </div>
  );
}

LeagueInfo.propTypes = {
  data: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
};

export default LeagueInfo;
