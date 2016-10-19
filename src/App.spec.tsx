// import { expect } from 'chai';
import * as React from 'react';
import { shallow } from 'enzyme';

import { App } from './App';
import { MenuList } from './shared/components/menu-list/MenuList';

describe( '<App/>', () => {
  it( `should render Hello message`, () => {
    const wrapper = shallow( <App>hello</App> );

    expect( wrapper.contains(
      <div className='container'>
        <MenuList/>
        <div>hello</div>
      </div>
    ) ).toEqual( true );
  } );
} );
