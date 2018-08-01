"use strict";

let db = require('./db-calls.js');
let addArea = require('./areasDOM.js');


let areas = {};

db.fetchAreas()
    .then((result) => {
        areas = result;
        addArea(areas);
        console.log("areas.js", areas);
    });

module.exports = areas;
