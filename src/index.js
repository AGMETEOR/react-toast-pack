import ToastPack from './containers/ToastPack';
import ToastFactory from './utils/ToastFactory';

const toast = (type, message, config) => ToastFactory.notify(type, message, config);

export {
  ToastPack,
  toast,
};
