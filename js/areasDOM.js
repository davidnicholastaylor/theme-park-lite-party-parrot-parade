"use strict";

let areaDiv = document.querySelector(".area-div");


// POST INFORMATION ON DOM THROUGH FOR LOOP
function addArea(areaFile) {

    for (let i = 0; i < areaFile.length; i++) {
        // console.log(AlienArguement)
        areaDiv.innerHTML +=
            `<div class="type${areaFile[i].id}">
            <h3>${areaFile[i].name}</h3>
            <p>${areaFile[i].description}</p></div>`;    
    }
}

module.exports = addArea;