import {pageDownload} from './apiManager.js'
import {fillTableOfPlanets, prevBtnEl, nextBtnEl} from './planets.js'
// add listener to open pop up login form
export function openPopUpLoginForm(openButton, targetElem) {
    openButton.addEventListener('click', function () {
        targetElem.classList.add('display-on');
        openButton.style.display = 'none';
    })
}

// add listener to close pop up login form
export function cancelPopUpLoginForm(cancelButton, targetElem, retrieveElem) {
    cancelButton.addEventListener('click', function () {
        targetElem.classList.remove('display-on');
        retrieveElem.style.display = 'block';
    })
}

export function nextPrevBtnListener(btn, link) {
    btn.addEventListener('click', function () {
        // removeAllListeners(document.getElementById('next-btn'));
        document.getElementById("planetsData").innerHTML = '';
        pageDownload(link, true);
    })
}

// remove all listeners from an element
export function removeAllListeners(elemForClear) {
    // let new_element = elemForClear.cloneNode(true);
    // elemForClear.parentNode.replaceChild(new_element, elemForClear);
    elemForClear.removeEventListener('click', nextPrevBtnListener, true);
}