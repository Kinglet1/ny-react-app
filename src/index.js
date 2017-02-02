import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const refreshSeconds = 15;
const sourceUrl      = 'http://sionyx.ru/socialwall/posts.php';
// const sourceUrl      = '/api.json';

ReactDOM.render(
  <App srcUrl={sourceUrl} refreshTimeout={refreshSeconds * 1000}/>,
  document.getElementById('root')
);
