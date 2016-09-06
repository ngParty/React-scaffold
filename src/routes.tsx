import * as React from 'react';
import { hashHistory, Router, RouterState } from 'react-router';

import { App } from './App';
import { Home } from './home';
import { NotFound } from './not-found';

type ComponentModule = {
  default: Function | React.ComponentClass<any> | React.StatelessComponent<any>
};

export function createRoutes( /*store*/ ): Router.RouteConfig {
  // Create reusable async injectors using getAsyncInjectors factory
  // const { injectReducer, injectSagas } = getAsyncInjectors(store);

  return [
    {
      path: '*',
      getComponent( nextState: RouterState, callback: ( error: Error, module: any ) => void ) {

        System.import( `.${ nextState.location.pathname }/index` )
          .then( ( module: ComponentModule ) => {

            callback( null, module.default );

          } )
          .catch( ( err: any ) => {

            console.error( 'Dynamic page loading failed', err );

            callback( null, NotFound );

          } );

      }
    }
  ];
}

const rootRoute: Router.RouteConfig = {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: createRoutes()
};

export const routes = (
  <Router history={hashHistory} routes={rootRoute}/>
);
