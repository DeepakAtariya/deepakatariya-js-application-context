# Application Context Scope (ac-scope)

[![npm version](https://img.shields.io/npm/v/axios.svg?style=flat-square)](https://www.npmjs.com/package/@deepakatariya/ac-scope)

## Table of Contents

  - [Description](#description)
  - [Important](#important)
  - [Recommendation & Use-Case](#recommendation)
  - [Features](#features)
  - [Installing](#installing)
  - [Example](#example)
  - [Credits](#credits)
  - [License](#license)

## Description
ac-scope lets you load your resource in the global environment/scope and lets you access it from anywhere in your application while developing.
#### I recommend you to import this package while starting up the application (In bootloader files).

### There are multiple use cases of this package, so that you can use those resources from anywhere in your application while coding:
  - Loading and maintaining database connection.
  - Logging system can be used in application context it can save you from importing everytime.
  - Keeping logged in user details.
  - Keeping configuration details which should be loaded in your app once by env files, config jsons, etc .

Please comment for other use cases as well.

## Important

- Now you can access your resources directly your `key` (please see the example below) or I have defined a variable name `applicationContext`. To use, I recommend `applicationContext`  to set and get your resource. It is compatible with most of the javascript based framework such as react.js, node.js, etc

## Features

- Set value in application context (gloabally) in the form of {key,value}.
- Get value in application context (gloabally).

## Installing
Using npm:
```bash
$ npm install ac-scope
```

## Example
In order to set the variable in the application context, use the following approach:
```js
applicationContext.set("key", "value");
```

In order to access your resources in the application context using `get('key')` method using default keyword `applicationContext` , use the following approach:
```js
applicationContext.get("key");
```

In order to access your resources in the application context using directky key with default keyword `applicationContext.key`, use the following approach:
```js
applicationContext.key;
```

In order to access your resources in the application context using directky key without default keyword `key`, use the following approach:
```js
const s = key //using directly `key` saves you from writing `applicationContext` again and again;
```

You can also free up the space by deleting, for doing use the following approach:
```js
applicationContext.delete("key");
```
Wonder! what is the source of this variable? It is actually loaded in your global scope when you imported/used this package in your application.

## Credits
It is wrapper code that uses global variables provided by environment such as browser, node default modules, v8, etc

## License
[MIT](LICENSE)
