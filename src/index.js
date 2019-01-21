import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

import Home from './components/Home';
import NotHome from './components/NotHome';

import './styles/base.less';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/nothome" component={NotHome} />
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
