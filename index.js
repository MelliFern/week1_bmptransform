'use strict';
var bmp = require('./lib/bmpReader.js');
var bmptrans = require('./lib/bmptransform.js');
var bmpwrt = require('./lib/bmpWriter.js');
var transformation = require('./lib/transformation.js');


// read the file
var bmpBuf = bmp.readFile('test.bmp');
// convert buf to object
var bmpObj = bmptrans.bufToObj(bmpBuf); 
// transform object
var transform =  process.argv[2] || 'transInverse';
bmpObj = bmptrans.transformObj(bmpObj, transformation[transform]);
// convert object to buffer
var bmpBufOut = bmpwrt.objToBuf(bmpObj, bmpBuf.length);
// write buffer to file 
bmpwrt.wrtToFile(bmpBufOut, 'test1_out.bmp');

