'user strict';
var bmpTransform = exports = module.exports = {}; 


bmpTransform.transBlue= function(bmpObj){	

	for(var i=0; i< bmpObj.palette.length; i++)
		bmpObj.palette[i].red =100;
	return bmpObj; 

}
bmpTransform.transGreen= function(bmpObj){	

	for(var i=0; i< bmpObj.palette.length; i++)
		bmpObj.palette[i].green =100;
	return bmpObj; 

}

bmpTransform.transInverse= function(bmpObj){	

	for(var i=0; i< bmpObj.palette.length; i++){
		bmpObj.palette[i].red = (bmpObj.palette[i].red-255) *(-1);
		bmpObj.palette[i].green =(bmpObj.palette[i].green-255) *(-1);
		bmpObj.palette[i].blue =(bmpObj.palette[i].blue-255) *(-1);
	}
	return bmpObj; 

}
