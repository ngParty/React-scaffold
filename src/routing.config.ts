import UIRouterReact, {trace} from 'ui-router-react';

import appStates, {missStateRule} from './App.routing';


// Create a new instance of the Router
const router = new UIRouterReact();

// Register states
const allStates = [...appStates];
allStates.forEach(state => router.stateRegistry.register(state));

// Miss
router.urlRouterProvider.otherwise(missStateRule);

export const initRouter = () => router.start();
