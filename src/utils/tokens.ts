enum Action {
  Delete = 'delete',
  Get = 'get',
}

enum Storage {
  Local = 'localStorage',
  Session = 'sessionStorage',
}

const TEST = {
  ITEM: {
    NAME: 'test-storage',
    VALUE: '123',
  },
};

enum Type {
  Local = 'local',
  Session = 'session',
}

export { Action, Storage, TEST, Type };
