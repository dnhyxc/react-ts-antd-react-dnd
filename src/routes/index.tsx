import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Demo1 from '../routes/demo1';
import Demo2 from '../routes/demo2';
import App from '../App';

const RouterConfig: React.FC = () => {
  return (
    <div>
      <Router>
        <App>
          <Switch>
            <Route path="/demo1" component={Demo1}></Route>
            <Route path="/demo2" component={Demo2}></Route>
            <Redirect to="/demo1" />
          </Switch>
        </App>
      </Router>
    </div>
  )
};

export default RouterConfig;
