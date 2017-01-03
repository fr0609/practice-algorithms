(function euler0017(){
   function numToWord(n) {
       var oneToTeen   = ['','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','ten'];
           oneToTeen.push('eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen');
       var tys         = ['','','twenty','thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
       var hundreds    = ['','','hundred','thousand'];
       
       var numStr = n.toString();
       
       var a = new Array();
       var p = Math.pow(10 ,numStr.length - 1);
       console.log(p);
       //lets start finding thousands and hundreds
       while ( p >= 100 ) {
          if (( p == 1000 ) || ( p == 100 )) {
             a.push(oneToTeen[parseInt(n/p)]);
             a.push(hundreds[p.toString().length - 1]);
             n %= p;
             p = Math.pow(10, n.toString().length - 1);
          }
       }
       
       // now everything less than 100
       if ( (a.length > 0) && (n > 0) ) {
          a.push("and");
       }
             
       if ( n >= 20 ) {
          a.push(tys[parseInt(n/p)]);
          if ( n % p != 0 ) {
             a.push(oneToTeen[n%p]);
          } 
       } else if ( n > 0 ) {
             a.push(oneToTeen[n]);
       }
       
       return a;
       
   }

   var sum = 0;
   /*for(var i=1; i <= 2; i++) {
      // sum += numToWord(i).join('').length;
   }*/
   sum = numToWord(999).join(' ');
     console.log(sum);
})();
