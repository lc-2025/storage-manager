import { Storage, Type } from '../utils/tokens';
import type {
  TUseStorage,
  TUseStorageCheck,
  TUseStorageType,
} from '../types/hooks/Storage.ts';

/**
 * @description Storage hook
 * Ensures to provide a supported Storage API set of methods
 * @author Luca Cattide
 * @param {TUseStorageType} [type]
 * @returns {*}  {TUseStorage}
 */
const useStorage = (type?: TUseStorageType): TUseStorage => {
  /**
   * @description Storage API support check
   * Verifies if the current browser supports the Storage API
   * @author Luca Cattide
   * @date 06/11/2025
   * @returns {*}  {TUseStorageCheck}
   */
  const checkSupport = (): TUseStorageCheck => {
    const storageType = {
      [Type.Local]: Storage.Local,
      [Type.Session]: Storage.Session,
    };
    const selectedType = type ? storageType[type] : Storage.Local;
    const storage = {
      [Storage.Local]: localStorage,
      [Storage.Session]: sessionStorage,
    };
    const storageSelected = storage[selectedType];
    const isSupported = window[selectedType];

    return { isSupported, storageSelected };
  };

  /**
   * @description Storage getter
   * Retrieves an item from Local/Session Storage if present
   * @author Luca Cattide
   * @param {string} item
   * @returns {*}  {(string | null)}
   */
  const getStorage = (item: string): string | null => {
    const support = checkSupport();
    const { isSupported } = support;
    let element = null;

    if (isSupported) {
      element = support.storageSelected.getItem(item);
    }

    return element;
  };

  /**
   * @description Storage setter
   * Saves an item to the Local/Session Storage
   * @author Luca Cattide
   * @param {string} item
   * @param {string} value
   */
  const setStorage = (item: string, value: string): void => {
    const support = checkSupport();
    const { isSupported } = support;

    if (isSupported) {
      support.storageSelected.setItem(item, value);
    }
  };

  /**
   * @description Storage removal
   * Deletes one or multiple items from the Local/Session Storage
   * @author Luca Cattide
   * @param {Array<string>} items
   */
  const deleteStorages = (items: Array<string>): void => {
    const support = checkSupport();
    const { isSupported } = support;

    if (isSupported) {
      items.forEach((item) => {
        support.storageSelected.removeItem(item);
      });
    }
  };

  return { getStorage, setStorage, deleteStorages };
};

export default useStorage;
