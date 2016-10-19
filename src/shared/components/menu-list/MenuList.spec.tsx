import { shallow } from 'enzyme';
// import { expect } from 'chai';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import * as TestUtils from 'react-addons-test-utils';

import { MenuList } from './MenuList';

describe( `<MenuList/>`, () => {
  it( `should render 3 menu items`, () => {

    const checkbox = TestUtils.renderIntoDocument(
      <MenuList/>
    );
    const checkboxNode = ReactDOM.findDOMNode(checkbox as any);
    // const wrapper = shallow(<MenuList/>);
    // expect( wrapper.find('li').length ).toBe( 3 );
  } );
} );
