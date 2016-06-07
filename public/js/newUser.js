// $(document).ready(function(){
// 	setElement();
// });

function setElement(){
	setLogo();
	setFacebookBtn();
}

function setLogo(){
	var logoWidth = $('.logo').width();
	$('.logo').css({'height':logoWidth*169/191+"px"});
}

function setFacebookBtn(){
	var submitHeight = $('.submit-button').height();
	var submitTop = $('.submit-button').offset().top;
	var margin = 33;
	$('.fb-button').css({'top':(submitTop+submitHeight+margin+16)+"px"});
	$('.input-name').css({'top':(submitTop-margin)+"px"});
}
module.exports =  {setElement : setElement , setFacebookBtn : setFacebookBtn};
