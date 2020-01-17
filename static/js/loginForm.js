import {openPopUpLoginForm, cancelPopUpLoginForm} from './listeners.js';

let openButton = document.getElementById('open-button');
let cancelButton = document.getElementById('cancel_btn');
let popUpForm = document.getElementById('myForm');

// add listeners to buttons
openPopUpLoginForm(openButton, popUpForm);
cancelPopUpLoginForm(cancelButton, popUpForm);

// let popUpLoginMenu = document.getElementById()

//


// function openForm() {
//     document.getElementById("myForm").style.display = "block";
// }
//
// function closeForm() {
//     document.getElementById("myForm").style.display = "none";
// }