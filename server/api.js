var debug = require('debug')('admin:api')
var tflow = require('tflow')
var coect = require('coect')

exports.dashboard = function(req, res, next) {
  debug('dashboard', next)
  const db = req.app.db
  var flow = tflow([
    () => db.Entity.stat(flow),
    (stat) => db.User.stat(flow.join(stat)),
    (stat, userStat) => flow.next(userStat.concat(stat)),
    (stat) => {
      stat.sort((a, b) => a.last_created - b.last_created)
      flow.next({stat: stat.reverse()})
    }
  ], next)
}

exports.error = require('./error')

exports.webmention = require('./webmention')
