var $ = require('./jquery.js')

function setElement(){
	$('.profile').toggleClass("profile-active");
	setProfilePic();
}

function setProfilePic(){
	var profileWidth = $('.profile-pic').width();
	$('.profile-pic').css({'height':profileWidth+"px",
						   'border-radius': profileWidth+"px"});
}


module.exports = setElement;