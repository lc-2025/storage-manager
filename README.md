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

### Usage

TODO:

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
