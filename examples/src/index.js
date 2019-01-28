import React from 'react';
import { render } from 'react-dom';
import ToastElement from '../../src';

const App = () => (
  <ToastElement type="info" />
);
render(<App />, document.getElementById('root'));
