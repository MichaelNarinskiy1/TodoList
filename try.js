//Selectors=========
const todoInput = document.querySelector(".todo_input");
const todoTime = document.querySelector(".todo_time");
const todoDate = document.querySelector(".todo_date");
const addBtn = document.querySelector(".add_btn");
const todosWrapper = document.querySelector(".todos_wrapper");
const clearBtn = document.querySelector(".clear_btn");
let todoList;

//LocalStorage Check===================
if (!localStorage.todoList) {
  todoList = [];
} else {
  todoList = JSON.parse(localStorage.getItem("todoList"));
}
//Create Todos=========================
const createTodo = (todo, index) => {
  return `
  <div class="todo">
          <textarea id="text_zone">${todo.todoText}</textarea>
          <p class="time_on_cart">${todo.todoFinalTime}</p>
          <p class="date_on_cart">${todo.todoFinalDate}</p>
          <button onclick="deleteTodo(${index})" class="del_btn"><i class="fas fa-trash"></i></button>
        </div>
  `;
};

// Fill Todos in HTML===========================
function fillTodos() {
  todosWrapper.innerHTML = "";
  if (todoList.length > 0) {
    todoList.forEach(function (item, index) {
      todosWrapper.innerHTML += createTodo(item, index);
    });
  }
}

fillTodos();

//Saving item in local Storage=================

function updateLocal() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

//Event Listeners======================
addBtn.addEventListener("click", function (e) {
  let newTodo = {
    todoText: todoInput.value,
    todoFinalTime: todoTime.value,
    todoFinalDate: todoDate.value,
  };
  todoList.push(newTodo);
  updateLocal();
  fillTodos();
  todoInput.value = "";
  todoTime.value = "";
  todoDate.value = "";
});

//Deleting Rodos======================
function deleteTodo(index) {
  todoList.splice(index, 1);
  updateLocal();
  fillTodos();
}

//Clearing the Blank=============================
function clearBlank() {
  document.getElementById("clr_input").value = "";
  document.getElementById("clr_time").value = "";
  document.getElementById("clr_date").value = "";
}
