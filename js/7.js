function stPrimeNumber(){
	var primesFound = 0;
	var primesToFind = 10001;
        var i= 0;
	for( ; primesFound  <  primesToFind; ++i ){

		if (isPrime(i)){
			primesFound++;
		}
	}

return i-1; 
}
function isPrime(num){
	if(num < 2 ) return false;
	if( num != Math.round(num)) return false;
	
	var isPrime = true;
	
	for(var i = 2; i<= Math.sqrt(num); i++){
		if(num % i == 0) isPrime = false;
	}

	return isPrime;
	
}

var result = stPrimeNumber();
console.log(result);
