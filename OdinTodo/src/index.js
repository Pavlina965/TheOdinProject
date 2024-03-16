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
const closeToDoBtn = document.querySelector("#closeToDoButton");
const popUpName = document.querySelector("#popUpName");
const addTaskBtn = document.querySelector("#addTask");
const todoForm = document.querySelector(".todoForm");
const todayFullDate = new Date();
const todayDate = new Date(
  todayFullDate.getFullYear(),
  todayFullDate.getMonth(),
  todayFullDate.getDate()
);
//set today date to input
// todoInputDate.valueAsDate = todayDate;

//blurr page
function blurrPage(formShow, formHide) {
  formShow.style.display = "block";
  mainContainer.classList.add("blurr");
  formHide.style.display = "none";
}
addTaskBtn.onclick = () => {
  blurrPage(todoForm, formPopUp);
};

//load page
function loadPage() {
  const todayP = document.createElement("p");
  todayP.textContent = "Today";
  todayP.id = "today";
  divMenu.appendChild(todayP);
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
    popUpName.textContent = "New project";
    popUpBtn.Value = "Add Project";
    popUpBtn.className = "addProject";
    showPopUp();
  });
  //load tasks for project
  for (let i = 0; i < projectCollection.length; i++) {
    projectCollection[i].addEventListener("click", () => {
      loadTasks(i);
    });
  }

  loadTasks(0);

  today.onclick = () => {
    showTodayTaks();
    addTaskBtn.style.display = "none";
  };
}
function showTodayTaks() {
  projectName.data = "Today";
  document.querySelector(".todoForm").style.display = "none";
  todoList.innerHTML = "";
  // console.log()
  for (let i = 0; i < projects.projectArr.length; i++) {
    localStorage.setItem("projects", JSON.stringify(projects.projectArr));
    const currentProject = projects.projectArr[i];
    const currentProjectId = currentProject.id;
    for (let j = 0; j < projects.projectArr[i].tasks.length; j++) {
      if (
        Date.parse(toDo.getTodayTask(currentProjectId, j)) ===
        Date.parse(todayDate)
      ) {
        const todoItem = document.createElement("li");
        todoItem.classList.add(currentProject.title + i);
        todoItem.classList.add("TaskId" + j);
        const check = document.createElement("span");
        const isChecked = currentProject.tasks[j].completed;
        if (isChecked) {
          todoItem.classList.add("checked");
          check.innerHTML = '<i class="fa-regular fa-square-check"></i>';
        } else {
          check.innerHTML = '<i class="fa-regular fa-square"></i>';
          todoItem.classList.add("check");
        }
        todoItem.classList.add("listItem");
        const todoItemtText = document.createTextNode(
          currentProject.tasks[j].title
        );

        todoItem.appendChild(check);
        todoItem.appendChild(todoItemtText);

        todoList.appendChild(todoItem);
        const todoDiv = document.createElement("div");
        todoDiv.className = "markDiv";

        const edit = document.createElement("span");
        edit.innerHTML = '<i class="fa-solid fa-pen"></i>';
        edit.className = "edit";
        todoDiv.appendChild(edit);
        const close = document.createElement("span");
        close.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        close.className = "close";
        todoDiv.appendChild(close);
        todoItem.appendChild(todoDiv);

        const toDoListItems = document.getElementsByClassName("listItem");
        const deleteListItemBtn = document.getElementsByClassName("close");

        for (let k = 0; k < toDoListItems.length; k++) {
          const toDo = todoList.childNodes[k];
          const todoClass = toDo.classList[1];
          const toDoId = getNumberFromClass(todoClass);
          const projectId = getNumberFromClass(toDo.classList[0]);

          // deleting task
          deleteListItemBtn[k].onclick = () => {
            deleteListItem(toDoId, projectId);
            showTodayTaks();
          };
          //completing task
          toDoListItems[k].onclick = () => {
            if (toDo.classList.contains("checked")) {
              toDo.childNodes[0].innerHTML =
                '<i class="fa-regular fa-square"></i>';
              projects.projectArr[projectId].tasks[toDoId].completed = false;
              toDo.classList.add("check");
              toDo.classList.remove("checked");
            } else {
              completeListItem(toDoId, projectId);
              toDo.childNodes[0].innerHTML =
                '<i class="fa-regular fa-square-check"></i>';
              toDo.classList.add("checked");
              toDo.classList.remove("check");
            }
          };
        }
      }
    }
  }
}
function getNumberFromClass(className) {
  const numberRegex = /\d+/;
  const match = className.match(numberRegex);
  if (match) {
    return parseInt(match[0], 10);
  }
  return null;
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
    divMenu.appendChild(projectP);

    //edit project
    projectSpanEdit.addEventListener("click", () => {
      projectInput.value = projects.projectArr[i].title;
      projectInput.id = i;
      popUpName.textContent = "Edit project";
      popUpBtn.value = "Edit Project";
      popUpBtn.className = "editProject";
      showPopUp(i);
    });

    //delete project
    projectSpanDelete.addEventListener("click", () => {
      deleteProject(i);
      document.getElementById("projectMenu").innerHTML = "";
      loadPage();
    });
  }
}
loadPage();

