import * as React from 'react';
import { shallow } from 'enzyme';
import { Layout } from './Layout';


describe( `<Layout/>`, () => {
  it( `should render children to <main> element`, () => {
    const wrapper = shallow(
      <Layout>
        <div>
          <h2>Hello world!</h2>
          <p>Lorem ipsum</p>
        </div>
      </Layout>
    );
    const main = wrapper.find('main');

    expect(
      main.contains(
        <div>
          <h2>Hello world!</h2>
          <p>Lorem ipsum</p>
        </div>
      )
    ).toEqual( true );
  } );
} );
