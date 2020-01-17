import {openPopUpLoginForm, cancelPopUpLoginForm} from './listeners.js';

let openButton = document.getElementById('open-button');
let cancelButton = document.getElementById('cancel_btn');
let popUpForm = document.getElementById('myForm');


// add listeners to buttons
openPopUpLoginForm(openButton, popUpForm); // open form, hide log in button
cancelPopUpLoginForm(cancelButton, popUpForm, openButton); // close form, retrieve log in button

// let popUpLoginMenu = document.getElementById()

//


// function openForm() {
//     document.getElementById("myForm").style.display = "block";
// }
//
// function closeForm() {
//     document.getElementById("myForm").style.display = "none";
// }