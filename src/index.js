import React, { Component } from 'react';
import '../scss/main.scss';

class ToastElement extends Component {
    state = {
      hide: true,
      autoClose: true,
    }

    toast = () => {
      this.setState(prevState => (
        {
          hide: !prevState.hide,
        }
      ));
    }

    autoClose = () => {
      const { autoClose, hide } = this.state;
      if (autoClose && hide === false) {
        setTimeout(() => {
          this.setState(prevState => (
            {
              hide: !prevState.hide,
            }
          ));
        }, 3000);
      }
    }

    render() {
    // eslint-disable-next-line react/prop-types
      const { type } = this.props;
      const { hide } = this.state;
      // TODO: This function sets state in render, look for an alternative
      this.autoClose();
      return (
        <div>
          <div className={`Toast-${type || 'Element'} ${hide ? 'hide' : null}`}>
            <div>
      I am a toast notification
            </div>
          </div>
          <button onClick={this.toast}>Notify</button>
        </div>
      );
    }
}

export default ToastElement;
