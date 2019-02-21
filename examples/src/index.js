import React, { Component } from 'react';
import { render } from 'react-dom';
import { ToastPack, toast } from '../../src';


class App extends Component {
  render() {
    return (
      <div>
        <ToastPack />
        <button style={{ position: 'absolute', right: '20px' }} onClick={() => toast('dark', 'This is dark themed toast.')}> Dark</button>
        <button style={{ position: 'absolute', right: '20px', top: '40px' }} onClick={() => toast('info', 'This is information themed toast. This is information themed toast. This is information themed toast. This is information themed toast. This is information themed toast. This is information themed toast. This is information themed toast. This is information themed toast.')}>Info</button>
        <button style={{ position: 'absolute', right: '20px', top: '60px' }} onClick={() => toast('success', 'This is success themed toast.')}>Success</button>
        <button style={{ position: 'absolute', right: '20px', top: '80px' }} onClick={() => toast(null, 'This is default themed toast.')}> Default</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
