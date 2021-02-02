import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './scss/main.scss';

const component = (
  <HashRouter>
    <App/>
  </HashRouter>
);

ReactDOM.render(component, document.getElementById('root'));
