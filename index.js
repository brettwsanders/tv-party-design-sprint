import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import store from './config/store';
import routes from './config/routes';

// TODO: remove this once all API endpoints are connected and the initial data
// is being pulled in correctly
const initialState = {
  counter: 20
};

const initialStore = store(initialState);

render(
  <div>
    <Provider store={initialStore}>
      <ReduxRouter routes={routes} />
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={initialStore} monitor={LogMonitor} />
    </DebugPanel>
  </div>,
  document.getElementById('root')
);