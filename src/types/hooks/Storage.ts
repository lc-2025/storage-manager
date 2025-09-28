enum Storage {
  Local = 'local',
  Session = 'session',
}

type TUseStorage = {
  getStorage: (item: string) => string | null;
  setStorage: (item: string, value: string) => void;
  deleteStorages: (items: Array<string>) => void;
};

type TUseStorageType = 'local' | 'session';

export { Storage };
export type { TUseStorage, TUseStorageType };
