'use strict'
var toDoArray = [];
function ToDo (toDo , date){
    this.toDo = toDo;
    this.date = date;
}
ToDo.prototype.addToDo = function(toDo , date){
    toDoArray.push(new obj(toDo , date))
};

function toDoThing (e){
var sub = document.getElementById('form')
ToDo.addToDo(e.target.ToDo);
console.log(e.target.ToDo);
}

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