import _ from 'lodash';
import React, { useState, useEffect } from 'react';
import config from '../../config/config';
import MatchesTable from './MatchesTable';

function MainPage() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [list, setList] = useState([]);
  const [fullList, setfullList] = useState([]);
  const [sort, setSort] = useState('asc');
  const [sortField, setSortField] = useState('');
  const accessToken = config.APIToken;
  const baseUrl = `${config.baseUrl}matches`;
  const date = new Date();

  useEffect(() => {
    const controller = new AbortController();
    console.log('main url', baseUrl);

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
            setfullList(result.matches);
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
  }, [accessToken, baseUrl]);

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

  return (
    <div className="row">
      <div className="jumbotron text-center">
        <h1>Список матчей на {date.toLocaleDateString()}</h1>
      </div>
      <div className="container">
        <MatchesTable matches={ list } onSort={ onSort } sort={ sort } sortField = { sortField }/>
      </div>
    </div>
  );
}

export default MainPage;
