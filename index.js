const form = document.querySelector("form");
const input = document.getElementById("item");
let listTodo = "";
const list = document.getElementById("list");

function storeList() {
  window.localStorage.todoList = list.innerHTML;
}

function getTodos() {
  if (window.localStorage.todoList) {
    list.innerHTML = window.localStorage.todoList;
  } else {
    list.innerHTML = `<li>Cliquez sur un todo pour le supprimer</li>`;
  }
}

window.addEventListener("load", getTodos);

input.addEventListener("input", (e) => {
  listTodo = item.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  list.innerHTML += `<li>${listTodo}</li>`;
  storeList();
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
  storeList();
});

list.addEventListener("click", (e) => {
  console.log(e.target);
});
