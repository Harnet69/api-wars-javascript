import {fillTableOfPlanets, prevBtnEl, nextBtnEl} from './planets.js'
import {nextPrevBtn} from './listeners.js'

// get planets data from API
export function pageDownload(page='https://swapi.co/api/planets') {
    let planetsData = [];
    $.get(page, function (data) {
        let results = data["results"];
        let nextBtnLink = data["next"];
        let prevBtnLink = data["previous"];
        nextPrevBtn(nextBtnEl, nextBtnLink);
        nextPrevBtn(prevBtnEl, prevBtnLink);
        for (let i = 0; i < results.length; i++) {
            planetsData[i] = [];
            planetsData[i].push(results[i]["name"]);
            planetsData[i].push(results[i]["diameter"] + " km");
            planetsData[i].push(results[i]["climate"]);
            planetsData[i].push(results[i]["terrain"]);
            planetsData[i].push(results[i]["surface_water"]);
            planetsData[i].push(results[i]["population"]);

            if (results[i]["residents"].length > 0) {
                planetsData[i].push(results[i]["residents"].length + " resid");
                planetsData[i].push(results[i]["residents"]); // planet resident links
            } else {
                planetsData[i].push("No known residents");
            }
        }
        fillTableOfPlanets();
    });
    return planetsData;
}



// get data from API
// export function getData(data) {
//     fetch('https://swapi.co/api/planets')  // set the path; the method is GET by default, but can be modified with a second parameter
//         .then((response) => response.json())  // parse JSON format into JS object
//         .then((data) => {
//             console.log(data);
//         });
// }
//
//
// export function getDataOldWay() {
//     var request = new XMLHttpRequest();  // instantiate a new Request
//
//     request.addEventListener('load', function () { // add an event listener to the load event of the request
//         let responseData = JSON.parse(this.response);  // parse JSON format into JS object
//         console.log(responseData);
//         return responseData
//     });
//     request.open('GET', 'https://swapi.co/api/planets');  // set the method and the path
//     request.send();  // actually fire the Request
// }
