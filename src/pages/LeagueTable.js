import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function LeagueTable({ data }) {
  const { id } = useParams();

  const list = data.filter((item) => item.id === +id);

  return (
    <div className="calendar-wrap">
      <table className="table table-hover table-bordered">
        <thead>
            <tr className="table-dark">
                <th scope="col" >
                    League
                </th>
                <th scope="col" >
                    Current season
                </th>
                <th scope="col">
                    Area
                </th>
            </tr>
        </thead>
        <tbody>
            {
              list.map((item) => (
                  <tr key={item.id}>
                      <td>
                          <div>
                              <p>{ item.name }</p>
                          </div>
                      </td>
                      <td>
                        <div>
                            <p>{`${item.currentSeason.startDate} / ${item.currentSeason.endDate}`}</p>
                            <p>
                              {
                                item.currentSeason.currentMatchday
                                  ? `Current match day: ${item.currentSeason.currentMatchday}`
                                  : ''
                              }
                            </p>
                            <p>{`Winner: ${item.currentSeason.winner
                              ? item.currentSeason.winner
                              : '—'}`}
                            </p>
                        </div>
                      </td>
                      <td>
                        <div>
                          <p>
                            {
                              item.area.name
                            }
                          </p>
                        </div>
                      </td>
                  </tr>
              ))
            }
        </tbody>
      </table>
    </div>
  );
}

LeagueTable.propTypes = {
  data: PropTypes.object.isRequired,
};

export default LeagueTable;
