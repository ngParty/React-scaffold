import * as React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import { Layout } from './shared/components/layout/Layout';
import Home from './home/Home';
import About from './about/About';
import NotFound from './not-found/NotFound';

describe( '<App/>', () => {
  it( `should render Hello message`, () => {
    const wrapper = shallow( <App/> );

    expect( wrapper.contains(
      <div>hello</div>
    ) ).toEqual( true );
  } );
} );
