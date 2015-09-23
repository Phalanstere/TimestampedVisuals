/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */ /*global define */

var TimeCluster = require("time-cluster"),
    visualData  = require("visual-data"),
    util  = require("util"),
    fs    = require("fs");

var storage     = null;
var callback    = null;
var timeframe   = null;

function writeData(result)
    {
    "use strict";
    var x, s;
    x = new TimeCluster(result, timeframe);  
    s = JSON.stringify(x);
   
    fs.writeFile(storage, s, function (err) {
      if (err) return console.log(err);
      else
        { 
        console.log(storage + " successfully stored!");
        if (callback)
            {
            callback.call(this, x);
            }
        }
    });
      
    }



function done(result)
    {
    "use strict";
    if (result === null) console.log("no images found"); 
    
    if (result.length > 0) {
        console.log("visual data sucessfully fetched, it will be stored in " + storage);  
        }          
    writeData(result);
    }


var timestampedVisuals = function(params)
    {
    "use strict";
    var self = this;
    
    this.init = function() {
        if (! params) 
            {
             throw "you have to pass an object with the properties [path, filename, callback]";      
            }
        
         if (! params.callback)
            {
            console.log("you might want to add a callback");    
            } 
         else
            { 
            callback = params.callback;
            }
         if (params.filename) storage = params.filename;
         if (! params.path)
            {
            throw "you have to pass a path name";        
            }
         else visualData(params.path, callback);    
        };
    self.init();
    };
    

// create_output("./../nova", null);

module.exports = exports = timestampedVisuals;

