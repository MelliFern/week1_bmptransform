'use strict'; 
var bmpReader = exports = module.exports = {}; 

var fs = require('fs');
// read file
bmpReader.readFile = function (fileName){

	var bitmapBuf = fs.readFileSync(fileName);
	return bitmapBuf; 

	}



