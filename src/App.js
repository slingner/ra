import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardRoute from '../src/routes/DashboardRoute/DashboardRoute';
import AdditionRoute from '../src/routes/AdditionRoute/AdditionRoute';

function App() {
  return (
    <main className='app'>
      <Switch>
        <Route exact path={'/'} component={DashboardRoute} />
        <Route path={'/addition'} component={AdditionRoute} />
        {/* <Route path={'/addition'} component={USA_States} />
        <Route path={'/addition'} component={Spelling} /> */}
        {/* <Route component={NotFoundRoute} /> */}
      </Switch>
    </main>
  );
}

export default App;
