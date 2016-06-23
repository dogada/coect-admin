'use strict';

class CoectApp {

  constructor({site, url, api}) {
    this.site = site
    this.url = url
    this.api = api
  }

}

module.exports = class CoectAdminApp extends CoectApp {
  constructor(opts) {
    super(opts)
  }
  
}
