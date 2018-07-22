const globals = require('./settings/globals.js');
let url = globals.url;

module.exports = {

  'user enters email': (browser) => {
  return browser
  .url(url)
  .setValue('input[name="email2"]','krishna3a@yahoo.com')
  .click('button[type="submit"')
  .pause(1000)
  .waitForElementVisible('#joinListModal',1000)

  end();
  }
}
