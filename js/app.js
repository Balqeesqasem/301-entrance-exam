'use strict'
var toDoArray = [];
function ToDo (toDo , date){
    this.toDo = toDo;
    this.date = date;
}
console.log(toDo);
function obj() {
    var toDo = document.getElementById('toDo').value;
    console.log(toDo);
    var date =document.getElementById('date').value;
    console.log(date)
    var plane = new ToDo (toDo , date);
    toDoArray.push(plane);
    
}
obj();
// function toDoThing (e){
// var sub = document.getElementById('form')
// ToDo.addToDo(e.target.ToDo);
// console.log(e.target.ToDo);
// }

var doSubmit = document.getElementById('form');
doSubmit.addEventListener('submit', form);

function setItem(){
    var toDoList = JSON.stringify(toDoArray);
    localStorage.setItem('toDo' ,toDoList );

}

function getItem(){
    var toDoListGet= localStorage.getItem('toDo');
    if(toDoListGet){
        toDoList=JSON.parse(toDoListGet)
    }
}
getItem();