import ToastPack from './containers/ToastPack';
import ToastFactory from './utils/ToastFactory';

const toast = (type, message) => ToastFactory.notify(type, message);

export {
  ToastPack,
  toast,
};
