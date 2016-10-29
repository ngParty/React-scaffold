import {ReactStateDeclaration} from 'ui-router-react';
import NotFound from './NotFound';

export const notFoundState: ReactStateDeclaration = {
  name: 'not-found',
  url: '/not-found',
  component: NotFound,
}
