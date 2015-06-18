(function euler009(){
	var result = 0;
	var top = Math.sqrt(1000);
	for(var a = 1; a < 1000; a++ ){
		for(var b = 1; b < 1000; b++){
			if(a > b) continue;
			var c2 = Math.pow(a,2) + Math.pow(b,2);
			var c = Math.sqrt(c2);
			if(c > b){
				if(a + b + c == 1000) result = a * b * c;
			}	
		}
	}
   console.log(result);
})();

