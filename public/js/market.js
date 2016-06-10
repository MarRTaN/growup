var $ = require('./jquery.js')

function setElement(){
	$('.market').toggleClass("market-active");
}

module.exports = setElement;