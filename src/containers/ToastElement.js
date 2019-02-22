import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CloseToast from '../components/CloseToast';
import toastFactory from '../utils/ToastFactory';
import { AlignedRightContext } from './ToastPack';
import '../../scss/main.scss';

class ToastElement extends Component {
  static contextType = AlignedRightContext;

  constructor(props) {
    super(props);
    const { configuration } = props;
    const { autoCloseTiming, autoClose, styling } = configuration;
    this.autoCloseTiming = autoCloseTiming;
    this.styling = styling;
    this.state = {
      autoClose,
      show: false,
    };
  }

  componentDidMount() {
    setTimeout(() => this.slideIn(), 0);
    setTimeout(() => this.autoClose(), this.autoCloseTiming);
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

  slideIn = () => {
    return this.setState({
      show: true,
    });
  }

  slideAway = () => {
    return this.setState({
      show: false,
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
    const { show } = this.state;
    return (
      <AlignedRightContext.Consumer>
        {(context) => (
          <div className={`${context ? 'ToastElementRight' : 'ToastElement'}-${type || 'Element'} ${show && 'slideIn'}`} style={this.styling}>
            <div>
              {children}
            </div>
            <CloseToast clickFunction={this.voluntaryClose} />
          </div>
        )}
      </AlignedRightContext.Consumer>
    );
  }
}

ToastElement.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  configuration: PropTypes.object,
};

ToastElement.defaultProps = {
  type: null,
  configuration: {},
};

export default ToastElement;
