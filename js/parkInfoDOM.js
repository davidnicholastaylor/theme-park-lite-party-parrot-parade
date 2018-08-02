"use strict";



let parkDiv = document.querySelector(".parkInfo-div");


// POST INFORMATION ON DOM THROUGH FOR LOOP
function addpark(parkInfoFile) {


    for (let i = 0; i < parkInfoFile.length; i++) {
        // console.log(AlienArguement)
        parkDiv.innerHTML +=
            `<div class="wrapper">
        <h3>${parkInfoFile[i].description}</h3>
            <h3>${parkInfoFile[i].location}</h3>
            <p>${parkInfoFile[i].name}</p>
            <p>Park Hours: ${parkInfoFile[i].operating_hours[0].opening} - ${parkInfoFile[i].operating_hours[0].closing}</p>
          </div>`;
    }
}

module.exports = addpark;