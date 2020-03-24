'use strict'
var toDoArray = [];
function ToDo (toDo , date){
    this.toDo = toDo;
    this.date = date;
    toDoArray.push(this);
}
// console.log(toDo);

var doSubmit = document.getElementById('form');
doSubmit.addEventListener('submit', form); 

function form(e)
{

    console.log(e);
    console.log(e.target.toDo.value);
    // var toDoTag = document.getElementById('form');
    event.preventDefault();
    new ToDo (e.target.toDo.value , e.target.date.value);
    // document.getElementById('toDo').value = '';
    
    // document.getElementById('date').value = '';
    setItem();
    renderResult();
    
    
}
// form();

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
    var ul = document.getElementById('ul');
    ul.textContent='';
    for(var i=0 ; i<toDoArray.length ; i++)
    {   
        var li = document.createElement('li');
        var li1 = document.createElement('li');
        ul.appendChild(li);
        ul.appendChild(li1);
        li1.textContent=toDoArray[i].date;
        li.textContent=toDoArray[i].toDo;
        }
}


function setItem(){
    var toDoList = JSON.stringify(toDoArray);
    localStorage.setItem('toDo' ,toDoList );

}

function getItem(){
    var toDoListGet= localStorage.getItem('toDo');
    if(toDoListGet){
        toDoArray=JSON.parse(toDoListGet)
    }
}
