import { Storage } from '@/utils/tokens';
import type { TUseStorage, TUseStorageType } from '@/types/hooks/Storage.ts';

/**
 * @description Storage hook
 * @author Luca Cattide
 * @param {TUseStorageType} [type]
 * @returns {*}  {TUseStorage}
 */
const useStorage = (type?: TUseStorageType): TUseStorage => {
  const storageType = {
    [Storage.Local]: localStorage,
    [Storage.Session]: sessionStorage,
  };
  const storage = type
    ? storageType[type as keyof typeof storageType]
    : storageType[Storage.Local];

  /**
   * @description Storage getter
   * Retrieves an item from Local/Session Storage if present
   * @author Luca Cattide
   * @param {string} item
   * @returns {*}  {(string | null)}
   */
  const getStorage = (item: string): string | null => {
    let element = null;

    if (window[type as keyof typeof window]) {
      element = storage.getItem(item);
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
    if (window[type as keyof typeof window]) {
      storage.setItem(item, value);
    }
  };

  /**
   * @description Storage removal
   * Deletes one or multiple items from the Local/Session Storage
   * @author Luca Cattide
   * @date 19/07/2025
   * @param {Array<string>} items
   */
  const deleteStorages = (items: Array<string>): void => {
    if (window[type as keyof typeof window]) {
      items.forEach((item) => {
        storage.removeItem(item);
      });
    }
  };

  return { getStorage, setStorage, deleteStorages };
};

export default useStorage;
