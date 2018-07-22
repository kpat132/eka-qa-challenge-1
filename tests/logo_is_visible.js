//Same test as the one given because it will pass when the logo is visible to the user.
const globals = require('./settings/globals.js'); //we can retrieve the variable url from the globals file;

module.exports = {
  'Logo should be visible': (browser) => {
    return browser
      .url(globals.url)     //Opens up url in browser
      .waitForElementVisible('.nav-logo', 10000) //waits 10 secs until the class nav-logo is shows on the site.
      .end();   //Ends the test;
  }
}