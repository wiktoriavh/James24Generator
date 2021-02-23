import React from 'react';
import ReactDOM from 'react-dom';

import { ApplicationLetter } from './application/ApplicationLetter';
import { OutlineGenerator } from './outline/OutlineGenerator';

ReactDOM.render(
  <OutlineGenerator />,
  document.querySelector('#br-generator.outline')
);

module.hot.accept();
