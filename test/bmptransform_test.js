'use strict';

var expect =require('chai').expect; 
var bmp = require('../lib/bmpReader.js');
var bmptrans = require('../lib/bmptransform.js');
var transformation = require('../lib/transformation.js');


describe('Test bmptransform -', function(){

before(function(){
    this.bmpBuf = bmp.readFile('./test.bmp'); // read file
    this.bmpsize = this.bmpBuf.readInt32LE(2); 
    this.bmpheader = this.bmpBuf.readInt32LE(14) + 14; //14 extra byte for the bit map file header
    this.bmpPaletteSize = this.bmpBuf.readInt32LE(46);
    this.bmpPixelSize = this.bmpsize - ((this.bmpPaletteSize*4) + this.bmpheader);

    // for transformObj test

    this.bufObj = bmptrans.bufToObj(this.bmpBuf);


});



describe('bufToObj test', function(){
    it('Compare size of file header', function(){ 

     expect(bmptrans.bufToObj(this.bmpBuf).header.length).to.eql(this.bmpheader);
    });
});


describe('bufToObj test', function(){
    it('Compare size of file palette', function(){ 

     expect(bmptrans.bufToObj(this.bmpBuf).palette.length).to.eql(this.bmpPaletteSize);
    });
});


describe('bufToObj test', function(){
    it('Compare size of file pixel', function(){ 

     expect(bmptrans.bufToObj(this.bmpBuf).pixel.length).to.eql(this.bmpPixelSize);
    });
});


describe('transformObj test', function(){
    it('Ensure palette size is not modified', function(){ 

     expect(bmptrans.transformObj(this.bufObj,transformation.transInverse).palette.length).to.eql(this.bufObj.palette.length);
    });

   /* it('Ensure size is not modified', function(){ 
      var retObj = bmptrans.transformObj(this.bmpBuf);
      var returnedObjSize = retObj.header.length + (retObj.palette.length*4) + retObj.pixel.length; 

     expect(returnedObjSize).to.eql(this.bmpsize);
    });
*/
  });

});

