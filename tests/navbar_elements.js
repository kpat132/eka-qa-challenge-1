const globals = require('./settings/globals.js');
let url = globals.url;

module.exports = {
  
  'Checks if solutions tab goes to solutions page': (browser) => {
    return browser
      .url(url)
      .waitForElementVisible('.solutions-link', 10000)
      .click('.solutions-link')
      .waitForElementVisible('.solutions-container', 10000)
  },
  'Checks if services tab goes to services page': (browser) => {
    return browser
      .url(url)
      .waitForElementVisible('.services-link', 10000)
      .click('.services-link')
      .waitForElementVisible('.services-container', 10000)
  },
  'Checks if company tab goes to company page': (browser) => {
    return browser
      .url(url)
      .waitForElementVisible('.company-link', 10000)
      .click('.company-link')
      .waitForElementVisible('.company-container', 10000)
      .end();
  }

}
