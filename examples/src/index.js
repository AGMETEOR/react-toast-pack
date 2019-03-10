import React, { Component } from 'react';
import { render } from 'react-dom';
import { ToastPack, toast } from '../../src';
// import Custom from './Custom';
import './custom.scss';


class App extends Component {
  componentDidMount() {
    // toast('dark', 'This is dark themed toast.', { autoClose: true, styling: { color: 'black' },
    // className: 'customer' });
    // toast('info', 'This is information themed toast.');
    // toast('success', 'This is success themed toast.', { autoCloseTiming: 2000, autoClose:
    // true, showCloseButton: false });
    // toast(null, 'This is default themed toast.', { autoCloseTiming: 5000 });
    // toast(null, '', { autoCloseTiming: 5000, autoClose: false }, <Custom />);
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
