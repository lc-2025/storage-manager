import useStorage from '../hooks/Storage';
import { Action, TEST, Type } from '../utils/tokens';
import {
  TUseStorageDelete,
  TUseStorageGet,
  TUseStorageSet,
} from '../types/hooks/Storage';

describe('Package Unit Test', () => {
  const { ITEM } = TEST;
  const { NAME, VALUE } = ITEM;

  /**
   * @description Storage getter assertion helper
   * @author Luca Cattide
   * @param {Array<string>} items
   * @param {TUseStorageGet} storage
   * @param {Action} action
   */
  const assertAction = (
    items: Array<string>,
    storage: TUseStorageGet,
    action: Action,
  ): void => {
    items.forEach((item) => {
      action === Action.Get
        ? expect(storage(item)).toBe(VALUE)
        : expect(storage(item)).toBeNull();
    });
  };

  /**
   * @description Storage removal assertion helper
   * @author Luca Cattide
   * @param {TUseStorageDelete} deleteStorages
   * @param {TUseStorageGet} getStorage
   * @param {TUseStorageSet} setStorage
   */
  const assertDeletion = (
    deleteStorages: TUseStorageDelete,
    getStorage: TUseStorageGet,
    setStorage: TUseStorageSet,
  ): void => {
    const item = `${NAME}-1`;
    const items = [NAME, item];

    setStorage(item, VALUE);
    assertAction(items, getStorage, Action.Get);
    deleteStorages(items);
    assertAction(items, getStorage, Action.Delete);
  };

  describe('Local Storage Unit Test', () => {
    const { setStorage, getStorage, deleteStorages } = useStorage();

    // Setup
    beforeEach(() => {
      setStorage(NAME, VALUE);
    });

    test(`It gets a new item via '${Type.Local}'`, () => {
      assertAction([NAME], getStorage, Action.Get);
    });

    test(`It deletes multiple items via '${Type.Local}'`, () => {
      assertDeletion(deleteStorages, getStorage, setStorage);
    });
  });

  describe('Session Storage Unit Test', () => {
    const { setStorage, getStorage, deleteStorages } = useStorage(
      Type.Session,
    );

    // Setup
    beforeEach(() => {
      setStorage(NAME, VALUE);
    });

    test(`It gets a new item via '${Type.Session}'`, () => {
      assertAction([NAME], getStorage, Action.Get);
    });

    test(`It deletes multiple items via '${Type.Session}'`, () => {
      assertDeletion(deleteStorages, getStorage, setStorage);
    });
  });
});
