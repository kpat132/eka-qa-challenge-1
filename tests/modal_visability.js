const globals = require('./settings/globals.js');
let url = globals.url;

module.exports = {
  'Modal visability when "contact us" is clicked': browser => {
    return browser 
    .url(url)
    .click('#nav-contact-us')   //clicks on button Contact Us with ID:nav-contact-us
    .pause(1000)
    .waitForElementVisible('#myModal',1000)   //the modal id shoes up and should be visible
    .assert.containsText(".m-top-60.modal-title.sm-font-29",'HOW CAN WE HELP?')     //modal contains the text: HOW CAN WE HELP
   .end();
   }
   
}