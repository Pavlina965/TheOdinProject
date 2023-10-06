import projects from "./projects";
import "./style.css";
import toDo from "./todo";

const addTodoButton = document.querySelector("#addTodoButton");
const todoList = document.querySelector("ul");
const todoInputTask = document.querySelector("#todoInput");
const menuBtn = document.querySelector("#menu");
const todoInputDate = document.getElementById("dateInput");
const projectName = document.querySelector('#listName').firstChild;
// const today = new Date();
// todoInputDate.valueAsDate = today;

// console.log(todoInputDate.value);
function loadProjects() {
  const divMenu = document.querySelector("#todoMenu");
  let i;
  for (i = 0; i < projects.projectArr.length; i++) {
    const projectP = document.createElement("p");
    projectP.textContent = projects.projectArr[i].title;
    projectP.id = i;
    projectP.className = "projects";

    divMenu.appendChild(projectP);
  }
  
  const projectCollection = document.getElementsByClassName("projects");
  for (let i = 0; i < projectCollection.length; i++) {
    projectCollection[i].addEventListener("click", () => {
      loadTasks(i);
    });
  }
  const HomeProject = document.getElementById('0');
  projectName.data = HomeProject.textContent;
  const projectId = HomeProject.id;
  loadTasks(projectId);

}

function loadTasks(index) {
  const activeProject = document.getElementById(index);
  const activeProjectName = activeProject.textContent;

  projectName.data = activeProjectName;
  projectName.id = activeProject.id;
  document.getElementById("todoList").innerHTML = "";

  // console.log(projects.projectArr[index].tasks.length);
  for (let i = 0; i < projects.projectArr[index].tasks.length; i++) {
    // console.log(projects.projectArr[index].tasks[i].title)
    const todoItem = document.createElement("li");
    const todoItemtText = document.createTextNode(
      projects.projectArr[index].tasks[i].title
    );
    todoItem.appendChild(todoItemtText);

    const todoList = document.querySelector("#todoList");
    todoList.appendChild(todoItem);

    const close = document.createElement("span");
    close.innerHTML = '<i class="fas fa-solid fa-xmark"></i>';

    close.className = "close";
    todoItem.appendChild(close);

    const closeListItem = document.getElementsByClassName("close");
    for (let i = 0; i < closeListItem.length; i++) {
      closeListItem[i].onclick = function () {
        const li = this.parentNode;
        const ul = li.parentNode;
        ul.removeChild(li);
      };
    }
  }
}

document.addEventListener("DOMContentLoaded", loadProjects);

addTodoButton.addEventListener("click", addListItem);

function addListItem() {
  const todoInputText = todoInputTask.value;
  const todoInputDate = document.getElementById('dateInput').value;
  const todoProject = projectName.id;
  // console.log(todoInputText);
  if(!todoProject){
    alert('please chooses project');
  }
  
  toDo.addTask(todoInputText,todoProject,todoInputDate.value);
  document.getElementById("todoInput").value = "";

  loadTasks(todoProject);
  
}

function showListItems() {
  for (let i = 0; i < tasks.taskList.length; i++) {
    const todoItem = document.createElement("li");
  }

  const todoList = document.querySelector("#todoList");

  todoItem.appendChild(todoInputText);
  todoList.appendChild(todoItem);

  document.getElementById("todoInput").value = "";

  const close = document.createElement("span");
  close.innerHTML = '<i class="fas fa-solid fa-xmark"></i>';

  // close.appendChild(closeIcon);
  close.className = "close";
  todoItem.appendChild(close);

  const closeListItem = document.getElementsByClassName("close");
  for (let i = 0; i < closeListItem.length; i++) {
    closeListItem[i].onclick = function () {
      const li = this.parentNode;
      const ul = li.parentNode;
      ul.removeChild(li);
    };
  }
}
menuBtn.addEventListener("click", function () {
  const menu = document.querySelector("#todoMenu");
  menu.classList.toggle("hidden");
});
