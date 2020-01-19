import {pageDownload, getResidentInfo} from './apiManager.js'
import {nextPrevBtnListener, residentsButton} from './listeners.js'

export let prevBtnEl = document.getElementById('prev-btn');
export let nextBtnEl = document.getElementById('next-btn');
let planetsResidents = [];
let residentDetails = ['name','height','mass','skin_color', 'hair_color', 'eye_color', 'birth_year', 'gender'];

// fill table with planets
export function fillTableOfPlanets(planetsData) {
    // console.log(planetsData); !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    planetsResidents = [];
    let html = "";
    for (let tr = 0; tr < Object.keys(planetsData).length; tr++) {
        html+= "<tr>";
        for (let td = 0;td < 7; td++){
            if (td === 6) {
                if (planetsData[tr][td] !== "No known residents") {
                    html+= "<td class='residents'>" + '<button type="button" id="'+tr+'">' + planetsData[tr][td] + '</button>' + "</td>";
                    planetsResidents.push([tr, planetsData[tr][7]]); // fill array with planet residents objects
                } else {
                    html+= "<td>" + planetsData[tr][td] + "</td>";
                }
            } else {
                html+= "<td>" + planetsData[tr][td] + "</td>";
            }
        }
        html+= "</tr>";
    }
    document.getElementById("planetsData").innerHTML = html;
    // console.log(planetsResidents);
    residentsButton(planetsResidents);
}

// create list of planet residents
export function showResidentsList(planetResidents) {
    let ulResidents = document.createElement('ul');
    for(let resident of planetResidents){
        let liResidents = document.createElement('li');
        liResidents.innerHTML = "<a href='"+resident+"'>"+resident+"</a>";
        ulResidents.appendChild(liResidents);
    }
    return ulResidents;
}

// create div with data of planet residents
export function showResidentsDiv() {
    let residentsDiv = document.createElement('div');
    residentsDiv.setAttribute('id', 'resident-div');
    let tableCapture = document.createElement('h3');
    tableCapture.textContent = 'Planet residents';  //TODO find planets name!!!
    residentsDiv.appendChild(tableCapture);
    let table = document.createElement('table');
    table.classList.add('residentsDiv');
    table.classList.add('table');
    table.classList.add('table-bordered');
    residentsDiv.appendChild(table);
    let thead = document.createElement('thead');
    table.appendChild(thead);
    let tr = document.createElement('tr');
    thead.appendChild(tr);
    let tbody = document.createElement('tbody');
    tbody.classList.add('resident-details');
    table.appendChild(tbody);

    // th.textContent = 'There is a planets residents';
    // create table headers
    for(let residentDetail of residentDetails){
        let th = document.createElement('th');
        tr.appendChild(th);
        th.textContent = residentDetail;
    }
    return residentsDiv;
}

//  fill the table of residents
export function fillResidentsDetailsTable(data) {
    let tbody = document.getElementsByClassName('resident-details');
    let residentsDetailsTr = document.createElement('tr');
    tbody[0].appendChild(residentsDetailsTr);
    for(let detail of residentDetails) {
        let residentsDetailTd = document.createElement('td');
        residentsDetailTd.textContent = data[detail];
        residentsDetailsTr.appendChild(residentsDetailTd);
    }
}

pageDownload(); // data of planets










// let pageNum = 1;
// pageDownload(pageNum);
//
// $(function pageNavigation(){
//     $(".prev-btn").on("click", function(){
//         if (pageNum > 1) {
//             pageNum--;
//             pageDownload(pageNum);
//         }
//     });
//     $(".next-btn").on("click", function(){
//         if (pageNum < 7) {
//             pageNum++;
//             pageDownload(pageNum);
//         }
//     });
// });
//
// function pageDownload() {
//     $.getJSON(('https://swapi.co/api/planets/?page=' + pageNum), function(response){
//         let results = response["results"];
//         let planetsData = {};
//         for (let i = 0; i < results.length; i++) {
//             planetsData[i] = [];
//             planetsData[i].push(results[i]["name"]);
//             planetsData[i].push(results[i]["diameter"] + " km");
//             planetsData[i].push(results[i]["climate"]);
//             planetsData[i].push(results[i]["terrain"]);
//             planetsData[i].push(results[i]["surface_water"]);
//             planetsData[i].push(results[i]["population"]);
//
//             if (results[i]["residents"].length > 0) {
//                 planetsData[i].push(results[i]["residents"].length + " resid");
//             } else {
//                 planetsData[i].push("No known residents");
//             }
//         }
//         let html = "";
//         for (let tr = 0; tr < Object.keys(planetsData).length; tr++) {
//             html+= "<tr>";
//             for (let td = 0;td < 7; td++){
//                 if (td === 6) {
//                     if (planetsData[tr][td] !== "No known residents") {
//                         html+= "<td>" + '<button type="button">' + planetsData[tr][td] + '</button>' + "</td>";
//                     } else {
//                         html+= "<td>" + planetsData[tr][td] + "</td>";
//                     }
//                 } else {
//                     html+= "<td>" + planetsData[tr][td] + "</td>";
//                 }
//             }
//             html+= "</tr>";
//         }
//         document.getElementById("planetsData").innerHTML = html;
//     });
// }
