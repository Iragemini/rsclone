import React from 'react';
import { useParams } from 'react-router-dom';

function LeagueTable() {
  const { id } = useParams();
  //     const { info } = props;
  //   const { area } = info;
  //   const { currentSeason } = info;
  //   const startYear = (new Date(currentSeason.startDate)).getFullYear();
  //   const endYear = (new Date(currentSeason.endDate)).getFullYear();
  //   const period = (startYear === endYear) ? startYear : `${startYear}/${endYear}`;
  //   const { id } = info;

  return (
      <div>{id}</div>
  // <div className="info__wrapper">
  //     <div>
  //         <div>
  //             <img className="flag" src={ area.ensignUrl } alt={ area.name }/>
  //             <h2>
  //                 { area.name }
  //             </h2>
  //         </div>
  //         <div className="area__info">
  //             <h2>
  //                 { info.name }
  //             </h2>
  //             <h3>
  //                 { period }
  //             </h3>
  //         </div>
  //     </div>
  //     <Calendar
  //         info={
  //             {
  //               id,
  //               leagueName: info.name,
  //               areaName: area.name,
  //             }
  //          }
  //     />
  // </div>
  );
}

export default LeagueTable;
