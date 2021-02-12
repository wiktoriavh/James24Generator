import React from 'react';
import ReactDOM from 'react-dom';

import { ApplicationLetter } from './application/ApplicationLetter';

ReactDOM.render(
  <ApplicationLetter />,
  document.getElementById('br-application-generator')
);

module.hot.accept();
