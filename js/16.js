var Big = require('big.js');

(function euler16(){
	
	var digit = new Big(2).pow(1000);
	var arrayDigit = digit.c;
        var length = arrayDigit.length -1;
	var result = 0;
	for(var i = 0; i <= length; i++){
		result += arrayDigit[i];
	}
	console.log(result);
})();
