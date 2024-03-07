import projects from "./projects";
import "./style.css";
import toDo from "./todo";

const addTodoButton = document.querySelector("#addTodoButton");
const todoList = document.querySelector("#todoList");
const todoInputTask = document.querySelector("#todoInput");
const menuBtn = document.querySelector("#menu");
const todoInputDate = document.getElementById("dateInput");
const projectName = document.querySelector("#projectName").firstChild;
const formPopUp = document.querySelector(".popUpForm");
const projectInput = document.querySelector("#projectInput");
const mainContainer = document.querySelector(".mainContainer");
const divMenu = document.querySelector("#projectMenu");
const popUpBtn = document.querySelector("#addProjectButton");
const closePopUpBtn = document.querySelector("#closePopUpButton");
const popUpName = document.querySelector("#popUpName");
const todayFullDate = new Date();
const todayDate = new Date(
  todayFullDate.getFullYear(),
  todayFullDate.getMonth(),
  todayFullDate.getDate()
);
// (new Date()).toDateString();
// console.log(today);
// todoInputDate.valueAsDate = todayDate;

//load page
// console.log(projects.projectArr);
function loadPage() {
  // const indexProject = document.createElement("p");
  // indexProject.id = "Today";
  // // indexProject.classList.add("projects");
  // indexProject.textContent = "Today";
  // divMenu.appendChild(indexProject);
  const createTodayP= document.createElement("p");
  createTodayP.textContent= "Today";
  createTodayP.id = "today";
  divMenu.appendChild(createTodayP);
  const today = document.querySelector("#today");

  loadProjects();
  formPopUp.style.display = "none";
  //add new project button
  const addNewProjectDiv = document.createElement("div");
  addNewProjectDiv.id = "addNewProject";
  addNewProjectDiv.innerHTML =
    "New Project " + '<i class="fa-solid fa-plus"></i>';
  divMenu.appendChild(addNewProjectDiv);
  const projectCollection = document.getElementsByClassName("projects");
  //new Project popUp click event
  const newProjectBtn = document.querySelector("#addNewProject");
  newProjectBtn.addEventListener("click", () => {
    projectInput.value = "";
    popUpName.textContent = "new Project";
    popUpBtn.textContent = "Add";
    popUpBtn.className = "addProject";
    showPopUp();
  });
  //load tasks for project
  for (let i = 0; i < projectCollection.length; i++) {
    projectCollection[i].addEventListener("click", () => {
      loadTasks(i);
    });
  }
  // load Index Project
  // const HomeProject = document.getElementById("0");
  // projectName.data = HomeProject.textContent;
  // const projectId = HomeProject.id;
  loadTasks(0);
  // console.log(projects.projectArr[0]);
  // closePopUp();
  today.onclick = () => {
    showTaskDate();
  };
}
function showTaskDate() {
  projectName.data = "Today";
  document.querySelector(".todoForm").style.display = "none";
  todoList.innerHTML = "";
  // console.log()
  for (let i = 0; i < projects.projectArr.length; i++) {
    const currentProject = projects.projectArr[i];
    for (let j = 0; j < projects.projectArr[i].tasks.length; j++) {
      if (
        Date.parse(projects.projectArr[i].tasks[j].dueDate) === Date.parse(todayDate)
        ) {
        const todoItem = document.createElement("li");
        // todoItem.id = j;
        todoItem.classList.add(projects.projectArr[i].title)
        todoItem.classList.add(i);
        todoItem.classList.add("taskID"+ j);
        const isChecked = projects.projectArr[i].tasks[j].completed;
        if (isChecked) {
          todoItem.className = "checked";
        }
        const todoItemtText = document.createTextNode(
          projects.projectArr[i].tasks[j].title
        );
        todoItem.appendChild(todoItemtText);

        todoList.appendChild(todoItem);
        const todoDiv = document.createElement("div");
        todoDiv.className = "markDiv";

        const check = document.createElement("span");
        check.innerHTML = '<i class="fa-regular fa-square-check"></i>';
        check.className = "check";
        todoDiv.appendChild(check);

        const close = document.createElement("span");
        close.innerHTML = '<i class="fa-regular fa-rectangle-xmark"></i>';
        close.className = "close";
        todoDiv.appendChild(close);
        todoItem.appendChild(todoDiv);

        //completing task
        const checkListItems = document.getElementsByClassName("check");
        for (let k = 0; k < checkListItems.length; k++) {
          checkListItems[k].onclick = () => {
            completeListItem(j, currentProject.id);
            const checkedItem = todoList.childNodes[k];
            checkedItem.className = "checked";
          };
        }
        // deleting task
        const closeListItems = document.getElementsByClassName("close");
        for (let l = 0; l < closeListItems.length; l++) {
          closeListItems[l].onclick = () => {
            deleteListItem(j, currentProject.id);
          };
        }
        localStorage.setItem("projects", JSON.stringify(projects.projectArr));
      } else {
      }
    }
  }
}
//load projects
function loadProjects() {
  localStorage.setItem("projects", JSON.stringify(projects.projectArr));
  for (let i = 0; i < projects.projectArr.length; i++) {
    //creating projects list
    const projectP = document.createElement("p");
    projectP.textContent = projects.projectArr[i].title;
    projectP.id = i;
    projectP.className = "projects";
    // edit project button
    const projectSpanEdit = document.createElement("span");
    projectSpanEdit.className = "editIcon";
    const projectIEdit = document.createElement("i");
    projectSpanEdit.appendChild(projectIEdit);
    projectIEdit.className = "fa-solid fa-pen-to-square";

    //delete project button
    const projectSpanDelete = document.createElement("span");
    projectSpanDelete.className = "deleteIcon";
    const projectIDelete = document.createElement("i");
    projectSpanDelete.appendChild(projectIDelete);
    projectIDelete.className = "fa-solid fa-trash";

    projectP.append(projectSpanEdit, projectSpanDelete);
    // projectP.appendChild(projectSpanEdit);

    divMenu.appendChild(projectP);
    projectSpanEdit.addEventListener("click", () => {
      projectInput.value = projects.projectArr[i].title;
      projectInput.id = i;
      popUpName.textContent = "edit Project";
      popUpBtn.textContent = "Edit";
      popUpBtn.className = "editProject";
      showPopUp(i);
    });
    projectSpanDelete.addEventListener("click", () => {
      deleteProject(i);
      // console.log(projects.projectArr[i]);
      document.getElementById("projectMenu").innerHTML = "";
      loadPage();
    });
  }
  // console.log(JSON.parse(localStorage.getItem("projects")));
}
loadPage();

