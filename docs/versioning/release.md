---
title: Version release
---

# Version release

_[Original document](https://venturehacks.quip.com/1LMlAuN5Z03u/Halo-How-to-publish-a-new-release)_

## Background

Halo is hosted on Gemfury.

There’s an existing `@angellist` NPM namespace, but one should not be required access to push a new package version.

## Prerequisites

1. Get an invite to Gemfury from DevOps (or @Drew)
2. Get added as a collaborator by an admin on Gemfury

## How-to

1. Add required global variables
   `RELEASE_IT_GITHUB_TOKEN=a162c67693553e6b4f5e29993abc2ec95b6bede3`

2. Login using your Gemfury credentials

```shell
npm config set always-auth true
npm login --registry=https://npm.fury.io/angellist/
```

3. Use [release-it](https://github.com/release-it/release-it) to publish a new version

- Depending on the version bump you want to execute, do one of the following: `yarn run release-major`, `yarn run release-minor`, `yarn run release-patch`

4. Running the aforementioned task will:

- Bump version (in `package.json`)
- Git commit, tag and push
- Run tests
- Generate CHANGELOG
- Create a Halo Release on GitHub
- Publish to NPM/Gemfury
