import React from 'react';
import uuid from 'uuid';
import ToastElement from '../containers/ToastElement';
import { ontoast, onremovetoast } from './types';

const addToastEvent = new Event(ontoast);
const removeToastEvent = new Event(onremovetoast);

// TODO: Specify better defaults
const createToastItem = (id, type, message, config, component) => {
  if (component !== undefined) {
    return {
      element:
  <ToastElement
        id={id}
        key={id}
        type={type}
        configuration={config}
        custom
        >
    {component}
  </ToastElement>,
    };
  }
  return {
    element:
  <ToastElement
    id={id}
    key={id}
    type={type}
    configuration={config}
    >
    {message}
  </ToastElement>,
  };
};

const toastFactory = {
  toastMap: new Map(),

  notify(type, message, config, component) {
    const defaults = {
      autoCloseTiming: 6000,
      autoClose: true,
      showCloseButton: true,
    };
    const constructedConfig = Object.assign(defaults, config);
    const id = uuid();
    const item = createToastItem(id, type, message, constructedConfig, component);
    this.toastMap.set(id, item);
    dispatchEvent(addToastEvent);
  },

  deleteNotification(id) {
    this.toastMap.delete(id);
    dispatchEvent(removeToastEvent);
  },
};

export default toastFactory;
