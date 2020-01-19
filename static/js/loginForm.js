import {openPopUpLoginForm, cancelPopUpLoginForm, submitFromLoginForm} from './listeners.js';

let openButton = document.getElementById('open-button');
let cancelButton = document.getElementById('cancel_btn');
let popUpForm = document.getElementById('myForm');
let loginForm = document.getElementById('login_form');

// add listeners to buttons
openPopUpLoginForm(openButton, popUpForm); // open form, hide log in button
cancelPopUpLoginForm(cancelButton, popUpForm, openButton); // close form, retrieve log in button
submitFromLoginForm(loginForm); // blocking default 'submit by form request' functionality
// send data from a form
