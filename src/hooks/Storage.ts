import { Storage, Type } from '../utils/tokens';
import type { TUseStorage, TUseStorageType } from '../types/hooks/Storage.ts';

/**
 * @description Storage hook
 * Ensures to provide a supported Storage API set of methods
 * @author Luca Cattide
 * @param {TUseStorageType} [type]
 * @returns {*}  {TUseStorage}
 */
const useStorage = (type?: TUseStorageType): TUseStorage => {
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

  /**
   * @description Storage getter
   * Retrieves an item from Local/Session Storage if present
   * @author Luca Cattide
   * @param {string} item
   * @returns {*}  {(string | null)}
   */
  const getStorage = (item: string): string | null => {
    let element = null;

    if (isSupported) {
      element = storageSelected.getItem(item);
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
    if (isSupported) {
      storageSelected.setItem(item, value);
    }
  };

  /**
   * @description Storage removal
   * Deletes one or multiple items from the Local/Session Storage
   * @author Luca Cattide
   * @param {Array<string>} items
   */
  const deleteStorages = (items: Array<string>): void => {
    if (isSupported) {
      items.forEach((item) => {
        storageSelected.removeItem(item);
      });
    }
  };

  return { getStorage, setStorage, deleteStorages };
};

export default useStorage;
