var coect = require('coect')

exports.exception = function   () {
  throw new Error('Test error')
}

exports.error = function(req, res, next) {
  next(new Error('Test Error'))
}

exports.strError = function(req, res, next) {
  next('Error as string')
}

exports.httpError = function(req, res, next) {
  var code = parseInt(req.query.code || 500, 10)
  next(new coect.HttpError(code, 'Test HttpError'))
}

