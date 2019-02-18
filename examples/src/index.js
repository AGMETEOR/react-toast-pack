import React, { Component } from 'react';
import { render } from 'react-dom';
import { ToastPack, toast } from '../../src';


class App extends Component {
  componentDidMount() {
    toast('info', 'This is information');
    toast('success', 'This is success information');
  }

  render() {
    return (
      <div>
        <ToastPack />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
