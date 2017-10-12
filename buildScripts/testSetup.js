// This file is not transpiled so it must use commonJs or ES5

//Register Babel to transpile before our tests run.
require('babel-register')();

//disable webpack features that Mocha does not undertand.
require.extensions['.css'] = function () {};
