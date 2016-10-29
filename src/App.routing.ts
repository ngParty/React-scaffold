import { ReactStateDeclaration } from 'ui-router-react';
import { homeState } from './home/Home.routing';
import { faqState } from './faq/Faq.routing';
import { notFoundState } from './not-found/NotFound.routing';

const aboutStateLazyLoaded: ReactStateDeclaration = {
  // name and url should be the same as the root module state config,
  // this definition will be replaced by lazy loaded config
  name: 'about',
  url: '/about',
  lazyLoad: (transition) => {
    return System.import('./about').then(module => {
      // const artificialDelay = new Promise((resolve) => {
        // setTimeout(() => {
          // resolve(module.states)
        // }, 500)
      // });
      // return artificialDelay
      return module.states
    })
  }
}

export const missStateRule = notFoundState.url;
export default [homeState, aboutStateLazyLoaded, faqState, notFoundState];

