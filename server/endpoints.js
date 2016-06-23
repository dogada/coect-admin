'use strict';

const api = require('./api')
const err = api.error

module.exports = [
  {path: '/dashboard', get: api.dashboard},
  {path: '/webmentionio/check', get: api.webmention.check},
  {path: '/error/exception', get: err.exception},
  {path: '/error/error', get: err.error},
  {path: '/error/str', get: err.strError},
  {path: '/error/http', get: err.httpError},
]
