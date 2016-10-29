import {ReactStateDeclaration} from 'ui-router-react';

import About from './About';
import Contact from './contact';

const contactTempState: ReactStateDeclaration = {
  name: 'about.contact',
  url: '/contact',
  // component: Contact
  lazyLoad: (transition)=>System.import('./contact').then(module=>module.states)
};
export const aboutState: ReactStateDeclaration[] = [
  {
    name:'about',
    url: '/about',
    component: About
  },
  contactTempState
]
