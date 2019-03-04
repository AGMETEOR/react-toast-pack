import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CloseToast from '../components/CloseToast';
import toastFactory from '../utils/ToastFactory';
import { AlignedRightContext } from './ToastPack';
import Timer from '../utils/Timer';
import noop from '../utils/noop';
import '../../scss/main.scss';

class ToastElement extends Component {
  static contextType = AlignedRightContext;

  constructor(props) {
    super(props);
    this.toastElementRef = React.createRef();
    const { configuration } = props;
    const {
      autoCloseTiming,
      autoClose,
      styling,
      showCloseButton,
      className,
    } = configuration;
    this.autoCloseTiming = autoCloseTiming;
    this.styling = styling;
    this.showCloseButton = showCloseButton;
    this.className = className;
    this.state = {
      autoClose,
      show: false,
    };
  }

  componentDidMount() {
    new Timer(() => this.slideIn(), 0); // eslint-disable-line no-new
    const autoCloseTimer = new Timer(() => this.autoClose(), this.autoCloseTiming);
    this.toastElementRef.current.addEventListener('mouseover', () => autoCloseTimer.pause());
    this.toastElementRef.current.addEventListener('mouseout', () => autoCloseTimer.resume());
  }

  componentWillUnmount() {
    // TODO: Remove all events when unmounting this component
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
    const { type, children, custom } = this.props;
    const { show } = this.state;
    return (
      <AlignedRightContext.Consumer>
        {(context) => (
          <div
          className={`${context ? 'ToastElementRight' : 'ToastElement'}-${type || 'Element'} ${custom && 'custom'} ${show && 'slideIn'} ${this.className}`} style={this.styling}
          ref={this.toastElementRef}
          onMouseOver={this.detectMouseOver}
          onFocus={noop}
          >
            {children}
            {this.showCloseButton && <CloseToast clickFunction={this.voluntaryClose} />}
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
  custom: PropTypes.bool,
};

ToastElement.defaultProps = {
  type: null,
  configuration: {},
  custom: false,
};

export default ToastElement;
