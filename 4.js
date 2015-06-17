function isPalindrome(number){
	var toCheck = number.toString();
	var size = toCheck.length-1;
	for(var i=0; i < size; i++){
		if(toCheck[i] != toCheck[size-i]){
		return false;
		}
	}
return true;

}
function largestPalindromeProduct(size){
	var result=  false; 
        var start= 100;
	var finish = 999;
     	for(var i=start; i<= finish; i++){
		for(var j=start; j<= finish; j++)
		{
			var toCheck = i * j;
  			if(isPalindrome(toCheck)){
				if(toCheck > result)
					result = toCheck;
			}
				
		} 
	}

	return result;
}

console.log(largestPalindromeProduct(3));
