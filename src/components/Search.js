import React from 'react';
import PropTypes from 'prop-types';

function Search(props) {
  return (
    <div className="container-fluid">
      <input
        className="form-control"
        placeholder="Search"
        type="text"
        className="field__text"
        onChange={(event) => props.onValueChange(event.target.value)}
      />
    </div>
  );
}

Search.propTypes = {
  onValueChange: PropTypes.func.isRequired,
};

export default Search;