// document.addEventListener("DOMContentLoaded", loadProjects);

// const editProjectBtn = document.getElementById(i);
// editProjectBtn.addEventListener("click", () => {
//   addProjectBtn.textContent = "edit";
//   addProjectBtn.id = "editProjectButton";
//   editProject(i);
// });

function closePopUp() {
  // projectInput.value = "";
  formPopUp.style.display = "none";
  mainContainer.classList.remove("blurr");
  popUpBtn.textContent = "Add";
  popUpBtn.id = "addProjectButton";
  document.getElementById("projectMenu").innerHTML = "";
  // addProjectBtn.removeEventListener();

  loadPage();
}
function showPopUp() {
  mainContainer.classList.add("blurr");
  formPopUp.style.display = "flex";
  if (popUpBtn.className === "addProject") {
    popUpBtn.addEventListener(
      "click",
      () => {
        addProject();
      },
      { once: true }
    );
  } else if (popUpBtn.className === "editProject") {
    popUpBtn.addEventListener(
      "click",
      () => {
        event.preventDefault();

        // console.log();
        editProject(projectInput.id);
      },
      { once: true }
    );
  }
}
closePopUpBtn.addEventListener("click", closePopUp);

function editProject(index) {
  // const editProjectBtn = document.querySelector("#editProjectButton");
  // console.log(projects.projectArr);

  event.preventDefault();
  // console.log(projectInput.value);

  // const newProjectName = document.querySelector("#projectInput");
  // console.log(newProjectName.value);
  projects.editProject(index, projectInput.value);
  document.getElementById("projectMenu").innerHTML = "";
  closePopUp();
}

