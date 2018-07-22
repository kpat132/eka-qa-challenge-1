const globals = require('./settings/globals.js');
let url = globals.url;

module.exports = {
  'click contact us': browser => {
    return browser 
    .url(url)
    .click('#nav-contact-us')
    .pause(1000)
    .waitForElementVisible('#myModal',1000)
    .assert.containsText(".m-top-60.modal-title.sm-font-29",'HOW CAN WE HELP?')
   .end();
   }
   
}