"use strict";
let AttractionsDiv = document.querySelector(".attractions-div");


// POST INFORMATION ON DOM THROUGH FOR LOOP
function addAttractions(attractions) {


    for (let i = 0; i < attractions.length; i++) {

        AttractionsDiv.innerHTML +=
            `<div class="wrapper">
        
          <h3 class = "atname">${attractions[i].name}</h3>
            <p class = "atclass">${attractions[i].description}</p>
            
            </div>`;

    }
}

module.exports = addAttractions;
