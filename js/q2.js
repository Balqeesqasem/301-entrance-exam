'use strict'
var star ;

function starPattern(lines){
    star = ''
    for (var i=0 ; i<lines ; i++)
    {
     star =`${star}*` 
     console.log(star);
    }
    
}


starPattern(5);