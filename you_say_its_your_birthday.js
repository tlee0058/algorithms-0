/*You Say It’s Your Birthday
If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day....",

Example: given yourBirthday(4,19) or yourBirthday(19,4)*/

function birthday(num1, num2){
    if(num1 === 6 && num2 === 17){
        console.log("How did you know?");
    }
    else {
        console.log("Just another day....");
    }
};
