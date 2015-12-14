import 'babel/polyfill';

import App from './components/App';
import Widgets1 from './components/Widgets1';
import Widgets2 from './components/Widgets2';
import AppHomeRoute from './routes/AppHomeRoute';
import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';

let route = new AppHomeRoute();

ReactDOM.render(
  <div>
    <Relay.RootContainer
      Component={App}
      route={route}
    />
  </div>,
  document.getElementById('root')
);
