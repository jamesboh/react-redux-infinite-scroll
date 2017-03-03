import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import ArticlesContainer from './components/ArticlesContainer';

ReactDOM.render(
  <Provider store={store}>
	  <Router history={browserHistory}>
	    <Route path="/" component={ArticlesContainer}/>
	  </Router>
  </Provider>,
  document.getElementById('app')
);