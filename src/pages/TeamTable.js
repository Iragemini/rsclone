import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import config from '../../config/config';

function TeamTable() {
  const { id } = useParams();
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [list, setList] = useState([]);
  const history = useHistory();
  const accessToken = config.APIToken;
  let currentDate = new Date();
  currentDate = currentDate.toISOString().substring(0, 10);
  const [newDate, setNewDate] = useState(currentDate);
  const [baseUrl, setBaseUrl] = useState(`${config.baseUrl}teams/${id}/matches?dateFrom=${currentDate}&dateTo=${currentDate}`);
  // const baseUrl = `${config.baseUrl}teams/${id}/matches/`;

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
  }, [accessToken, baseUrl]);

  if (errorMessage) {
    return <div>Ошибка: {errorMessage.message}</div>;
  } if (!isLoaded) {
    return <div>Загрузка...</div>;
  }

  return (
      <div className="calendar-wrap">
        {console.log("list", list)}
        <button type="button" onClick={() => history.goBack()}>
          {id} Go back
        </button>
        
      </div>
  );
}

export default TeamTable;
