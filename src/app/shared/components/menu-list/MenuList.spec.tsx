import * as React from 'react';
import { shallow } from 'enzyme';

import { MenuList } from './MenuList';

describe( `<MenuList/>`, () => {
  it( `should render 3 menu items`, () => {
    const wrapper = shallow(<MenuList/>);
    expect( wrapper.find('li').length ).toBe( 3 );
  } );
} );
