import ToastPack from './containers/ToastPack';
import ToastFactory from './utils/ToastFactory';

const toast = (type, message, config, component) => ToastFactory.notify(
  type,
  message,
  config,
  component,
);

export {
  ToastPack,
  toast,
};
