"use strict";



let typeDiv = document.querySelector(".type-div");



// POST INFORMATION ON DOM THROUGH FOR LOOP


// let cap = function (type1)
// {
//     return type.charAt(0).toUpperCase() + type.slice(1);
// }

function addType(type) {

    for (let i = 0; i < type.length; i++) {
        let typeComponent = type[i].name.charAt(0).toUpperCase() + type[i].name.slice(1);
        // console.log("type thing", type)
        typeDiv.innerHTML +=
            `
    <div class="typeWrapper">
        <div class="typeDetails">
            <h3>${typeComponent}</h3>
        </div>
    </div>`;
    }
}

module.exports = addType;



