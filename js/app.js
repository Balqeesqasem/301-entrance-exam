'use strict'
var toDoArray = [];
function ToDo (toDo , date){
    this.toDo = toDo;
    this.date = date;
}
// console.log(toDo);

var doSubmit = document.getElementById('form');
doSubmit.addEventListener('submit', form); 

function form(e)
{
    //console.log(e)
    // var toDoTag = document.getElementById('form');
    var toDo= document.getElementById('toDo').e.target.toDo;
    console.log(toDo);
    var date = document.getElementById('date').e.target.date;
    var plane = new ToDo (toDo , date);
    toDoArray.push(plane);
    console.log(toDo);
    console.log(toDoArray);
}
form();

// function obj() {
//     var toDo = document.getElementById('toDo');
//     console.log(toDo);
//     var date =document.getElementById('date').value;
//     console.log(date)
//     var plane = new ToDo (toDo , date);
//     toDoArray.push(plane);
    
// }
// obj();
// function toDoThing (e){
// var sub = document.getElementById('form')
// ToDo.addToDo(e.target.ToDo);
// console.log(e.target.ToDo);
// }



function renderResult()
{
    for(var i=0 ; i<toDoArray.length ; i++)
    {   var ul = document.getElementById('ul');
        var li = document.createElement('li');
        ul.appendChild(li);
        li.textContent=toDoArray[i];


    }
}
renderResult()
function setItem(){
    var toDoList = JSON.stringify(toDoArray);
    localStorage.setItem('toDo' ,toDoList );

}
setItem()
function getItem(){
    var toDoListGet= localStorage.getItem('toDo');
    if(toDoListGet){
        toDoArray=JSON.parse(toDoListGet)
    }
}
getItem();