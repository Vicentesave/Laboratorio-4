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

    /* var currentListHTML = list.innerHTML;
    list.innerHTML = currentListHTML + `<input type="checkbox" name="todo" /> ${toDoText} <br>`
    document.getElementById('toDoText').value = ''; */

    var div = document.createElement("div");
    var checkbox = document.createElement("input");
    var label = document.createElement("label");

    checkbox.type = "checkbox";
    checkbox.name = "todo";

    label.textContent = toDoText;

    div.appendChild(checkbox);
    div.appendChild(label);
    list.appendChild(div);

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

function deleteTodo() {
    

    checkBoxes = document.getElementsByName('todo');

    /* checkBoxes.forEach(element => {
        if (element.checked) {
            element.parentElement.remove();
        }
    }); */

    for (let i = 0; i < checkBoxes.length; i++) {
        if(checkBoxes[i].checked) {
            checkBoxes[i].parentElement.remove();
            i=-1;
        } 
    }

   /*  var list = document.getElementById('toDoList');
    list.innerHTML = ''; */
}