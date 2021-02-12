import React from 'react';
import ReactDOM from 'react-dom';

import { ApplicationLetter } from './application/ApplicationLetter';

ReactDOM.render(
  <ApplicationLetter />,
  document.querySelector('#br-generator.application')
);

module.hot.accept();
