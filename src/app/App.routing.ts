import { Router, RouterState } from 'react-router';

import { loadIndexRoute, errorLoading, loadRoute, RouterAsyncCallback } from './shared/utils/router-utils';
import App from './App';

function createRoutes( /*store*/ ): Router.RouteConfig {
  // Create reusable async injectors using getAsyncInjectors factory
  // const { injectReducer, injectSagas } = getAsyncInjectors(store);

  return [
    {
      path: '*',
      getComponent( nextState: RouterState, callback: RouterAsyncCallback ) {
        System.import( `.${ nextState.location.pathname }/index` )
          .then( loadRoute( callback ) )
          .catch( errorLoading( callback ) );
      }
    }
  ];
}

export const appRouting: Router.RouteConfig = {
  path: '/',
  component: App,
  // async IndexRoute
  getIndexRoute(partialNextState, cb) {
    System.import( './home' )
      .then( loadIndexRoute( cb ) )
      .catch( errorLoading( cb ) );
  },
  // static child routes definition ( they are loaded async )
  childRoutes: createRoutes()
};
