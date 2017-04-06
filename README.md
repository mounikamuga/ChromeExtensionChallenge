I have removed the functions, getUsernameField(), getPasswordField() and getSubmitButton() that were written to get username, password and submit button values from the forms  and used a new function getURL to check the URL of the current page and assign the username, password, submit button values(id, name, class name) to variables. 
These variables are then used in the three methods instead of calling the functions.
I had to change the code in content_script.js to make it work for instagram page which has more than 2 fields to login. 
I added a few lines of code in it to make it work for the extra fileds in instagram.
