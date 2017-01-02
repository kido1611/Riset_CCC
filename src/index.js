import React from 'react';
import ReactDOM from 'react-dom';
import {Router, useRouterHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {createHashHistory} from 'history';

import Base from './Base';

window.React = React;
injectTapEventPlugin();

ReactDOM.render(
  <Base />,
  document.getElementById('root')
);
