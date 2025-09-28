# Storage Manager

A browser storage library.

[![Storage Manager CI](https://github.com/lc-2025/storage-manager/actions/workflows/ci.yml/badge.svg)](https://github.com/lc-2025/storage-manager/actions/workflows/ci.yml) [![Storage Manager CD](https://github.com/lc-2025/storage-manager/actions/workflows/cd.yml/badge.svg)](https://github.com/lc-2025/storage-manager/actions/workflows/cd.yml)

## About

An out-of-the-box `Storage API` _NPM_ package to manage browser storage actions.

## Features

- Both Local than Session objects
- Usable as a standalone utility as well as a _React_ hook

## Stack

- TypeScript
- Bash

### Environments

- DOM

### Frameworks

- Jest

### Linters/Plugins

- ESLint
- Prettier

### Compilers

- TypeScript

### Testing

- Jest

### Versioning

- GitHub
- Husky

### Deployment

- NPM registry

## Getting Started

The package production version is available on _NPM_ at []().
For any contribution, maintanance and/or trial needs, please refer to the following specifications.

### Installation

On terminal:

```bash
npm i @lc/storage-manager
```

### Usage

```js
import useStorage from '@lc/storage-manager';

// As a React hook
const myComponent = () => {
  // `localStorage` mode
  const { setStorage, getStorage, deleteStorages } = useStorage();

  const handleSomething = () => {
    //...
    setStorage('myItem', '123');
    //...
  }
  //...
  return (
    //...
  );
}

// As a standalone utility
// `sessionStorage` mode
const { setStorage, getStorage, deleteStorages } = useStorage('session');

const myFunction = () => {
  //...
  const value = getStorage('myItem');
  //...
  deleteStorages(['myItem']);
}
```

### API

- **Mode**: [`local` | `session`] (default: `local`)

Defines the Storage API object to be used

```js
  // Use `sessionStorage` API
  const { setStorage } = useStorage('session');
```

- **Get**

Invokes the `Storage API` `get` method

```ts
  getStorage(item: string): string | null
```

- **Set**

Invokes the `Storage API` `set` method

```ts
  setStorage(item: string, value: string): void
```

- **Delete**

Invokes the `Storage API` `delete` method on a provided collection

```ts
  deleteStorage(items: Array<string>): void
```

## Contributing

### Setting Up

On terminal, from project root:

- To install dependencies

```bash
npm run setup
```

- To lint the sources

```bash
npm run lint
```

- To build the production version

```bash
npm run build
```

### Tests

#### Unit

On terminal, from project root:

- To run the unit/integration tests in `development` mode

```bash
npm run test
```

- To run the tests in `testing` mode (staging or content-integration/delivery environments)

```bash
npm run test:ci
```

### Deploy

_Storage Manager_ is integrated and delivered to production via _GitHub Actions_ workflows pipeline, where the package is being set up, tested and built.
Then the artifacts are deployed on _NPM_ registry available at []().

- To deploy the production version

```bash
npm run deploy
```

Please read more about required best practices on the specific [contributing reference document](./.github/CONTRIBUTING.md).
