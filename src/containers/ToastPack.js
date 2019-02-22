import React, { Component } from 'react';
import toastFactory from '../utils/ToastFactory';
import { ontoast, onremovetoast } from '../utils/types';

class ToastPack extends Component {
  componentDidMount() {
    window.addEventListener(ontoast, () => this.forceUpdate());
    window.addEventListener(onremovetoast, () => this.forceUpdate());
  }

  updateToastStack = () => {
    this.forceUpdate();
  }

  render() {
    return (
      <div className="ToastPack">
        {
          [...toastFactory.toastMap.entries()].map(el => el[1].element)
        }
      </div>
    );
  }
}

export default ToastPack;
