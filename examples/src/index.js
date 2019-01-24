import React from 'react';
import { render } from 'react-dom';
import Notify from '../../src';

const App = () => (
  <Notify />
);
render(<App />, document.getElementById('root'));
