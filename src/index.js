import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import './custom.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FirebaseContext } from './context/firebase';

import * as serviceWorker from './serviceWorker';


ReactDOM.render(

  <FirebaseContext.Provider>
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
  </FirebaseContext.Provider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();