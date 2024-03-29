import React from 'react';
import PropTypes from 'prop-types';

const style = {
  select: {
    marginBottom: '35px',
  },
};
function SelectArea(props) {
  return (
    <select onChange={(event) => props.findArea(event.target.value)} className="form-control" style={style.select} id="selectArea">
          <option>Filter</option>
          {
              props.areas.map((area, index) => <option key={index} value={area}>{area}</option>)
          }
      </select>
  );
}

SelectArea.propTypes = {
  areas: PropTypes.array.isRequired,
  findArea: PropTypes.func.isRequired,
};

export default SelectArea;
