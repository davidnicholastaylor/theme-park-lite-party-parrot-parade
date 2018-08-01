"use strict";

let db = require('./db-calls.js');


let parkInfo = {};

db.fetchParkInfo()
   .then((result) => {
   parkInfo = result;
   })

// console.log("park info db call", parkInfo);

module.exports = parkInfo;
