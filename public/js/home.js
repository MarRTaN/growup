// $(document).ready(function(){
// 	setElement();
// });
require('./TweenMax.min.js')
require('./MorphSVGPlugin.min.js')
require('./findShapeIndex.js')

function setElement(){
	setLevelContainer();
	setPlantNameContainer();
	setPlantLevelBar();
	setPlant();
}

function setLevelContainer(){
	var header = $('.header');
	var height = header.height() * 0.7;
	var margin = header.height() * 0.15;
	var fontNumberSize = header.height() * 0.35;
	var fontTextSize = header.height() * 0.12;

	$('.level-container').css({'width':height+"px",
							   'height':height+"px",
							   'margin-top' : margin + "px",
							   'margin-left' : margin + "px"});
	$('#level-number').css({'font-size':fontNumberSize+"px"});
	$('.level-text').css({'font-size':fontTextSize+"px"});
}

function setPlantNameContainer(){
	var header = $('.header');
	var height = header.height() * 0.7 * 0.4;
	var width = header.width() - ( header.height() * 1.2 );
	var top = header.height() * 0.15;
	var left = header.height() * 1.0;
	var fontNumberSize = header.height() * 0.25;

	$('#plant-name').css({'width':width+"px",
						  'height':height+"px",
						  'top': top+"px",
						  'left': left+"px",
						  'font-size':fontNumberSize+"px"});
}

function setPlantLevelBar(){

	var header = $('.header');
	var height = header.height() * 0.7 * 0.5;
	var width = header.width() - ( header.height() * 1.2 );
	var top = (header.height() * 0.15) + (header.height() * 0.7 * 0.5);
	var left = header.height() * 1.0;
	var fontNumberSize = header.height() * 0.25;

	$('.level-bar-cover').css({'width':width+"px",
							   'height':height+"px",
							   'top': top+"px",
							   'left': left+"px",
							   'font-size':fontNumberSize+"px"});
	$('.level-bar').css({'width':(width*0.5-6)+"px",
						 'height':(height-6)+"px"});
}

function setPlant(){
	for(var i = 0; i < 13; i++){
		TweenMax.to("#plant-demo-01-"+i+"-start",1,{morphSVG:{shape:"#plant-demo-01-"+i+"-end",shapeIndex:"auto"}, repeat:-1, yoyo:true});
	}
}
module.exports = setElement;
