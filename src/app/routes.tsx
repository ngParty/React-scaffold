import * as React from 'react';
import { hashHistory, Router} from 'react-router';

import { appRouting } from './App.routing';

export const routes = (
  <Router history={hashHistory} routes={appRouting}/>
);
