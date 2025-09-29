enum Action {
  Delete = 'delete',
  Get = 'get',
}

enum Storage {
  Local = 'local',
  Session = 'session',
}

const TEST = {
  ITEM: {
    NAME: 'test-storage',
    VALUE: '123',
  },
  TYPE: {
    LOCAL: 'localStorage',
    SESSION: 'sessionStorage',
  },
};

export { Action, Storage, TEST };
