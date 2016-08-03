import test, { TestContext } from 'ava';
import { shallow } from 'enzyme';
import * as React from 'react';

import { App } from './App';

test( 'has a Hello message', ( t: TestContext ) => {
  const wrapper = shallow(<App/>);
  t.is( wrapper.contains(<div>Hello from Sofia!</div>), true );
} );
