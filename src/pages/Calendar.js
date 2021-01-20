import React from 'react';
import PropTypes from 'prop-types';

function Calendar(props) {
  const { info } = props;

  return (
    <div className="calendar">
      <div>
          <p>Календарь</p>
      </div>
      <table className="league__table">
          <thead>
              <tr>
                  <th>
                      {
                          `${info.areaName}: ${info.leagueName}`
                      }
                  </th>
              </tr>
          </thead>
          <tbody>
              <tr>

              </tr>
          </tbody>
      </table>
    </div>
  );
}

Calendar.propTypes = {
  info: PropTypes.object.isRequired,
};

export default Calendar;
