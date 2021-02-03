import _ from 'lodash';
import React, { useState, useEffect, useCallback } from 'react';
import config from '../../config/config';
import MatchesTable from './MatchesTable';

function MainPage() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [list, setList] = useState([]);
  const [fullList, setfullList] = useState([]);
  const [sort, setSort] = useState('asc');
  const [sortField, setSortField] = useState('');
  let currentDate = new Date();
  currentDate = currentDate.toISOString().substring(0, 10);
  const [newDate, setNewDate] = useState(currentDate);
  const [baseUrl, setBaseUrl] = useState(`${config.baseUrl}matches?dateFrom=${currentDate}&dateTo=${currentDate}`);
  const accessToken = config.APIToken;

  const fetchData = useCallback(async () => {
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
          setfullList(result.matches);
        },
        (error) => {
          setErrorMessage(error);
        },
      ).catch((e) => {
        setErrorMessage(`Ошибка загрузки: ${e.message}`);
      });
  }, [baseUrl, accessToken]);

  useEffect(() => {
    const controller = new AbortController();
    fetchData();
    return () => {
      controller.abort();
    };
  }, [fetchData]);

  if (errorMessage) {
    return <div>Ошибка: {errorMessage.message}</div>;
  } if (!isLoaded) {
    return <div>Загрузка...</div>;
  }

  const onSort = (field) => {
    setSortField(field);
    setSort(sort === 'asc' ? 'desc' : 'asc');
    const orderedData = _.orderBy(fullList, field, sort);
    setList(orderedData);
  };

  const showDate = (dir) => {
    let currDate = new Date(newDate);

    if (dir === 'next') {
      currDate.setDate(currDate.getDate() + 1);
    } else if (dir === 'prev') {
      currDate.setDate(currDate.getDate() - 1);
    }

    currDate = currDate.toISOString().substring(0, 10);

    setNewDate(currDate);
    setBaseUrl(`${config.baseUrl}matches?dateFrom=${currDate}&dateTo=${currDate}`);
  };

  return (
    <div className="row">
      <div className="jumbotron calendar-nav">
        <button className="calendar-nav__arr" onClick={() => showDate('prev')}>&laquo;</button>
        <h1>Список матчей на {newDate}</h1>
        <button className="calendar-nav__arr" onClick={() => showDate('next')}>&raquo;</button>
      </div>
      <div className="container">
        <MatchesTable matches={ list } onSort={ onSort } sort={ sort } sortField = { sortField }/>
      </div>
    </div>
  );
}

export default MainPage;
