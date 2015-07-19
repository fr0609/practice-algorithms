(function euler0017(){
var num = [
	'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'eighteen',
    'nineteen',
    'twenty',
    'thirty',
    'forty', 
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
    'one hundred and one',
    'two hundred',
    'three hundred',
    'one thousand'];
    var result= 0;
    for(var i = 0; i <= 99; i++ ) {
       if(i <= 20){
            result += num[i].length;
            continue;
        }
        else{
            var arrayNum = i.toString().split("");
            var arrayNumLength = arrayNum.length;
            for (var indexNum = 0; i < arrayNumLength - 1 ; indexNum ++ ) { 
                    if (i < 100){
                        var index = ParseInt(arrayNum[indexNum]) + 16;
                        result +=  num[index].length;   
                    }

                  /*  if (i => 100){
                        var index = ParseInt(arrayNum[indexNum]) + 16;
                        result +=  num[index].length;   
                    }*/
                       


            };
        }
        
        
    }

    console.log(result);

})();
