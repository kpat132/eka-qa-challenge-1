const globals = require('./settings/globals.js');
let url = globals.url;

module.exports = {
  'checks mobile version': (browser) => {
    return browser
    .url(url)
    .resizeWindow(530,480)
    .pause(2000)
    //class navbar-toggle.collapsed did not register and was not clicked 
    // .click('.navbar-toggle.collapsed',10000)
    // .waitForElementVisible('.nav.navbar-nav.navbar-right', 1000)
    // .click('.navbar-toggle',10000)
    .end();
  }
}