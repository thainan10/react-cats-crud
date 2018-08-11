import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { Store } from 'store';
import { fetchCats } from 'actions';
import App from 'App';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

Store.dispatch(fetchCats());

ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
