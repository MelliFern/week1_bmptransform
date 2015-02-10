'use strict'; 
var bmpWriter = exports = module.exports = {}; 
var fs = require('fs');

bmpWriter.objToBuf = function (bmpObj,bufsize){

var bitmapBuf_out = new Buffer(bufsize);
var offset = 0;

	for(var i=0; i< bmpObj.header.length; i++)
		bitmapBuf_out.writeUInt8(bmpObj.header[i], offset++);
	

	for(var i=0; i< bmpObj.palette.length; i++){
		bitmapBuf_out.writeUInt8(bmpObj.palette[i].red, offset++);	
		bitmapBuf_out.writeUInt8(bmpObj.palette[i].green , offset++);	
		bitmapBuf_out.writeUInt8(bmpObj.palette[i].blue, offset++);	
		bitmapBuf_out.writeUInt8(bmpObj.palette[i].alpha, offset++);	


	}
	
	for(var i=0; i< bmpObj.pixel.length; i++)
		bitmapBuf_out.writeUInt8(bmpObj.pixel[i],offset++);		


	return bitmapBuf_out;
}


bmpWriter.wrtToFile = function(bmpBufOut, fileName){

var wstream = fs.createWriteStream(fileName);
wstream.write(bmpBufOut);
}