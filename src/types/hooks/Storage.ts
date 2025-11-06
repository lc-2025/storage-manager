type TUseStorage = {
  getStorage: TUseStorageGet;
  setStorage: TUseStorageSet;
  deleteStorages: TUseStorageDelete;
};

type TUseStorageCheck = {
  isSupported: Storage;
  storageSelected: Storage;
};

type TUseStorageDelete = (items: Array<string>) => void;

type TUseStorageGet = (item: string) => string | null;

type TUseStorageSet = (item: string, value: string) => void;

type TUseStorageType = 'local' | 'session';

export type {
  TUseStorage,
  TUseStorageCheck,
  TUseStorageDelete,
  TUseStorageGet,
  TUseStorageSet,
  TUseStorageType,
};
