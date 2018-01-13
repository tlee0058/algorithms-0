/*Flexible Countdown
Based from earlier “Countdown By Fours”, given (lowNum, highNum, mult), 
print the numbers in multiples of mult 
from highNum down to lowNum, using a FOR loop.

Example: For (2,9,3), print 9 6 3 (on successive lines). */

function flexible_countdown(lowNum, highNum, mult){
    for(var i = highNum; i > lowNum; i-=mult){
        console.log(i);
    };
}

flexible_countdown(2,9,3);

