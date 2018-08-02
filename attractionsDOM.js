"use strick";
let AttractionsDiv = document.querySelector(".attractions-div");


// POST INFORMATION ON DOM THROUGH FOR LOOP
function addAttractions(attractions) {



    for (let i = 0; i < attractions.length; i++) {

        AttractionsDiv.innerHTML +=
            `<div class="wrapper">
        
          <h3>${attractions[i].name}</h3>
            <p>${attractions[i].description}</p>
            
        
        </div>`;
    }
}
        //   let AttractionButton = document.querySelector("#AttractionButton")

        //   AttractionButton.addEventListener("click", addAttractions)

        //   <p>${ttractions[i].id}</p>
        module.exports = addAttractions;