import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import './styles/index.css';
import './uswds/dist/css/uswds.min.css';

import Login from './pages/Login';
import Welcome from './pages/Welcome';
import Form from './pages/Form';
import View from './pages/View';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';

import registerServiceWorker from './other/registerServiceWorker';
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
