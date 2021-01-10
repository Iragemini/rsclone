import React from 'react';
import ReactDOM from 'react-dom';
import API from './modules/api';

function init() {
  ReactDOM.render(<API type={ ['competitions', 'League'] }/>, document.querySelector('.app__league'));
}
init();
