'use strict'; 
var bmpReader = exports = module.exports = {}; 

var fs = require('fs');
// read file
bmpReader.readFile = function (fileName){
	var bitmapBuf = fs.readFileSync(fileName);
	var bitmapBuf_out = new Buffer(bitmapBuf.length);

	var bmpObj = [];
	var header =[]; 
	var palette = []; 
	var pixels =[];
	var palIdx = 54;

	for (var i=0; i<54; i++)
		header.push(bitmapBuf.readUInt8(i));

	for (var i=0; i< 256; i++){
				
		palette.push({'red':(bitmapBuf.readUInt8(palIdx++)), 
						'green':(bitmapBuf.readUInt8(palIdx++)),
						'blue':(bitmapBuf.readUInt8(palIdx++)),
						'alpha':(bitmapBuf.readUInt8(palIdx++))
						});		
		
	}
	
	for (var i=(54+(256*4)); i<bitmapBuf.length; i++)
		pixels.push(bitmapBuf.readUInt8(i));

	console.dir(header);
	/*console.dir(palette);
	console.log("size of pixel object");
	console.log(pixels.length);*/
	var offset = 0;

	for(var i=0; i< header.length; i++)
		bitmapBuf_out.writeUInt8(header[i], offset++);
	console.log(bitmapBuf.length);
	console.log(palette.length);


	for(var i=0; i< palette.length; i++){
		bitmapBuf_out.writeUInt8(palette[i].red, offset++);	
		bitmapBuf_out.writeUInt8(palette[i].green , offset++);	
		bitmapBuf_out.writeUInt8(palette[i].blue, offset++);	
		bitmapBuf_out.writeUInt8(palette[i].alpha, offset++);	


	}
	console.log(bitmapBuf_out.length);

	for(var i=0; i< pixels.length; i++)
		bitmapBuf_out.writeUInt8(pixels[i],offset++);		

	console.log(bitmapBuf_out.length); 	

	return bitmapBuf_out;
}




/*

var bitmap = fs.readFileSync('test.bmp');
var bitmap_out = fs.readFileSync('test.bmp');
 //var bitmap_out = new Buffer(bitmap.length);
//bitmap.copy(bitmap_out,0,bitmap.length);
//console.log(bitmap_out.length);
//console.log(bitmap_out.length);

// create bitmap object
var bitmapObject ={};

bitmapObject.type = bitmap.toString('utf-8',0,2);
bitmapObject.size = bitmap.readInt32LE(2); 
bitmapObject.startOfPixels=bitmap.readInt32LE(10);
bitmapObject.weight=bitmap.readInt32LE(18);
bitmapObject.height=bitmap.readInt32LE(22);
bitmapObject.paletteSize=bitmap.readInt32LE(46);
bitmapObject.noOfPixelBits=bitmap.readInt32LE(28);


console.dir(bitmapObject);

// readIntUnt8 for R, G, B A
// process the values and write it out
// change the palette instead of each pixiels
	
// read the color palette
// Bit Map file Header - 14 bytes, DIB Header - 40 bytes
var colorPalette={};
var palIdx = 54 // offset of palette

for (var i=0; i<256; i++)
{
	var pal_col={};

	
	pal_col[0] = bitmap_out.readUInt8(palIdx++);
	bitmap_out.writeUInt8(100,palIdx);
	pal_col[1] = bitmap_out.readUInt8(palIdx++);
	//bitmap_out.writeUInt8(100,palIdx);
	pal_col[2] = bitmap_out.readUInt8(palIdx++);
	//bitmap_out.writeUInt8(100,palIdx);
	pal_col[3] = bitmap_out.readUInt8(palIdx++);
	//bitmap_out.writeUInt8(100,palIdx);

	
	colorPalette[i] = pal_col;
}

var wstream = fs.createWriteStream('test_out.bmp');
wstream.write(bitmap_out);

console.log(colorPalette);
//console.log(bitmap_out.length);
*/