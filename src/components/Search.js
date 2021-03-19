import React from 'react';
import PropTypes from 'prop-types';

const style = {
  input: {
    marginBottom: '35px',
  },
};
function Search(props) {
  return (
    <input
        id="search"
        className="form-control field__text"
        style={style.input}
        placeholder="Search"
        type="text"
        onChange={(event) => props.onValueChange(event.target.value)}
      />
  );
}

Search.propTypes = {
  onValueChange: PropTypes.func.isRequired,
};

export default Search;
