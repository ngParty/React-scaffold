import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// import UIRouterReact,{UIView, ReactStateDeclaration} from 'ui-router-react';

import './styles.css';
import { initRouter } from './routing.config';
import App from './App';

// @TODO looks like we need store(redux) to make HMR work
// https://github.com/richardkall/react-starter/blob/d0e4d1e2d46fd5def7a21a1bd8ca2832fcb81528/client/index.js
const main = () => {
  initRouter();
  render(
    <App/>,
    document.getElementById( 'app' )
  );
};

main();


if ( process.env === 'development' ) {
//   // Hot Module Replacement API
  if ( module.hot ) {
    module.hot.accept( './App', () => {
      console.log( '🔁  HMR Reloading `./routes`...' );
      main();
    } );
  }
}
