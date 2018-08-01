"use strict";

let areaDiv = document.querySelector(".area-div");


// POST INFORMATION ON DOM THROUGH FOR LOOP
function addArea(areaFile) {

    for (let i = 0; i < areaFile.length; i++) {
        // console.log(AlienArguement)
        areaDiv.innerHTML +=
            `<div class="wrapper" id="area>
        <h3>${areaFile[i].colorTheme}</h3>
            <h3>${areaFile[i].name}</h3>
            <p>${areaFile[i].description}</p>
          </div>`;
    }
}

module.exports = addArea;