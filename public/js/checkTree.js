function setElement(){
	setBtn();
}

function setBtn(){
	var submitHeight = $('.have-button').height();
	var submitTop = $('.have-button').offset().top;
	var margin = 33;
	$('.skip-button').css({'top':(submitTop+submitHeight+margin+16)+"px"});
	$('.buy-button').css({'top':(submitTop-margin)+"px"});
}

module.exports =  setElement;
