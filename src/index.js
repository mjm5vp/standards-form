import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import './index.css';
import './uswds/dist/css/uswds.min.css'
import App from './App';
import Login from './Login';
import Header from './Header';
import Welcome from './Welcome';
import Banner from './Banner';
import Form from './Form';
import View from './View';
import Footer from './Footer';

import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Header />
        <Banner />
        <Switch>
          <Route path='/welcome' component={Welcome} />
          <Route path='/form' component={Form} />
          <Route path='/view' component={View} />
          <Route path='/' component={Login} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
// registerServiceWorker();
