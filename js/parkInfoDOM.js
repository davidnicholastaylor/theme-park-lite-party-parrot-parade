"use strict";



let parkDiv = document.querySelector(".parkInfo-div");
let parkHeading = document.createElement("h1");
parkHeading.innerHTML= "Theme Park";
parkDiv.appendChild(parkHeading);

// POST INFORMATION ON DOM THROUGH FOR LOOP
function addpark(parkInfoFile) {


    for (let i = 0; i < parkInfoFile.length; i++) {
        // console.log(AlienArguement)
        parkDiv.innerHTML +=
            `<div class="wrapper">
        <h3>${parkInfoFile[i].description}</h3>
            <h3>${parkInfoFile[i].location}</h3>
            <p><b>${parkInfoFile[i].name}</b></p>
            <p><b>Park Hours: ${parkInfoFile[i].operating_hours[0].opening} - ${parkInfoFile[i].operating_hours[0].closing}</b></p>
          </div>`;
    }
}

module.exports = addpark;