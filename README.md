# Halo

Halo is our design system. It enables product teams to ship rapidly by reducing decisions made during the development process.

&nbsp;

[![Build status](https://badge.buildkite.com/71f435fbeaf326479fce6ce41959cf3c7376de8d29367666a7.svg?branch=master)](https://buildkite.com/angellist/halo) [![Netlify Status](https://api.netlify.com/api/v1/badges/87d1d78b-b9dc-440b-ba5a-90f89afce587/deploy-status)](https://app.netlify.com/sites/halo-design-system/deploys)

&nbsp;

## Develop

### Documentation

```bash
# checkout code
git clone git@github.com:venturehacks/halo.git
cd halo

# dependencies
yarn

# VSCode (optional)
open halo.code-workspace

# Gatsby development server
yarn dev
```

&nbsp;

### Test

```bash
# run entire suite (jest)
yarn test

# unit tests only (no linters, etc.)
yarn test:dev

# author new unit test iteratively (watch new/changed tests)
yarn test:dev:watch

# update jest snapshots
yarn test:snapshot-update
```

### Build

```bash
# compile Halo module (rollup)
yarn build

# gatsby documentation site
yarn build:docs

# generate icons documentation from SVGs [src/components/icons]
yarn icons

# clean cache, working directories
yarn clean
```

### Lint

```bash
# lint with autofix (tslint + eslint)
yarn lint:fix

# format with prettier
yarn pretttier:fix
```

### Release

```bash
# Patch release (safe, non-breaking changes, bugfixes)
# 1.0.0 => 1.0.1
yarn release:patch

# Minor release (breaking changes, significant features)
# 1.0.0 => 1.1.0
yarn release:patch
```

&nbsp;

<br />

## Installation

Halo requires one CSS entry point. Include _once_ in your application.

```scss
// main.scss (or similar "layout" file that is included once)

:global {
  @import 'halo/dist/esm/halo.css';
}
```

&nbsp;

<br />

## Usage

### React / JSX

```tsx
import { Panel, Bracket, AvatarLockup, Button } from 'halo';

return (
  <Panel title="Welcome to AngelList" byline="Talent is our talent.">
    <Bracket>
      <AvatarLockup
        imageUrl="https://avatars1.githubusercontent.com/u/194885"
        title="Drew"
      />
      <Button variant="gray">Invite</Button>
    </Bracket>
    <Bracket>
      <AvatarLockup
        imageUrl="https://avatars1.githubusercontent.com/u/56262247"
        title="Vishal"
      />
      <Button variant="gray">Invite</Button>
    </Bracket>
  </Panel>
);
```

&nbsp;

### Scss

```scss
// styles/_base.scss

// single import grants all variables, mixins, etc.
@import '~halo/scss/halo';

.foo {
  color: $dark-aaaa;
}

.bar {
  @include flex-row;
}
```

&nbsp;

<br />

## Team

- **Engineering**
  - Drew Lustro
  - Vishal Jeet
- **Design**
  - Cristian Valdes

&nbsp;

<br />

&nbsp;

### Contributors

- **Engineering**
  - Tiffany Wu
  - Mike Dee
  - Max Lustig
- **Design**
  - Andres Santanilla
  - Shane Zucker
  - Lily Chen
  - Stephen Varaday

&nbsp;

<br />

<img
  src="https://user-images.githubusercontent.com/194885/54588593-b2a26580-49e0-11e9-99c2-8a702f69747a.gif"
  width="78"
  alt="heloswhere"
/>
