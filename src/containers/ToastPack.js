import React, { Component } from 'react';
import PropTypes from 'prop-types';
import toastFactory from '../utils/ToastFactory';
import { ontoast, onremovetoast } from '../utils/types';
// import EventEmitter from '../utils/EventEmitter';

export const AlignedRightContext = React.createContext(false);

class ToastPack extends Component {
  componentDidMount() {
    window.addEventListener(ontoast, () => this.forceUpdate());
    window.addEventListener(onremovetoast, () => this.forceUpdate());
  }

  createToastElement = () => {

  }

  render() {
    const { rt } = this.props;
    return (
      <AlignedRightContext.Provider value={rt}>
        <div className={rt ? 'ToastPack-rt' : 'ToastPack-lt'}>
          {
          [...toastFactory.toastMap.entries()].map(el => el[1].element)
        }
        </div>

      </AlignedRightContext.Provider>
    );
  }
}

ToastPack.propTypes = {
  rt: PropTypes.bool,
};

ToastPack.defaultProps = {
  rt: false,
};

export default ToastPack;
