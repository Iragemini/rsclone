import React, { useState, useEffect } from 'react';
import config from '../../config/config';
import List from '../components/List';
import Search from '../components/Search';

function Leagues() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [list, setList] = useState([]);
  const [fullList, setfullList] = useState([]);
  const accessToken = config.APIToken;
  const baseUrl = `${config.baseUrl}competitions`;

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
            setList(result.competitions);
            setfullList(result.competitions);
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
    <div>
      <h1>Leagues</h1>
      <Search onValueChange={filterList} />
      <List list={list} type={ 2 } />
    </div>
  );
}

export default Leagues;
