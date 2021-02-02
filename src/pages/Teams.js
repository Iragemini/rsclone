import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import config from '../../config/config';
import List from '../components/List';
import Search from '../components/Search';

function Teams() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [list, setList] = useState([]);
  const [fullList, setfullList] = useState([]);
  const accessToken = config.APIToken;
  const baseUrl = `${config.baseUrl}teams`;

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
            setList(result.teams);
            setfullList(result.teams);
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

  const filterList = (value) => {
    setList(fullList.filter((item) => item.name.toLowerCase().includes(value.toLowerCase())));
  };

  return (
    <div className="row">
      <div className="jumbotron text-center">
        <h1>Список команд</h1>
        <Search onValueChange={filterList} />
      </div>
      <List list={list} type={ 3 } />
    </div>
  );
}

export default Teams;
