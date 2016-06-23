'use strict';

var debug = require('debug')('admin:index')
var coect = require('coect')


exports.defaultRoutes = function(router) {
  return coect.router.routeAPI(router, require('./endpoints'))
}
