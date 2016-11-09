import * as React from 'react';
import { StatelessComponent } from 'react';
import { IndexRoute, Route, Router, hashHistory } from 'react-router';

import Home from './home/Home';
import About from './about/About';
import NotFound from './not-found/NotFound';
import { Layout } from './shared/components/layout/Layout';

interface AppProps extends React.DOMAttributes<any> {}

const staticRoutes = (
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/*" component={NotFound}/>
    </Route>
  </Router>
);

const App: StatelessComponent<AppProps> = () => {
  return ( staticRoutes );
};

export default App;
