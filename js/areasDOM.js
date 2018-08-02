"use strict";

let areaDiv = document.querySelector(".area-div");


// POST INFORMATION ON DOM THROUGH FOR LOOP
function addArea(areaFile, attractionFile) {

    for (let i = 0; i < areaFile.length; i++) {
        // console.log(AlienArguement)
        areaDiv.innerHTML +=
            `<div class="type${areaFile[i].id}">
            <h3>${areaFile[i].name}</h3>
            <h5>${areaFile[i].description}</h5></div>`;
    }
}

module.exports = addArea;