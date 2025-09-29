import useStorage from '../hooks/Storage';
import { Action, Storage, TEST } from '../utils/tokens';
import {
  TUseStorageDelete,
  TUseStorageGet,
  TUseStorageSet,
} from '../types/hooks/Storage';

describe('Package Unit Test', () => {
  const { ITEM, TYPE } = TEST;
  const { NAME, VALUE } = ITEM;
  const { LOCAL, SESSION } = TYPE;

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
   * @param {TUseStorageDelete} deleteStotages
   * @param {TUseStorageGet} getStorage
   * @param {TUseStorageSet} setStorage
   */
  const assertDeletion = (
    deleteStotages: TUseStorageDelete,
    getStorage: TUseStorageGet,
    setStorage: TUseStorageSet,
  ): void => {
    const item = `${NAME}-1`;
    const items = [NAME, item];

    setStorage(item, VALUE);
    assertAction(items, getStorage, Action.Get);
    deleteStotages(items);
    assertAction(items, getStorage, Action.Delete);
  };

  describe('Local Storage Unit Test', () => {
    const { setStorage, getStorage, deleteStotages } = useStorage();

    // Setup
    beforeEach(() => {
      setStorage(NAME, VALUE);
    });

    test(`It gets a new item via '${LOCAL}'`, () => {
      assertAction([NAME], getStorage, Action.Get);
    });

    test(`It deletes multiple items via '${LOCAL}'`, () => {
      assertDeletion(deleteStotages, getStorage, setStorage);
    });
  });

  describe('Session Storage Unit Test', () => {
    const { setStorage, getStorage, deleteStotages } = useStorage(
      Storage.Session,
    );

    // Setup
    beforeEach(() => {
      setStorage(NAME, VALUE);
    });

    test(`It gets a new item via '${SESSION}'`, () => {
      assertAction([NAME], getStorage, Action.Get);
    });

    test(`It deletes multiple items via '${SESSION}'`, () => {
      assertDeletion(deleteStotages, getStorage, setStorage);
    });
  });
});
