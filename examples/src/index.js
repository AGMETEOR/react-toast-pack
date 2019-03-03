import React, { Component } from 'react';
import { render } from 'react-dom';
import { ToastPack, toast } from '../../src';


class App extends Component {
  componentDidMount() {
    toast('dark', 'This is dark themed toast.', { autoClose: true, styling: { backgroundColor: 'yellow', color: 'black' } });
    toast('info', 'This is information themed toast.');
    toast('success', 'This is success themed toast.', { autoCloseTiming: 2000, autoClose: true });
    toast(null, 'This is default themed toast.', { autoCloseTiming: 5000 });
  }

  render() {
    return (
      <div>
        <ToastPack />
        <button style={{ position: 'absolute', right: '20px' }} onClick={() => toast('dark', 'This is dark themed toast.', { autoCloseTiming: 2000, autoClose: false, styling: { backgroundColor: 'yellow', color: 'black' } })}> Dark</button>
        <button style={{ position: 'absolute', right: '20px', top: '40px' }} onClick={() => toast('info', 'This is information themed toast.')}>Info</button>
        <button style={{ position: 'absolute', right: '20px', top: '60px' }} onClick={() => toast('success', 'This is success themed toast.', { autoCloseTiming: 2000, autoClose: false })}>Success</button>
        <button style={{ position: 'absolute', right: '20px', top: '80px' }} onClick={() => toast(null, 'This is default themed toast.', { autoCloseTiming: 2000 })}> Default</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
