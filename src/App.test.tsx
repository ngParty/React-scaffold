import test, { TestContext } from 'ava';
import * as React from 'react';
import { shallow } from 'enzyme';

import { App } from './App';

test( 'has a Hello message', ( t: TestContext ) => {
  const wrapper = shallow(<App/>);
  t.is( wrapper.contains(<div>Hello from Sofia!</div>), true );
} );


