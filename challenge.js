/**
 * Note: Read README first.
 */

/**
 * Some utility functions that may or may not be useful.
 * Feel free to modify these.
 */
var usernameid;
var pwid;
var sbtbtnid;
var url;
var mobem;
var name;
/**
* Gets the URL and assigns username, password, submit button selector values (ID, Name, Class) to the global variables usernameid,
pwid, sbtbtnid. I have used pattern matching in switch case to assign respective values based on URL. 
*/
function getURL(){
url=window.location.href;
switch(true) {
        case /paypal/.test(url):
        usernameid = "#email";
        pwid="#password";
        sbtbtnid="#btnLogin";
        break;

        case /facebook/.test(url):
        usernameid = "#email";
        pwid="#pass";
        sbtbtnid="#loginbutton";
        break;

        case /secure.bankofamerica/.test(url):
        usernameid = "#enterID-input";
        pwid="#tlpvt-passcode-input";
        sbtbtnid="[name=enter-online-id-submit]";
        break;

        case /bankofamerica/.test(url):
        usernameid = "#onlineId1";
        pwid="#passcode1";
        sbtbtnid="#hp-sign-in-btn";
        break;

        case /yahoo/.test(url):
        usernameid = "#login-username";
        pwid="#login-passwd";
        sbtbtnid="#login-signin";
        break;

        case /citi/.test(url):
        usernameid = "#usernameMasked";
        pwid="#password";
        sbtbtnid="#signInBtn";
        break;

        case /instagram/.test(url):
        usernameid = "[name=username]";
        pwid="[name=password]";
        sbtbtnid="button:contains('Sign')";
        mobem="[name=emailOrPhone]";
        name="[name=fullName]";
        break;
    
}

}


function getFormField() {
  return $(usernameid).closest('form');
}
/**
 * Logs in into a website.
 *
 * Logs in into a website using the username and password
 * provided.
 * Check the code below for an example that works with https://facebook.com
 */
window.loginWithCredentials = function(username, password) {
getURL();
  //
  // XXX: Modify this code, if necessary, to work on more sites.
  //
  if(url.indexOf("instagram") >= 0)
  {
    $(usernameid).val(username);
    $(pwid).val(password);
    $(mobem).val(username);
    $(name).val('James Bond');
  }
else{
  $(usernameid).val(username);
  $(pwid).val(password);
}
  setTimeout(() => {
    $(sbtbtnid).click();
  }, 1000);

};


/**
 * Detects form fields.
 *
 * Should return an object with the following keys: 'form', 'submitButton', 'username', and 'password'
 * The values should be JQuery elements.
 * Check the code below for an example that works with https://facebook.com
 */
window.detectFormFields = function() {

getURL();

  //
  // XXX: Modify this code, if necessary, to work on more sites.
  //
  return {
    form: getFormField(),
    submitButton: sbtbtnid,
    username: usernameid,
    password: pwid,
    email: mobem,
    fname: name
  };

};

/**
 * Returns an object of the following form:
 * {
 *    username: '',
 *    password: ''
 * }
 * where the values correspond to the credentials from the form.
 * Check the code below for an example that works with https://facebook.com
 */
window.obtainFieldsValues = function() {
getURL();
  //
  // XXX: Modify this code, if necessary, to work on more sites.
  //

  return {
    username: $(usernameid).val(),
    password: $(pwid).val(),
    email:$(mobem).val(),
    fname:$(name).val()
  };



};
