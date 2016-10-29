import * as React from 'react';
import { UISref, UIView, UISrefActive } from 'ui-router-react';

const About = () => {
  return (
    <div>
      <h2>About</h2>
      <nav>
        <li>
          <UISrefActive class="active">
            <UISref to=".contact">
              <a>Contacts</a>
            </UISref>
          </UISrefActive>
        </li>
      </nav>
      <section>
        <UIView />
      </section>
    </div>
  );
};

export default About;
