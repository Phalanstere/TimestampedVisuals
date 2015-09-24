/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */ /*global define */
var TV  = require("./../lib/index.js"),
    util    = require("util");

function done(result)
{
"use strict";
console.log("CALLBACK " + result.length);    
}


var x = new TV({
                path: "./../images",             // here you have to pass 
                filename: "cluster.json", 
                callback: done,
                timeframe: "month"
                });

