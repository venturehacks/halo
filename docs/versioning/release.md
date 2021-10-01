---
title: Version release
---

# Version release

_[Original document](https://venturehacks.quip.com/1LMlAuN5Z03u/Halo-How-to-publish-a-new-release)_

## Background

Halo is hosted on Gemfury.

There’s an existing `@angellist` NPM namespace, but one should not be required access to push a new package version.

## Prerequisites

1. Get an invite to Gemfury from DevOps (or @drew)
2. Get added as a collaborator by an admin on Gemfury

## How-to

### Step 1. Add required global variables to shell

```sh
# expires 2021-09-30
RELEASE_IT_GITHUB_TOKEN=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
```

If you need to generate a new token, [click here](https://github.com/settings/tokens/new?scopes=repo&description=Halo%20release-it).

### Step 2. Login using your Gemfury credentials

```shell
npm config set always-auth true
npm login --registry=https://npm.fury.io/angellist/
```

### Step 3. Use [release-it](https://github.com/release-it/release-it) to publish a new version

 Depending on the version bump you want to execute, do one of the following:

- `yarn run release-major`
- `yarn run release-minor`
- `yarn run release-patch`

1. Running the aforementioned task will:

- Bump version (in `package.json`)
- Git commit, tag and push
- Run tests
- Generate CHANGELOG
- Create a release in the Halo GitHub repository
- Publish to NPM/Gemfury
