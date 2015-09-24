/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */ /*global define */

var TimeCluster = require("time-cluster"),
    visualData  = require("visual-data"),
    util  = require("util"),
    fs    = require("fs");

var storage     = null;
var callback    = null;
var timeframe   = null;

var timestampedVisuals = function(params)
    {
    "use strict";
    var self = this;
    
    // HERE THE TIME CLUSTER FILE IS WRITTEN
    
    this.writeFile = function(result) {
      console.log("sollte das File schreiben, dann den Callback aufrufen " + result.length);  
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

      
    };
    
    
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
         else visualData(params.path, self.writeFile);    
        };
    self.init();
    };
    

// create_output("./../nova", null);

module.exports = exports = timestampedVisuals;

