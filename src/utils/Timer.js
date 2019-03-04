/* eslint-disable func-names */
function Timer(callback, delay) {
  let timerId;
  let start;
  let remaining = delay;

  this.pause = function () {
    window.clearTimeout(timerId);
    remaining -= new Date() - start;
  };

  this.resume = function () {
    start = new Date();
    window.clearTimeout(timerId);
    timerId = window.setTimeout(callback, remaining);
  };

  this.resume();
}

export default Timer;
