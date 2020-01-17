// add listener to open pop up login form
export function openPopUpLoginForm(openButton, targetElem) {
    openButton.addEventListener('click', function () {
        targetElem.classList.add('display-on');
    })
}

export function cancelPopUpLoginForm(openButton, targetElem) {
    openButton.addEventListener('click', function () {
        targetElem.classList.remove('display-on');
    })
}