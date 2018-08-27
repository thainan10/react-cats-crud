import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { Store } from 'store';
import { fetchCats, fetchHobbies } from 'actions';
import App from 'App';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

Store.dispatch(fetchCats());
Store.dispatch(fetchHobbies());

ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
