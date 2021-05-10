# dare assessment

## Install

```bash
$ npm i
```

## Usage

```bash
$ nodemon
```

## Run tests

```bash
$ npm run test
```

## Notes:

- Used Typescript to precompile and imports advantatges.
- Has no e2e testing because it is understood that needs a front to emulate the action of an user.
- Token has a short expiration time to easy manually testing.
- A possible TO-DO could be save the token from INSURANCE API in a jwt instead of the server memory and then decrypt to get user/pass and renovate the token if expired.

