function sumSquareDifference(){
	
 	var firstResult = 0;
	var plainSum = 0;
	for(var i=1; i <= 100; i++){
		
 	  var temp = Math.pow(i, 2);
	      firstResult += temp;
	      plainSum  += i;
	   	
	}

	var secondResult = Math.pow(plainSum, 2);
	var result = secondResult- firstResult;    	
        return result;
}

result = sumSquareDifference();
console.log(result);
