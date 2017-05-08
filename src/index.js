import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import appState from './store';
import './index.css';

ReactDOM.render(
  <App store={appState} />,
  document.getElementById('root')
);
