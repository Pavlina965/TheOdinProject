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
const AddProjectBtn = document.querySelector("#addProjectButton");
const closePopUpBtn = document.querySelector("#closePopUpButton");
const closeToDoBtn = document.querySelector("#closeToDoButton");
const popUpName = document.querySelector("#popUpName");
const addTaskBtn = document.querySelector("#addTask");
const todoForm = document.querySelector(".todoForm");
const projectOption = document.getElementById("todoProject");
const todoFormName = document.querySelector("#todoFormName");
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
// console.log() 
  // if(addTodoButton.id==="editTask"){
  //   addTodoButton.id = "addTodoButton";
  // }
  todoInputTask.value = "";
  const resetAddTodo = document.querySelector("#editTask");
  if (resetAddTodo === null) {
    console.log(todoFormName.textContent);
  } else {
    resetAddTodo.id = "addTodoButton";
    resetAddTodo.value = "Add Task";
    todoFormName.textContent = "Add Task";
  }
  todoInputTask.value = "";
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
  newProjectBtn.addEventListener("click", function () {
    const btnFunction = this;
    handleClickProject(btnFunction);
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
  for (let i = 0; i < projects.projectArr.length; i++) {
    localStorage.setItem("projects", JSON.stringify(projects.projectArr));
    const currentProject = projects.projectArr[i];
    const currentProjectId = currentProject.id;
    for (let j = 0; j < projects.projectArr[i].tasks.length; j++) {
      if (
        Date.parse(toDo.getTaskDate(currentProjectId, j)) ===
        Date.parse(todayDate)
      ) {
        console.log("");
        const todoItem = document.createElement("li");
        const todoDiv = document.createElement("div");
        todoDiv.className = "todoDiv";
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
        todoDiv.appendChild(todoItem);
        todoList.appendChild(todoDiv);
        const actionDiv = document.createElement("div");
        actionDiv.className = "actionDiv";

        const edit = document.createElement("span");
        edit.innerHTML = '<i class="fa-solid fa-pen"></i>';
        edit.className = "edit";
        actionDiv.appendChild(edit);
        const close = document.createElement("span");
        close.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        close.className = "close";
        actionDiv.appendChild(close);
        todoDiv.appendChild(actionDiv);

        const toDoListItems = document.getElementsByClassName("listItem");
        const deleteListItemBtn = document.getElementsByClassName("close");
        for (let k = 0; k < toDoListItems.length; k++) {
          const toDo = toDoListItems[k];
          const todoClass = toDo.classList[1];
          const toDoId = getNumberFromClass(todoClass);
          const projectId = getNumberFromClass(toDo.classList[0]);
          // delete task
          deleteListItemBtn[k].onclick = () => {
            deleteTask(toDoId, projectId);
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
              completeTask(toDoId, projectId);
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
    projectSpanEdit.addEventListener("click", function () {
      const btnFunction = this;
      handleClickProject(btnFunction, i);
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
  AddProjectBtn.textContent = "Add";
  AddProjectBtn.id = "addProjectButton";
  document.getElementById("projectMenu").innerHTML = "";
  loadPage();
}
function handleClickProject(btnFunction, id) {
  console.log(btnFunction);
  blurrPage(formPopUp, todoForm);
  AddProjectBtn.value = "Add Project";
  if (btnFunction.id === "addNewProject") {
    console.log(btnFunction.id);
    projectInput.value = "";
    popUpName.textContent = "New project";
    AddProjectBtn.className = "addProject";
    AddProjectBtn.addEventListener(
      "click",
      () => {
        addProject();
      },
      { once: true }
    );
  } else if (btnFunction.className === "editIcon") {
    console.log(btnFunction.className);
    projectInput.value = projects.projectArr[id].title;
    projectInput.id = id;
    popUpName.textContent = "Edit project";
    AddProjectBtn.value = "Edit Project";
    AddProjectBtn.className = "editProject";
    AddProjectBtn.addEventListener(
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
  event.preventDefault();
  form.style.display = "none";
  mainContainer.classList.remove("blurr");
  document.querySelector(".todoList").style.display = "block";
}
closeToDoBtn.addEventListener("click", () => {
  event.preventDefault();
  removeBlurr(todoForm);
});

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
  // console.log(typeof activeProjectName);
  if (typeof activeProject != "undefined") {
    const activeProjectName = activeProject.title;

    projectName.data = activeProjectName;
    projectName.id = activeProject.id;
    todoList.innerHTML = "";

    // showing options for select in att task
    const numberOfProjects = projects.projectArr.length;
    const numberOfOptions = document.getElementsByTagName("option");

    while (projectOption.firstChild) {
      projectOption.removeChild(projectOption.firstChild);
    }
    const activeProjectOption = document.createElement("option");
    activeProjectOption.value = activeProject.title;
    activeProjectOption.text = activeProject.title;
    activeProjectOption.id = activeProject.id;
    activeProjectOption.selected = true;
    projectOption.appendChild(activeProjectOption);

    for (let i = 0; i < numberOfProjects; i++) {
      const project = projects.projectArr[i];
      if (project.id !== activeProject.id) {
        const option = document.createElement("option");
        option.value = projects.projectArr[i].title;
        option.text = projects.projectArr[i].title;
        option.id = projects.projectArr[i].id;
        option.disabled = true;
        projectOption.appendChild(option);
      }
    }

    //loading tasks from project array
    for (let i = 0; i < projects.projectArr[index].tasks.length; i++) {
      const todoItem = document.createElement("li");
      const todoDiv = document.createElement("div");
      todoItem.id = i;
      todoDiv.className = "todoDiv";
      const isChecked = projects.projectArr[index].tasks[i].completed;
      const check = document.createElement("span");
      if (isChecked) {
        todoItem.className = "checked";
        check.innerHTML = '<i class="fa-regular fa-square-check"></i>';
      } else {
        check.innerHTML = '<i class="fa-regular fa-square"></i>';
        todoItem.className = "check";
      }
      // const todoDateData = projects.projectArr[index].tasks[i].dueDate;
      // const todoDateP = document.createElement("p");
      // todoDateP.append(todoDateData);
      // console.log(( todoDate))
      // todoItem.appendChild(todoDateP);
      todoItem.classList.add("listItem");
      const todoItemtText = document.createTextNode(
        projects.projectArr[index].tasks[i].title
      );
      todoItem.appendChild(check);
      todoItem.appendChild(todoItemtText);
      todoDiv.appendChild(todoItem);
      todoList.appendChild(todoDiv);
      // todoList.appendChild(todoItem);
      const actionDiv = document.createElement("div");
      actionDiv.className = "actionDiv";

      const edit = document.createElement("span");
      edit.innerHTML = '<i class="fa-solid fa-pen"></i>';
      edit.className = "edit";
      actionDiv.appendChild(edit);

      const close = document.createElement("span");
      close.innerHTML = '<i class="fa-solid fa-xmark"></i>';
      close.className = "close";
      actionDiv.appendChild(close);
      // todoItem.appendChild(actionDiv);
      todoDiv.appendChild(actionDiv);

      //completing task
      const checkListItems = document.getElementsByClassName("listItem");
      for (let i = 0; i < checkListItems.length; i++) {
        checkListItems[i].onclick = () => {
          const checkedItem = checkListItems[i];

          if (checkedItem.classList.contains("checked")) {
            projects.projectArr[activeProject.id].tasks[i].completed = false;
            checkedItem.className = "check";
            loadTasks(activeProject.id);
          } else {
            completeTask(i, activeProject.id);
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
          deleteTask(i, activeProject.id);
          loadTasks(activeProject.id);
        };
      }
      // editing task
      const editListItem = document.getElementsByClassName("edit");
      for (let i = 0; i < editListItem.length; i++) {
        editListItem[i].onclick = function () {
          // addTodoButton.removeEventListener("click", handleClickTodo )
          const btnFunction = this;
          addTodoButton.value = "Edit Task";
          addTodoButton.id = "editTask";
          todoFormName.innerHTML = "Edit Task";
          const taskDueDate = toDo.getTaskDate(activeProject.id,i)
          // console.log(taskDueDate)
          todoInputDate.value = taskDueDate;

          handleClickTodo(btnFunction, i, activeProject);
          // editTask(activeProject.id, i);
        };
      }
    }
  } else {
    showTodayTaks();
  }
}

addTodoButton.addEventListener("click", function () {
  const btnFunction = this;
  // todoFormName.textContent = "New Task";
  // addTodoButton.id = "addTodoButton";
  console.log(btnFunction);
  
  handleClickTodo(btnFunction);
});
function handleClickTodo(btnFunction, id, activeProject) {
  event.preventDefault();
  if (btnFunction.id === "addTodoButton") {
    // todoInputTask.value = "Add Task";
    if (todoInputTask.value === "") {
      console.log("dont");
    } else {
      addListItem();
      removeBlurr(todoForm);
      loadTasks(projectName.id);
    }
  } else if (btnFunction.className === "edit") {
    blurrPage(todoForm, formPopUp);
    for (let i = 0; i < projectOption.length; i++) {
      projectOption[i].disabled = false;
    }
    console.log("here")
    editTask(activeProject.id, id);
  }
  
}
// todoInputTask.value = "";

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
  // document.getElementById("todoInput").value = "";
  loadTasks(todoProject);
}
//edit task
function editTask(projectId, taskId) {
  event.preventDefault();
  blurrPage(todoForm, formPopUp);
  todoInputTask.value = projects.projectArr[projectId].tasks[taskId].title;
  todoInputDate.value = toDo.getTaskDate(projectId, taskId);

  // console.log(todoFormName)
  const editTodoButton = document.querySelector("#editTask");
  editTodoButton.addEventListener(
    "click",
    () => {
      const newTodoTitle = todoInputTask.value;
      const newTodoFullDate = new Date(todoInputDate.value);
      const newTodoDate = new Date(
        newTodoFullDate.getFullYear(),
        newTodoFullDate.getMonth(),
        newTodoFullDate.getDate()
      );
      // console.log(newTodoDate);
      const selectedOption = projectOption.options[projectOption.selectedIndex];
      // console.log(selectedOption.id);
      toDo.editTask(
        projectId,
        taskId,
        newTodoTitle,
        newTodoDate,
        selectedOption.id
      );
      loadTasks(selectedOption.id);
      removeBlurr(todoForm);
    },
    { once: true }
  );
}
//delete task from project
function deleteTask(taskIndex, projectId) {
  toDo.deleteTask(projectId, taskIndex);
  // loadTasks(projectId);
}
function completeTask(taskIndex, projectId) {
  toDo.completeTask(projectId, taskIndex);
}

//hide side menu
menuBtn.addEventListener("click", function () {
  const menu = document.querySelector("#projectMenu");
  menu.classList.toggle("hidden");
});
