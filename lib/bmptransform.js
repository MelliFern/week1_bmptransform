'use strict'; 
var bmpTransform = exports = module.exports = {}; // jshint ignore:line
var transformation = require('./transformation.js');
var fs = require('fs');

bmpTransform.bufToObj = function (bmpBuf){
	var bitmapBuf = new Buffer(bmpBuf.length);
	bmpBuf.copy(bitmapBuf);

	var bmpObj = {};

	var header =[]; 
	var palette = []; 
	var pixels =[];
	var palIdx = 54;

	for (var i=0; i<54; i++)
		header.push(bitmapBuf.readUInt8(i));

	for ( i=0; i< 256; i++){
				
		palette.push({'red':(bitmapBuf.readUInt8(palIdx++)), 
						'green':(bitmapBuf.readUInt8(palIdx++)),
						'blue':(bitmapBuf.readUInt8(palIdx++)),
						'alpha':(bitmapBuf.readUInt8(palIdx++))
						});		
		
	}
	
	for ( i=(54+(256*4)); i<bitmapBuf.length; i++)
		pixels.push(bitmapBuf.readUInt8(i));

	bmpObj=({'header':header,
			  'palette':palette,
			  'pixel':pixels}); 	

	return bmpObj; 
};

bmpTransform.transformObj = function(bmpObj,transform){

	return (bmpObj= transform(bmpObj));
};

