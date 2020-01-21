import {pageDownload, getResidentInfo} from './apiManager.js'
import {fillTableOfPlanets, prevBtnEl, nextBtnEl, showResidentsList, showResidentsDiv} from './planets.js'

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

// add listener to submit from login form
export function submitFromLoginForm(loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault(); // blocking default 'submit by form request' functionality

        const formData = new FormData(this);

        fetch('/login',{
            method: "post",
            body: formData
            }).then(function (response) { // when the response come back
                return response.text();
        }).then(function (text) {
            console.log(typeof(text)+"DO all stuff there "+text);
        }).catch(function (error) {
            console.error(error);
        })
    })
}

// add listener to next/previous buttons
export function nextPrevBtnListener(btn, link) {
    btn.addEventListener('click', function btnListener() {
        removeAllListeners(document.getElementById('next-btn'), btnListener);
        document.getElementById("planetsData").innerHTML = '';
        pageDownload(link, true);
    })
}

// remove all listeners from an element
export function removeAllListeners(elemForClear, btnListener) {
    // let new_element = elemForClear.cloneNode(true);
    // elemForClear.parentNode.replaceChild(new_element, elemForClear);
    elemForClear.removeEventListener('click', btnListener, false);
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
                let residents = showResidentsList(planetResident[1]);
                elem.parentElement.appendChild(residents);
            }else{
                elem.parentElement.children[1].remove();
            }
        }, false);

        // click on residents button to open pop up window
        elem.addEventListener('click', function () {
            if(!document.getElementById('resident-div')) { // if resident was displayed already
                // alert('Mouse click open');
                // get residents data
                let bnt = document.getElementById('nav-buttons');
                let planetName = elem.parentElement.parentElement.firstChild.textContent;
                let residentDIv = showResidentsDiv(planetName);  // first sibling of elem
                bnt.appendChild(residentDIv);
                getResidentInfo(planetResident[1]); // pass residents links list to get data from API
            }
            else{
                // alert('Mouse click close');
                document.getElementById('resident-div').remove();
                let residentsTables = document.getElementsByClassName("residentsDiv");
                for (let residentsTable of residentsTables){
                    residentsTable.remove();
                }
            }
        });
    }
}