import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import DetailPage from './pages/home/DetailPage';
import HomePage from './pages/home/HomePage';
import UsersPage from './pages/home/UsersPage';

const RouterContainer = props => (
  <Router>
      <Switch>
          <Route exact path={"/"} component={ HomePage } />
          <Route exact path={"/detail"} component={ DetailPage } />
          <Route path={"/users"} component={ UsersPage } />
          <Route>
              <h2>Page Not Found</h2>
          </Route>
      </Switch>
  </Router>
)
  
export default RouterContainer;