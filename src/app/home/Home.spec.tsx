import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Home from './Home';

test( `should render <Home/>`, () => {
  const component = renderer.create(
    <Home/>
  );

  let tree = component.toJSON();
  expect( tree ).toMatchSnapshot();
} );
