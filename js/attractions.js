"use strict";

let db = require("./db-calls.js");
let addAttractions = require("./attractionsDOM.js");


let Attractions = {};

db.fetchAttractions()
  .then((result) => {
    Attractions = result;
    addAttractions(Attractions);
  console.log("Attractions",Attractions);

});



module.exports = Attractions;


