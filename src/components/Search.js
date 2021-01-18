import React from 'react';

export default function Search(props) {
  return (
    <div className="field">
      <input
        type="text"
        className="field__text"
        onChange={(event) => props.onValueChange(event.target.value)}
      />
    </div>
  );
}
