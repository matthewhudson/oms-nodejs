# Microservice template for NodeJS

![Microservice](https://img.shields.io/badge/microservice-ready-brightgreen.svg?style=for-the-badge)
[![Build status](https://img.shields.io/travis/com/microservices/node/master.svg?style=for-the-badge)](https://travis-ci.com/microservices/node)

An OMG template for NodeJS + ExpressJS.

## Usage

```coffee
# Storyscript
your_service message name: 'Service'
# {"message": "Hello Service"}
```

## Test

## OMG Test Runner

```sh
> omg run message -a name=Service
ℹ Building Docker image
…
✔ Built Docker image with name: omg/l2hvbwuvc2vil2fzew5jes9ydwj5
✔ Started Docker container: 1c8a91688261
✔ Health check passed
✔ Ran action: `message` with output: {"message":"Hello Service"}
✔ Stopped Docker container: 1c8a91688261
```

## Curl Test Request

```sh
curl -X POST -d "name=Service" http://localhost:8080/message
```
