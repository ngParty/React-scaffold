import * as React from 'react';
import { RouteComponent, RouterState, Router } from 'react-router';

export type RouterAsyncCallback = ( error: Error, module: RouteComponent ) => void;
export type RouterAsyncIndexCallback = ( error: Error, indexRoute: Router.RouteConfig ) => void;
type ComponentModule = {
  default: RouteComponent
};

export function errorLoading( cb: RouterAsyncCallback ) {
  return ( err: any ) => {
    console.error( 'Dynamic page loading failed', err );
    System.import('../../not-found/index')
      .then(loadRoute(cb))
      .catch(console.error);
  };
}
export function loadRoute( cb: RouterAsyncCallback ) {
  return ( module: ComponentModule ) => cb( null, module.default );
}
export function loadIndexRoute( cb: RouterAsyncIndexCallback ) {
  return ( module: ComponentModule ) => cb( null, { component: module.default } );
}

// @TODO make this work or remove
// this doesn't load routes properly, when loading from children folder, maybe that's just wp-dev-server issue
export function createRoutes( /*store*/ ): Router.RouteConfig {
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
