# TimestampedVisuals
creates a cluster of visual data, arranged by a given timeframe (day, month etc). The objects also contain exif information

you embed the file like this:


```html
 	TV = require('timestamped-visuals); 
```

To import the visual data and create an array of time clustered array, you write: 

```html
	var x = new TV({
                path: "./../images",   // here you have to pass the path 
                filename: "image.json", // output file
                callback: done,
                timeframe: "day"
                });
```

- the **path** parameter specifies the path where the images are located. Subfolders will also be scanned.
- the **filename** specifies the output where the timestamped objects are written into. It should be \*.json format
- with the optional **callback** you can specify a callback function that receives the results, as a list of js objects.
- with the **timeframe** parameter you define an ordering structure. For example 'day' will groop the files on a daily basis. Valid parameters are "minute", "hour", "day", "week", "month", "year"

TimestampedVisuals works fine in conjunction with <a href = "https://github.com/Phalanstere/ClusterPainter">**ClusterPainter**</a>


---
### License

[MIT](http://opensource.org/licenses/MIT)



### Copyright

Copyright &copy; 2015. Phalanstere.   