const globals = require('./settings/globals.js');
let url = globals.url;

module.exports = {

  'User enters email, Modal pops up': (browser) => {
    return browser
      .url(url)
      .pause(5000)
      .setValue('input[name="email2"]', 'krishna3a@yahoo.com') //Fill the newsletter input field with the email
      .click('button[type="submit"')    //submit information
      .pause(1000)
      .waitForElementVisible('#joinListModal', 10000)  //id joinlistmodal shows up and should be visible.
      .end();
  }
}
