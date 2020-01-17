// add listener to open pop up login form
export function openPopUpLoginForm(openButton, targetElem) {
    openButton.addEventListener('click', function () {
        targetElem.classList.add('display-on');
        openButton.style.display = 'none';
    })
}

export function cancelPopUpLoginForm(cancelButton, targetElem, retrieveElem) {
    cancelButton.addEventListener('click', function () {
        targetElem.classList.remove('display-on');
        retrieveElem.style.display = 'block';
    })
}