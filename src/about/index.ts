import {LazyLoadResult} from 'ui-router-core';
import {aboutState} from './About.routing';
export {default} from './About';
export * from './About';

export const states: LazyLoadResult = {
  states: [...aboutState]
}
