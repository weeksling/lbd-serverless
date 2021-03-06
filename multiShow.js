'use strict';

// Require Logic
var lib = require('./lib');

// Lambda Handler
module.exports = function(event, context) {
  lib.multiShow(event, function(error, response) {
    return context.succeed(lib.lambdaProxyResponse(200, response));
  });
};