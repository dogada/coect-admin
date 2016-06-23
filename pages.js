'use strict';

function page(path, view) {
  return {path, view, aside: 'admin-sidebar'}
}

module.exports = [
  page('', 'admin-dashboard'),
  page('tasks', 'admin-tasklist'),
  page('umedia/:model', 'admin-entrylist'),
  page('umedia/:model/:type', 'admin-entrylist'),
]

