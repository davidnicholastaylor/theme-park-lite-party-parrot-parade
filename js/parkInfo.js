"use strict";

let db = require('./db-calls.js');
let addpark = require('./parkInfoDOM.js');


let parkInfo = {};

db.fetchParkInfo()
    .then((result) => {
        parkInfo = result;
        addpark(parkInfo);
        console.log("parkInfo.js", parkInfo);
    });


module.exports = parkInfo;
