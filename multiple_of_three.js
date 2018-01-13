/*Multiples of Three – but Not All
Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.*/

for(var i = -300; i < 1; i++){
    if (i === -3 || i === -6){
        continue;
    }
    if (i % 3 === 0){
        console.log(i);
    }
    
    

};