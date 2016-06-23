'use script';

var debug = require('debug')('admin:index')
var riot = require('riot')

function pageHandler(page) {
  return (ctx) => {
    Site.update({
      page: {
        view: page.view,
        main: page.main,
        aside: page.aside,
        title: page.title,
        data: page.data,
        path: ctx.path,
        params: ctx.params
      }
    })
  }
}

const pages = require('../pages')
const App = require('./app')
const {Api} = require('coect')

const init = function({app, pages, route}) {
  debug('init', app, route, pages)
  riot.mixin('coect-admin', {app, api: app.api})
  for (let page of pages) {
    debug('page', app.url(page.path), page)
    route(app.url(page.path), pageHandler(page))
  }
}

const defaultInit = function({url, route}) {
  debug('defaultInit', url)
  const app = new App({
    site: Site,
    api: new Api({url}),
    url})
  return init({app, pages, route})
}

module.exports = {pages, App, Api, init, defaultInit}
