var btnPostTodo = document.getElementById('btnPostTodo');
var btnClear = document.getElementById('btnClear');
var btnMarkAll = document.getElementById('btnMarkAll');
var btnDelete = document.getElementById('btnDelete');


btnPostTodo.addEventListener("click", postTodo);
btnClear.addEventListener("click", clearTodo);
btnMarkAll.addEventListener("click", markTodo);
btnDelete.addEventListener("click", deleteTodo);


function postTodo(e) {
    e.preventDefault();

    var toDoText = document.getElementById('toDoText').value;
    var list = document.getElementById('toDoList');

    if(toDoText.length == 0) {
        alert("Escribe algo por favor");
        return;
    } 

    var currentListHTML = list.innerHTML;
    list.innerHTML = currentListHTML + `<input type="checkbox" name="todo" /> ${toDoText} <br>`
    
    document.getElementById('toDoText').value = '';

}

function clearTodo(e) {
    e.preventDefault();
    checkBoxes = document.getElementsByName('todo');
    for (let i = 0; i < checkBoxes.length; i++) {
        checkBoxes[i].checked = false; 
    }
}

function markTodo(e) {
    e.preventDefault();
    checkBoxes = document.getElementsByName('todo');
    for (let i = 0; i < checkBoxes.length; i++) {
        checkBoxes[i].checked = true;  
    }
}

function deleteTodo(e) {
    e.preventDefault();

    var list = document.getElementById('toDoList');
    list.innerHTML = '';
}