'use strict';

var expect =require('chai').expect; 
var bmpReader = require('../lib/bmpReader.js');


describe('bmpReader test', function(){
    it('test size of buffer returned', function(){
     expect((bmpReader.readFile('../test.bmp').length)).to.eql(11078);
    });
});
describe('bmpReader test', function(){
    it('test if return type is buffer/object', function(){
     expect(typeof(bmpReader.readFile('../test.bmp'))).to.eql('object');
    });
});

