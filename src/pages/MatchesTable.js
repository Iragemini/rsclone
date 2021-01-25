import React from 'react';
import PropTypes from 'prop-types';

function MatchesTable({
  matches, onSort, sort, sortField,
}) {
  if (!Object.values(matches).length) {
    return (
            <div>Ошибка получения данных</div>
    );
  }
  let date = null;
  return (
        <div className="table-responsive-md">
            <table className="table table-hover table-bordered">
                <caption>Количество матчей: {matches.length}</caption>
                <thead>
                    <tr className="table-dark">
                        <th scope="col" onClick={onSort.bind(null, 'competition.name')}>
                            League {sortField === 'competition.name' ? <small>{sort === 'asc' ? '↑' : '↓'}</small> : null}
                        </th>
                        <th scope="col" onClick={onSort.bind(null, 'season.startDate')}>
                            Season {sortField === 'season.startDate' ? <small>{sort === 'asc' ? '↑' : '↓'}</small> : null}
                        </th>
                        <th scope="col" onClick={onSort.bind(null, 'group')}>
                            Group {sortField === 'group' ? <small>{sort === 'asc' ? '↑' : '↓'}</small> : null}
                        </th>
                        <th scope="col" onClick={onSort.bind(null, 'homeTeam.name')}>
                            Home team — Away team {sortField === 'homeTeam.name' ? <small>{sort === 'asc' ? '↑' : '↓'}</small> : null}
                        </th>

                        <th scope="col" onClick={onSort.bind(null, 'status')}>
                            Status {sortField === 'status' ? <small>{sort === 'asc' ? '↑' : '↓'}</small> : null}
                        </th>
                        <th scope="col">
                            Score
                        </th>
                        <th scope="col">
                            Main referees
                        </th>
                        <th scope="col" onClick={onSort.bind(null, 'lastUpdated')}>
                            Last updated {sortField === 'lastUpdated' ? <small>{sort === 'asc' ? '↑' : '↓'}</small> : null}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        matches.map((match) => (
                            <tr key={match.id}
                                className={
                                    match.status.toUpperCase() === 'FINISHED'
                                      ? 'table-secondary'
                                      : match.status.toUpperCase() === 'IN_PLAY'
                                        ? 'table-success'
                                        : match.status.toUpperCase() === 'PAUSED'
                                          ? 'table-danger'
                                          : 'table-info'
                                }
                            >
                                <td>
                                    <div>
                                        <p>{match.competition.name}</p>
                                        <p>{`(${match.competition.area.name})`}</p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p>{`${match.season.startDate} / ${match.season.endDate}`}</p>
                                        <p>{`Current match day: ${match.season.currentMatchday}`}</p>
                                        <p>{`Winner: ${match.season.winner
                                          ? match.season.winner
                                          : '—'}`}
                                        </p>
                                    </div>
                                </td>
                                <td>
                                    {
                                        match.group
                                    }
                                </td>
                                <td>
                                    {
                                        `${match.homeTeam.name} — ${match.awayTeam.name}`
                                    }
                                </td>
                                <td>
                                    {
                                        match.status
                                    }
                                </td>
                                <td>
                                {
                                    match.status.toUpperCase() === 'FINISHED'
                                      ? <div>
                                            <p>
                                                {
                                                    match.score.winner.toUpperCase() === 'HOME_TEAM'
                                                      ? `Winner: ${match.homeTeam.name}`
                                                      : match.score.winner.toUpperCase() === 'AWAY_TEAM'
                                                        ? `Winner: ${match.awayTeam.name}`
                                                        : `Winner: ${match.score.winner}`
                                                }
                                            </p>
                                            <p>
                                                {
                                                    `Duration: ${match.score.duration}`
                                                }
                                            </p>
                                        </div>
                                      : null
                                }
                                </td>
                                <td>
                                    {
                                        match.referees.map((referee) => (
                                            <p key={referee.id}>
                                                {
                                                    referee.role.toUpperCase() === 'MAIN_REFEREE'
                                                      ? `${referee.name} (${referee.nationality})`
                                                      : null
                                                }
                                            </p>
                                        ))
                                    }
                                </td>
                                <td>
                                    {
                                        date = new Date(match.lastUpdated).toLocaleDateString()
                                    }
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
  );
}

MatchesTable.propTypes = {
  matches: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
  sortField: PropTypes.string.isRequired,
};

export default MatchesTable;
