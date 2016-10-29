import * as React from 'react';
import { StatelessComponent } from 'react';
import { UIView } from 'ui-router-react';

import Home from './home/Home';
import About from './about/About';
import NotFound from './not-found/NotFound';
import { Layout } from './shared/components/layout/Layout';


interface AppProps extends React.DOMAttributes<any> {}

const App: StatelessComponent<AppProps> = () => {
  return (
      <Layout>
        <UIView/>
      </Layout>
    )
};

export default App;
