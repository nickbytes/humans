import React from 'react';

import { render } from 'react-dom';


// Import Components
import App from './components/App';
import SinglePage from './components/SinglePage';
import UserPage from './components/UserPage';

import css from './styles/styles.css';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={UserPage}></IndexRoute>
        <Route path="/:username" component={SinglePage}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
