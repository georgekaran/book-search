import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './pages/Main/Main';

import "./assets/plugins/nucleo/css/nucleo.css";
import "./assets/scss/argon-dashboard-react.scss";

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);