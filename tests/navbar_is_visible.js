const globals = require('./settings/globals.js');
let url = globals.url;

module.exports = {
  'Checks visibility of navbar elements': browser => {
    return browser
      .url(url)
      .waitForElementVisible('.nav.navbar-nav.navbar-right', 10000)
      .waitForElementVisible('.solutions-link', 10000)
      .waitForElementVisible('.services-link', 10000)
      .waitForElementVisible('.company-link', 10000)
      .waitForElementVisible('#nav-contact-us', 10000)
      .end()
  }
}
