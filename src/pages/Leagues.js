import React, { useState, useEffect } from 'react';
import config from '../../config/config';
import List from '../components/List';
import Search from '../components/Search';
import SelectArea from '../components/SelectArea';

function Leagues() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [list, setList] = useState([]);
  const [fullList, setfullList] = useState([]);
  const [areas, setAreas] = useState([]);
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
            setAreas(new Set(result.competitions.map((item) => item.area.name)));
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
    const selArea = document.getElementById('selectArea');
    selArea.selectedIndex = 0;
    setList(fullList.filter((item) => item.name.toLowerCase().includes(value.toLowerCase())));
  };

  function findArea(value) {
    setList(fullList.filter((item) => item.area.name.toLowerCase().includes(value.toLowerCase())));
  }

  return (
    <div className="row">
      <div className="jumbotron text-center">
        <h1>Список лиг</h1>
      </div>
      <Search onValueChange={filterList} />
      <SelectArea areas={Array.from(areas)} findArea={findArea}/>
      <List list={list} type={ 2 } />
    </div>
  );
}

export default Leagues;
