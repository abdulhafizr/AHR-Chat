import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/pages/App';
import firebaseConfig from './config/firebaseConfig';
import reportWebVitals from './reportWebVitals';

console.log('firebase config : ', firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
