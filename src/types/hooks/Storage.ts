type TUseStorage = {
  getStorage: TUseStorageGet;
  setStorage: TUseStorageSet;
  deleteStorages: TUseStorageDelete;
};

type TUseStorageDelete = (items: Array<string>) => void;

type TUseStorageGet = (item: string) => string | null;

type TUseStorageSet = (item: string, value: string) => void;

type TUseStorageType = 'local' | 'session';

export type {
  TUseStorage,
  TUseStorageDelete,
  TUseStorageGet,
  TUseStorageSet,
  TUseStorageType,
};
