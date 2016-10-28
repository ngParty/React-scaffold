import * as React from 'react';
import { StatelessComponent, Component, PropTypes, Children } from 'react';
import { HashRouter, Match, Miss } from 'react-router';

import { Layout } from './shared/components/layout/Layout';

import Home from './home/Home';
import About from './about/About';
import NotFound from './not-found/NotFound';
import Faq from './faq/Faq';
import { LazilyMatch } from './shared/components/lazy-match/LazyMatch';

interface AppProps extends React.DOMAttributes<any> {}

const App: StatelessComponent<AppProps> = () => {
  return (
    <HashRouter>
      <Layout>
        <main>
          <Match exactly pattern="/" component={Home}/>
          <LazilyMatch pattern="/about" getComponent={()=>System.import('./about')} />
          <Match pattern="/faq" component={Faq}/>
          <Miss component={NotFound}/>
        </main>
      </Layout>
    </HashRouter>
  );
};


export default App;
