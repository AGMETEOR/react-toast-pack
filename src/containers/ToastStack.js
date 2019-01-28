import React, { Component } from 'react';
import uuid from 'uuid';
import { addToStack, removeFromStack } from '../utils/Stack';
import ToastElement from './ToastElement';

/* Implement using a stack */

class ToastStack extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
  }

  notify = (type) => {
    addToStack(
      this,
      {
        element: <ToastElement
        key={uuid()}
        type={type}
        context={this}
        remove={removeFromStack} />,
      },
    );
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        {items.map(element => element.element)}
        <button onClick={() => this.notify('info')}>Notify</button>
        <button onClick={() => this.notify('success')}>Notify</button>
      </div>
    );
  }
}

export default ToastStack;
