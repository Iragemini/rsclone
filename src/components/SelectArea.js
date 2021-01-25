import React from 'react';
import PropTypes from 'prop-types';

function SelectArea(props) {
  return (
    <div className="container">
      <select onChange={(event) => props.findArea(event.target.value)}>
          <option></option>
          {
              props.areas.map((area, index) => <option key={index} value={area}>{area}</option>)
          }
      </select>
    </div>
  );
}

SelectArea.propTypes = {
  areas: PropTypes.array.isRequired,
  findArea: PropTypes.func.isRequired,
};

export default SelectArea;
