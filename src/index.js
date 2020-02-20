import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Routes from 'Routes'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

axios.defaults.baseURL = 
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '/';

ReactDOM.render(<Router>
                  <Routes />
                </Router>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
