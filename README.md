[![npm version](https://badge.fury.io/js/gemfury-publish.svg)](https://badge.fury.io/js/gemfury-publish)
[![Dependency Status](https://david-dm.org/mondora/gemfury-publish.svg)](https://david-dm.org/mondora/gemfury-publish)
[![devDependency Status](https://david-dm.org/mondora/gemfury-publish/dev-status.svg)](https://david-dm.org/mondora/gemfury-publish#info=devDependencies)

# ⚠️ deprecation-notice ⚠️

As of 30 october 2018 this repository is being deprecated.

Please refer to the official [npm publish](https://docs.npmjs.com/cli/publish).

Also, a blueprint for `.npmrc` and [gemfury.io](https://gemfury.com/help/npm-registry) is provided:

```bash
always-auth=true
registry=https://<gemfury-registry>/<username>/
//<gemfury-registry>/<username>/:_authToken=<token>
```

# gemfury-publish

Publish private npm packages on [gemfury](http://fury.io).

## Install

```sh
npm i gemfury-publish
```

## Use

```sh
$(npm bin)/gemfury-publish
```
