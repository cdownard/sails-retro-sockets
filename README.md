# sails-retro-sockets

## Purpose

This is a spike to test out [Sails](http://sailsjs.org). So far so good. Easy
setup and easy local dev.

## Installation

Assuming you're on a mac and installed node etc via brew:

```bash
$> git clone git@github.com:cdownard/sails-retro-sockets.git
$> cd sails-retro-sockets/
$> npm install # This may require npm install -g sails as well
```

### Issues

I don't know what went wrong with my Node installation but its bin directory
wasn't sym-linked. So I manually sym-linked sails for now.

```
$> ln -s /usr/local/Cellar/node/5.1.1/libexec/npm/bin/ /usr/local/bin/sails
# Note: /usr/local/bin should be on your path, but make sure
```

## Running

Once you're cloned and npm installed, just run `npm start`. All the sails docs
will point you at running sails lift. `npm start` will do the same thing but
use `babel-node` to start the process so we get ES6 support.

## License

TBD
