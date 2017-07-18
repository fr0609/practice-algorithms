var app = (function(){
 	function fib(n){
 	 if(n <= 1)return 1; 
  	return fib(n-1) + fib(n-2);

}

function isDivisible(n, div){
	return n % div == 0;
}

function evenFibonnacciNumbers(){
	var result = 0;
	for(var i = 0; i < 100000; i++){
		var num = fib(i);
       		if(num > 4000000)return result;
        	if(isDivisible(num, 2 )){
        		 result  += num;
                } 
        }
}

return {
  evenFibonnacciNumbers: evenFibonnacciNumbers
}
}());
console.log(app.evenFibonnacciNumbers());

