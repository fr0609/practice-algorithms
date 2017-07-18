(function euler () {
	var chain = [];
	function collatz(n){
		
		if(n <= 1) {
			return;
		}
		if(n % 2 == 0){
			n = n /2;
			chain.push(n);
			collatz(n);	
		}
		else {
			n = 3*n +1;
			chain.push(n);
			collatz(n);	
		} 
	}
	var n = 13
	var longestChain = 0;
	var startingNum = 0;
     for (var i = 999999; i > 1  ; i--) {
     	chain = [];
     	chain.push(i);
     	collatz(i);
     	if(chain.length > longestChain) {
     		longestChain = chain.length; 
     		startingNum = i;
     	}
     }
	console.log(startingNum);
	
})();