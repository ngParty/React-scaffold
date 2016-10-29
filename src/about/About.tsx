import * as React from 'react';
import { StatelessComponent } from 'react';
import { Link, InjectedRouteProps } from 'react-router';
import { LazilyMatch } from '../shared/components/lazy-match/LazyMatch';

interface Props extends InjectedRouteProps{}
const About: StatelessComponent<Props> = ({pathname}) => {
  return (
    <div>
      <h2>About</h2>
      <nav>
        <li>
          <Link to={`${pathname}/contact`}>Contact</Link>
        </li>
      </nav>
      <section>
        <LazilyMatch pattern={`${pathname}/contact`} getComponent={()=>System.import('./contact')} />
      </section>
    </div>
  );
};

export default About;
