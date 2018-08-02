"use strict";

let db1 = require('./db-calls.js');
let addType = require('./attractionTypeDOM.js');

let attractionType = {};

db1.fetchTypes()
    .then((result) => {
        attractionType = result;
        addType(attractionType);
        console.log("attrationType.js", attractionType);
    });


module.exports = attractionType;