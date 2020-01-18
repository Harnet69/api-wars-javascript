import {pageDownload} from './apiManager.js'
import {fillTableOfPlanets, prevBtnEl, nextBtnEl, showResidents} from './planets.js'
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

// add listener to next/previous buttons
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
    elemForClear.removeEventListener('click', nextPrevBtnListener, false);
}

// add listeners to planet residents div and button
export function residentsButton(planetsResidents) {
    // console.log(planetsResidents);
    for(let planetResident of planetsResidents) {
        let planetResidentTR = planetResident[0];
        let elem = document.getElementById(planetResidentTR);

        // click on residents Div(don't fire child elements, COOL!!!) to show its list
        elem.parentElement.addEventListener('click', function(event) {
            if (event.currentTarget !== event.target) {
                return;
            }

            if(!elem.parentElement.children[1]) { // if resident was displayed already
                let residents = showResidents(planetResident[1]);
                elem.parentElement.appendChild(residents);
            }else{
                elem.parentElement.children[1].remove();
            }
        }, false);

        // click on residents button to open pop up window
        elem.addEventListener('click', function () {
            if(!elem.parentElement.children[1]) { // if resident was displayed already
                alert('Mouse click open');
                let residents = showResidents(planetResident[1]);
                elem.parentElement.appendChild(residents);
            }
            else{
                alert('Mouse click close');
                elem.parentElement.children[1].remove();
            }
        });
        // mouse over above at a residents Div for its closing
        // elem.parentElement.addEventListener('mouseover', function () {
        //     if(!elem.parentElement.children[1]) { // if resident was displayed already
        //         let residents = showResidents(planetResident[1]);
        //         elem.parentElement.appendChild(residents);
        //     }
        // });
        // mouse over above a residents Div for its closing
        // elem.parentElement.addEventListener('mouseleave', function () {
        //     elem.parentElement.children[1].remove();
        // });
        // click on residents Div for its closing
        // elem.parentElement.addEventListener('click', function () {
        //     if(elem.parentElement.children[1]) {
        //         elem.parentElement.children[1].remove();
        //     }
        // });
    }
    // let residentsDiv = createResidentsDiv();
}