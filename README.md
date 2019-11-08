# Open Microservice template for NodeJS

[![Build Status](https://travis-ci.com/matthewhudson/oms-nodejs.svg?branch=master)](https://travis-ci.com/matthewhudson/oms-nodejs)
[![OMS Validation](https://github.com/matthewhudson/oms-nodejs/.github/workflows/oms.yml/badge.svg)](https://github.com/matthewhudson/oms-nodejs/.github/workflows/oms.yml/badge.svg)


An Open Microservices template for NodeJS + ExpressJS.

## Setup

Latest LTS version of Node.js 10.
[See Releases](https://nodejs.org/en/about/releases/).

```sh
yarn
```

First, install the [Commitizen cli](https://github.com/commitizen/cz-cli) tools:

```shell
npm install commitizen -g
```

Next, initialize your project to use the `cz-conventional-changelog` adapter by
typing

```sh
commitizen init cz-conventional-changelog --yarn --dev --exact
```

Use the following to replace `git commit`:

```sh
yarn run commit
```

## Test

## OMS Test Runner

```sh
> oms run message -a name=Service
ℹ Building Docker image
…
✔ Built Docker image with name: omg/l2hvbwuvc2vil2fzew5jes9ydwj5
✔ Started Docker container: 1c8a91688261
✔ Health check passed
✔ Ran action: `message` with output: {"message":"Hello Service"}
✔ Stopped Docker container: 1c8a91688261
```
