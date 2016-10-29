import * as React from 'react';

type ComponentModule = {
  default: any
};

export function errorLoading( cb: any ) {
  return ( err: any ) => {
    console.error( 'Dynamic page loading failed', err );
    System.import('../../not-found')
      .then(loadRoute(cb))
      .catch(console.error);
  };
}
export function loadRoute( cb: any ) {
  return ( module: ComponentModule ) => cb( null, module.default );
}
