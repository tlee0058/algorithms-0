/*Whoa, That Sucker’s Huge…
Add odd integers from -300,000 to 300,000, and
 console.log the final sum. Is there a shortcut?*/

 var sum = 0;
 for(var i = -300000; i < 300001; i++){
     if(i % 3 === 0){
         sum += i;
     }
    
 } 
console.log(sum);