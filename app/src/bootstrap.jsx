import React from 'react';
import { render } from 'react-dom';

import Root from './Root';

const rootElement = document.getElementById('root');
if (rootElement === null) {
  throw new Error('no root element');
}

render(<Root />, rootElement);
