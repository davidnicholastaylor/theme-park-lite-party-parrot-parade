"use strict";

let db = require('./db-calls.js');
let addArea = require('./areasDOM.js');


let areas = {};
// let areaAttractions = {};

db.fetchAreas()
    .then((result) => {
        areas = result;
        addArea(areas);
        console.log("areas.js", areas);
    });

// db.fetchAttractions() 
//     .then((result) => {
//         areaAttractions = result;
//         addArea(areaAttractions);
//     });

module.exports = areas;
