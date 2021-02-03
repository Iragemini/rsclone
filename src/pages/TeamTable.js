import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import config from '../../config/config';
import Calendar from '../components/Calendar';

function getDateFrom() {
  return localStorage.getItem('dateFrom' || '');
}

function getDateTo() {
  return localStorage.getItem('dateTo' || '');
}

function TeamTable() {
  const { id } = useParams();
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [list, setList] = useState([]);
  const history = useHistory();
  const accessToken = config.APIToken;
  const [dateFrom, setDateFrom] = useState(localStorage.getItem('dateFrom')
    ? new Date(localStorage.getItem('dateFrom')).toISOString().substring(0, 10)
    : undefined);
  const [dateTo, setDateTo] = useState(localStorage.getItem('dateTo')
    ? new Date(localStorage.getItem('dateTo')).toISOString().substring(0, 10)
    : undefined);
  let filter = '';
  if (dateFrom && dateTo) {
    filter = `?dateFrom=${dateFrom}&dateTo=${dateTo}`;
  }
  const [baseUrl, setBaseUrl] = useState(`${config.baseUrl}teams/${id}/matches${filter}`);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      await fetch(baseUrl,
        {
          type: 'GET',
          headers: {
            'X-Auth-Token': accessToken,
          },
          dataType: 'json',
        })
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setList(result.matches);
          },
          (error) => {
            setErrorMessage(error);
          },
        ).catch((e) => {
          setErrorMessage(`Ошибка загрузки: ${e.message}`);
        });
    }
    fetchData();
    return () => {
      controller.abort();
    };
  }, [accessToken, baseUrl, id]);

  if (errorMessage) {
    return <div>Ошибка: {errorMessage.message}</div>;
  } if (!isLoaded) {
    return <div>Загрузка...</div>;
  }

  function showResults() {
    const fromDate = new Date(getDateFrom()).toISOString().substring(0, 10);
    const toDate = new Date(getDateTo()).toISOString().substring(0, 10);
    setDateFrom(fromDate);
    setDateTo(toDate);
    if ((!fromDate || fromDate === '') && (!toDate || toDate === '')) {
      setErrorMessage('Date undefined');
      return;
    }
    if (new Date(getDateFrom()).getTime() > new Date(getDateTo()).getTime()) {
      setErrorMessage('Date to is less than date from');
      return;
    }
    setBaseUrl(`${config.baseUrl}teams/${id}/matches?dateFrom=${fromDate}&dateTo=${toDate}`);
  }

  return (
    <div className="calendar-wrap">
      <div className="jumbotron calendar-nav">
        <button className="btn btn-secondary" onClick={() => history.goBack()}>
          Go back
        </button>
        <Calendar/>
        <button className="btn btn-secondary" onClick={() => showResults()}>Show</button>
      </div><br />
      <div className="lists-wrapper lists-wrapper--short">
        <table className="table table-hover table-bordered">
          <thead>
              <tr className="table-dark">
                  <th scope="col" >
                      Date
                  </th>
                  <th scope="col" >
                      Home team — Away team
                  </th>
                  <th scope="col">
                      Score
                  </th>
              </tr>
          </thead>
          <tbody>
              {
                  list.map((match) => (
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
                                  <p>{new Date(match.utcDate).toLocaleDateString()}</p>
                                  <p>{new Date(match.utcDate).toLocaleTimeString('en-US', { timeZone: 'UTC', timeZoneName: 'short' })}</p>
                              </div>
                          </td>
                          <td>
                              {
                                  `${match.homeTeam.name} — ${match.awayTeam.name}`
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
                      </tr>
                  ))
              }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TeamTable;
