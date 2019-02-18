import React from 'react';
import uuid from 'uuid';
import ToastElement from '../containers/ToastElement';
import { ontoast, onremovetoast } from './types';

const addToastEvent = new Event(ontoast);
const removeToastEvent = new Event(onremovetoast);


const createToastItem = (id, type, message) => {
  return {
    element:
  <ToastElement
    id={id}
    key={id}
    type={type}
    >
    {message}
  </ToastElement>,
  };
};

const toastFactory = {
  toastMap: new Map(),

  notify(type, message) {
    const id = uuid();
    const item = createToastItem(id, type, message);
    this.toastMap.set(id, item);
    dispatchEvent(addToastEvent);
  },

  deleteNotification(id) {
    this.toastMap.delete(id);
    dispatchEvent(removeToastEvent);
  },
};

export default toastFactory;
