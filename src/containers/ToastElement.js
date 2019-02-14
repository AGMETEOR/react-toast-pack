import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../scss/main.scss';

class ToastElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
    };
  }

  componentDidMount() {
    setTimeout(() => this.autoClose(), 4000);
  }

  autoClose = () => {
    this.slideAway();
    const { remove, context } = this.props;
    this.myPromise()
      .then(() => {
        remove(context);
      });
  }

  slideAway = () => {
    return this.setState({
      hide: true,
    });
  }

  myPromise = () => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 400);
    });
    return promise;
  }

  render() {
    const { type } = this.props;
    const { hide } = this.state;
    return (
      <div>
        <div className={`Toast-${type || 'Element'} ${hide && 'hide'}`}>
          <div>
      I am a toast notification
          </div>
        </div>
      </div>
    );
  }
}

ToastElement.propTypes = {
  remove: PropTypes.func.isRequired,
  context: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};

export default ToastElement;
