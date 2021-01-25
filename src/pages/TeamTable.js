import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import config from '../../config/config';

function TeamTable() {
  const { id } = useParams();
  const accessToken = config.APIToken;
  const baseUrl = `${config.baseUrl}teams/${id}/`;

  console.log(id);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [list, setList] = useState({});
  let area = null;

  useEffect(() => {
    const controller = new AbortController();
    console.log('teamTable url', baseUrl);

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
            setList(result);
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
  }, [id, accessToken, baseUrl]);

  const isEmpty = () => {
    if (Object.values(list).length) {
      return false;
    }
    return true;
  };

  console.log('list = ', list);

  if (!isEmpty) {
    area = list.area;
  } else {
    setErrorMessage('Данные не были получены');
  }

  if (errorMessage) {
    return <div>Ошибка: {errorMessage.message}</div>;
  } if (!isLoaded) {
    return <div>Загрузка...</div>;
  }
  return (
    <div className="info__wrapper">
        <div>
            <table className='team__table'>
                <thead>
                    <tr>
                        <th>Team</th>
                        <th>Area</th>
                        <th>Club colors</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                    <div className="area__info">
                        <img className="flag" src={ list.crestUrl } alt={ list.shortName }></img>
                        <h2>
                            { list.shortName }
                        </h2>
                    </div>
                    </td>
                    <td>{ area.name }</td>
                    <td>{ list.clubColors}</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div>
            Calendar
        </div>
        <Link to='/teams'>Back</Link>
    </div>
  );
}

export default TeamTable;
