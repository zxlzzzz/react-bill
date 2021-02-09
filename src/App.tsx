import React from 'react';
import { HashRouter as Router,Switch, Route,Redirect } from "react-router-dom";
import Tags from 'pages/Tags'
import Money from 'pages/Money'
import Statistics from 'pages/Statistics'
import NoMatch from 'pages/NoMatch'

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/tags">
            <Tags />
          </Route>
          <Route path="/money">
            <Money />
          </Route>
          <Route path="/statistics" exact>
            <Statistics />
          </Route>
          <Redirect exact from='/' to='/money' /> {/* 默认路由 */}
          <Route path='*'>
             <NoMatch />
          </Route>
        </Switch>
    </Router>
  );
}
export default App
