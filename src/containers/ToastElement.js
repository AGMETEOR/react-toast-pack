import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CloseToast from '../components/CloseToast';
import toastFactory from '../utils/ToastFactory';
import '../../scss/main.scss';

class ToastElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autoClose: true,
      hide: false,
    };
  }

  componentDidMount() {
    setTimeout(() => this.autoClose(), 6000);
  }

  voluntaryClose = () => {
    this.setState({
      autoClose: false,
    });
    const { id } = this.props;
    this.slideAway();
    this.myPromise()
      .then(() => {
        toastFactory.deleteNotification(id);
      });
  }

  autoClose = () => {
    const { autoClose } = this.state;
    if (autoClose) {
      this.slideAway();
      const { id } = this.props;
      this.myPromise()
        .then(() => {
          if (autoClose) {
            toastFactory.deleteNotification(id);
          }
        });
    }
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
    const { type, children } = this.props;
    const { hide } = this.state;
    return (
      <div className={`ToastElement-${type || 'Element'} ${hide && 'hide'}`}>
        <div>
          {children}
          <CloseToast clickFunction={this.voluntaryClose} />
        </div>
      </div>
    );
  }
}

ToastElement.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

ToastElement.defaultProps = {
  type: null,
};

export default ToastElement;
