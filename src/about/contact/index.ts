import { LazyLoadResult } from 'ui-router-core';
import { contactState } from './Contact.routing';

export {default} from './Contact';

export const states: LazyLoadResult = {
  states: [contactState]
}