// popUpBtn.addEventListener("click", () => {
//   addProject();
// });
//add new project showing form
function addProject() {
  event.preventDefault();
  if (projectInput.value.trim === "") {
    alert("not Valid name");
  } else {
    projects.addProject(projectInput.value);
    document.getElementById("projectMenu").innerHTML = "";
    mainContainer.classList.remove("blurr");
    // console.log(projectInput.value);
  }
  loadPage();
  //add eventlistener for adding project
  // console.log(newProjectBtn);
  // const closePopUpBtn = document.querySelector("#closePopUp");
}
function deleteProject(index) {
  projects.deleteProject(index);
}

// console.log(projects.projectArr);

// console.log(projectInput.value);
//hide form

//load tasks
function loadTasks(index) {
  document.querySelector(".todoForm").style.display = "flex";
  localStorage.setItem("projects", JSON.stringify(projects.projectArr));
  const activeProject = projects.projectArr[index];

  const activeProjectName = activeProject.title;
  projectName.data = activeProjectName;
  projectName.id = activeProject.id;
  todoList.innerHTML = "";

  //loading tasks from project array
  for (let i = 0; i < projects.projectArr[index].tasks.length; i++) {
    const todoItem = document.createElement("li");
    todoItem.id = i;

    const isChecked = projects.projectArr[index].tasks[i].completed;
    if (isChecked) {
      todoItem.className = "checked";
    }
    const todoItemtText = document.createTextNode(
      projects.projectArr[index].tasks[i].title
    );
    todoItem.appendChild(todoItemtText);

    todoList.appendChild(todoItem);
    const todoDiv = document.createElement("div");
    todoDiv.className = "markDiv";

    const check = document.createElement("span");
    check.innerHTML = '<i class="fa-regular fa-square-check"></i>';
    check.className = "check";
    todoDiv.appendChild(check);

    const close = document.createElement("span");
    close.innerHTML = '<i class="fa-regular fa-rectangle-xmark"></i>';
    close.className = "close";
    todoDiv.appendChild(close);
    todoItem.appendChild(todoDiv);

    //completing task
    const checkListItems = document.getElementsByClassName("check");
    for (let i = 0; i < checkListItems.length; i++) {
      checkListItems[i].onclick = () => {
        completeListItem(i, activeProject.id);
        const checkedItem = todoList.childNodes[i];
        checkedItem.className = "checked";
      };
    }
    // deleting task
    const closeListItems = document.getElementsByClassName("close");
    for (let i = 0; i < closeListItems.length; i++) {
      closeListItems[i].onclick = () => {
        deleteListItem(i, activeProject.id);
      };
    }
  }
}

addTodoButton.addEventListener("click", addListItem);

//add task to project
function addListItem() {
  event.preventDefault();
  const todoInputText = todoInputTask.value;
  const todoInputDate = document.getElementById("dateInput").value;
  const todoDueFullDate = new Date(todoInputDate);
  const todoDueDate = new Date(
    todoDueFullDate.getFullYear(),
    todoDueFullDate.getMonth(),
    todoDueFullDate.getDate()
  );
  const todoProject = projectName.id;
  // console.log(todoDueDate);
  toDo.addTask(todoInputText, todoProject, todoDueDate);
  document.getElementById("todoInput").value = "";
  // console.log(todoInputDate);
  loadTasks(todoProject);
}

//delete task from project
function deleteListItem(taskIndex, projectId) {
  toDo.deleteTask(projectId, taskIndex);
  loadTasks(projectId);
}
function completeListItem(taskIndex, projectId) {
  toDo.completeTask(projectId, taskIndex);
}

//hide side menu
menuBtn.addEventListener("click", function () {
  const menu = document.querySelector("#projectMenu");
  menu.classList.toggle("hidden");
});
