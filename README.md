# dare assessment

## Install

```bash
$ npm i
```

## Usage

```bash
$ nodemon
```
Alternativily, if dont have nodemon installed can execute <b>npm i -g nodemon</b> to install it or just <b>npm run start</b>

## Run tests

```bash
$ npm run test
```

## Notes:

- Used Typescript to precompiled and imports avantatges.
- Token has a short expiration time to easy manually testing.
- Minimal testing with jest.
- A possible TO-DO could be save the token from INSURANCE API in a jwt instead of the server memory and then decrypt to get user/pass and renovate the token if expired.

