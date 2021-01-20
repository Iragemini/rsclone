import React from 'react';
import PropTypes from 'prop-types';
import Calendar from './Calendar';

function LeagueTable(props) {
  const { info } = props;
  const { area } = info;
  const { currentSeason } = info;
  const startYear = (new Date(currentSeason.startDate)).getFullYear();
  const endYear = (new Date(currentSeason.endDate)).getFullYear();
  const period = (startYear === endYear) ? startYear : `${startYear}/${endYear}`;
  const { id } = info;

  return (
        <div className="info__wrapper">
            <div>
                <div>
                    <img className="flag" src={ area.ensignUrl } alt={ area.name }/>
                    <h2>
                        { area.name }
                    </h2>
                </div>
                <div className="area__info">
                    <h2>
                        { info.name }
                    </h2>
                    <h3>
                        { period }
                    </h3>
                </div>
            </div>
            <Calendar
                info={
                    {
                      id,
                      leagueName: info.name,
                      areaName: area.name,
                    }
                 }
            />
        </div>
  );
}

LeagueTable.propTypes = {
  info: PropTypes.number.isRequired,
};

export default LeagueTable;
