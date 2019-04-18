/* eslint-disable func-names */
// eslint-disable-next-line func-names
const ToastPackEventEmitter = function () {
  this.events = {};
};

ToastPackEventEmitter.prototype.on = function (eventName, callback) {
  if (Array.isArray(this.events[eventName])) {
    this.events[eventName].push(callback);
    return this;
  }

  this.events[eventName] = [callback];
  // Allow chaining
  return this;
};

ToastPackEventEmitter.prototype.unsubscribe = function (eventName) {
  delete this.events[eventName];
};

ToastPackEventEmitter.prototype.emit = function (context, eventName) {
  if (this.events[eventName] !== undefined) {
    this.events[eventName].forEach(callback => {
      callback.apply(context);
      return true;
    });
  }
  return false;
};

export default ToastPackEventEmitter;
