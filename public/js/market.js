var $ = require('./jquery.js')

function setElement(){
	$('.market').toggleClass("market-active");
	$('.close-btn').click(function(){
		$('.item-show').fadeOut();
	});
	$('.item').click(function(){
		alert("hi");
		getItemDetail($(this).attr('id'));
	});
}

function getItemDetail(id){
	alert("hi"+id);
	$('#'+id).fadeIn();
}

module.exports = {setElement : setElement , getItemDetail:getItemDetail};
// xmodule.exports = ;