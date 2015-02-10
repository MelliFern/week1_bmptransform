'use strict';

var expect =require('chai').expect; 
var bmp = require('../lib/bmpReader.js');
var bmptrans = require('../lib/bmptransform.js');
var transformation = require('../lib/transformation.js');


describe('Test transformation.js -', function(){

beforeEach(function(){
    this.bmpBuf = bmp.readFile('./test.bmp'); // read file
    // convert buffer to object
    this.bufObj = bmptrans.bufToObj(this.bmpBuf);
    // get palette 
    this.palette = this.bufObj.palette; 


});



describe('transBlue test', function(){
    it('Check if red pixel of random palette objects set to 100', function(){ 
        var palette = transformation.transBlue(this.bufObj).palette; 

     expect(palette[220].red).to.eql(100);
    });
});


describe('transGreen test', function(){
    it('Check if green pixel of random palette objects set to 100', function(){ 
        var palette = transformation.transGreen(this.bufObj).palette; 

      expect(palette[220].green).to.eql(100);
    });
 });

describe('transInverse test', function(){
    
    it('Check if green pixel of random palette is inverted', function(){ 
        var palette = transformation.transInverse(bmptrans.bufToObj(bmp.readFile('./test.bmp'))).palette; 
        var invertedVal = (this.palette[220].red-255) *(-1); 

        expect(palette[220].red).to.eql((invertedVal));
       // expect(this.bufObj.palette[220].red).to.eql(this.palette[220].red+1);

    });


 });




});