//close popup
function closePopUp() {
  formPopUp.style.display = "none";
  mainContainer.classList.remove("blurr");
  popUpBtn.textContent = "Add";
  popUpBtn.id = "addProjectButton";
  document.getElementById("projectMenu").innerHTML = "";
  loadPage();
}
function showPopUp() {
  blurrPage(formPopUp, todoForm);
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
        // event.preventDefault();
        editProject(projectInput.id);
      },
      { once: true }
    );
  }
}

closePopUpBtn.addEventListener("click", () => {
  event.preventDefault();
  closePopUp();
});

function removeBlurr(form) {
  form.style.display = "none";
  mainContainer.classList.remove("blurr");
  document.querySelector(".todoList").style.display = "block";
}
closeToDoBtn.onclick = () => {
  removeBlurr(todoForm);
};

function editProject(index) {
  event.preventDefault();
  projects.editProject(index, projectInput.value);
  document.getElementById("projectMenu").innerHTML = "";
  closePopUp(formPopUp);
}

//add new project showing form
function addProject() {
  event.preventDefault();
  if (projectInput.value.trim === "") {
    alert("not Valid name");
  } else {
    projects.addProject(projectInput.value);
    document.getElementById("projectMenu").innerHTML = "";
    mainContainer.classList.remove("blurr");
  }
  loadPage();
}
function deleteProject(index) {
  projects.deleteProject(index);
}

//load tasks
function loadTasks(index) {
  addTaskBtn.style.display = "block";

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
    const check = document.createElement("span");
    if (isChecked) {
      todoItem.className = "checked";
      check.innerHTML = '<i class="fa-regular fa-square-check"></i>';
    } else {
      check.innerHTML = '<i class="fa-regular fa-square"></i>';
      todoItem.className = "check";
    }
    todoItem.classList.add("listItem");
    const todoItemtText = document.createTextNode(
      projects.projectArr[index].tasks[i].title
    );
    todoItem.appendChild(check);
    todoItem.appendChild(todoItemtText);

    todoList.appendChild(todoItem);
    const todoDiv = document.createElement("div");
    todoDiv.className = "markDiv";

    const edit = document.createElement("span");
    edit.innerHTML = '<i class="fa-solid fa-pen"></i>';
    edit.className = "edit";
    todoDiv.appendChild(edit);

    const close = document.createElement("span");
    close.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    close.className = "close";
    todoDiv.appendChild(close);
    todoItem.appendChild(todoDiv);

    //completing task
    const checkListItems = document.getElementsByClassName("listItem");
    for (let i = 0; i < checkListItems.length; i++) {
      checkListItems[i].onclick = () => {
        const checkedItem = todoList.childNodes[i];
        if (checkedItem.classList.contains("checked")) {
          projects.projectArr[activeProject.id].tasks[i].completed = false;
          checkedItem.className = "check";
          loadTasks(activeProject.id);
        } else {
          completeListItem(i, activeProject.id);
          // console.log(checkedItem);
          loadTasks(activeProject.id);
          checkedItem.className = "checked";
        }
      };
    }
    // deleting task
    const closeListItems = document.getElementsByClassName("close");
    for (let i = 0; i < closeListItems.length; i++) {
      closeListItems[i].onclick = () => {
        deleteListItem(i, activeProject.id);
        loadTasks(activeProject.id);
      };
    }
  }
}

addTodoButton.addEventListener("click", () => {
  addListItem();
  removeBlurr(formPopUp);
  loadTasks(projectName.id);
});

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
  toDo.addTask(todoInputText, todoProject, todoDueDate);
  document.getElementById("todoInput").value = "";
  // console.log(todoInputDate);
  loadTasks(todoProject);
}

//delete task from project
function deleteListItem(taskIndex, projectId) {
  toDo.deleteTask(projectId, taskIndex);
  // loadTasks(projectId);
}
function completeListItem(taskIndex, projectId) {
  toDo.completeTask(projectId, taskIndex);
}

//hide side menu
menuBtn.addEventListener("click", function () {
  const menu = document.querySelector("#projectMenu");
  menu.classList.toggle("hidden");
});
