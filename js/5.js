function smallestMultiple(){
	var found= false;
	var i = 2520;
	for(i = 1; found == false; i++){
		found=true;
		for(var j=1; j <= 20; j++){
			if( i % j != 0 ){
			 found = false;
		         break;	
			}
		}
	}
	return i-1;
	
}

var result = smallestMultiple();
console.log(result);


