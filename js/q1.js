'use strict'
var arrayNum = [1,2,3,4,7,9,16];
var counterGreaterNum ;
//console.log(arrayNum);
function getNumber (number){
    counterGreaterNum = 0;
    for(var index=0 ; index<arrayNum.length ; index++)
    {
        
        if (arrayNum[index]> number)
       { counterGreaterNum = counterGreaterNum + 1;}

    }
    console.log(counterGreaterNum);
    // return(counterGreaterNum);
}
getNumber(9);
