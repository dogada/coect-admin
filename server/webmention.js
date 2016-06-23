var debug = require('debug')('admin:webmention')
var request = require('request')
var async = require('async')
var tflow = require('tflow')
var webmention = require('coect-umedia').webmention

/**
   Print error and ignore it.
*/
function wmHandler(wm, cb) {
  webmention.onReceive(wm, (err, res) => {
    if (err) console.error(err)
    cb(null, err || res)
  })
}

exports.check = function(req, res, next) {
  var count = req.query.count || 20
  //var url =
  //`https://webmention.io/api/mentions?perPage=${count}&domain=${config.defaults.host}&token=${config.webmentionIo.token}`
  const config = req.app.config
  var url = `https://webmention.io/api/mentions.jf2?perPage=${count}&domain=${config.defaults.host}&token=${config.webmentionIo.token}`
  debug('url', url)
  var flow = tflow([
    () => request({url: url, json: true}, flow),
    (response, body) => {
      if (response.statusCode !== 200) return flow.fail('Invalid response:', response.statusCode)
      if (!body.children) return flow.fail('No links')
      debug(`Received ${body.children.length} links.`)
      async.mapSeries(body.children.reverse(), wmHandler, flow)
    }
  ], next)
}
