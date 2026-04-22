const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoSubmit = document.getElementById("todoSubmit");
const todoItemsList = document.getElementById("todo-items-list");

let todoItems = JSON.parse(localStorage.getItem('todo')) || [];

function saveTodoItems() {
  localStorage.setItem('todo', JSON.stringify(todoItems));
}

function deleteItem(index) {
    todoItems.splice(index, 1);
    saveTodoItems();
    getAllItems();
}

function getAllItems() {
  todoItemsList.innerHTML = "";

  todoItems.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;
    li.dataset.index = index;
    li.addEventListener('dblclick', function() {
      deleteItem(this.dataset.index);
    });
    todoItemsList.appendChild(li);
  });
}

function addItem() {
    const inputValue = todoInput.value.trim();
    todoItems.push(inputValue);
    saveTodoItems();
    getAllItems();
    todoInput.value = ""; 
}

todoForm.addEventListener('submit', function(event){
    event.preventDefault();
    addItem();
}) 

getAllItems();
