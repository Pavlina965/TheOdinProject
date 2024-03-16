import projects from "./projects";

// let taskID = 0;
const toDo = (() => {
  class Task {
    constructor(title, completed, projectID, dueDate) {
    //   this.id = taskID;
    //   taskID ++;
      this.title = title;
      this.completed = false;
      this.projectID = projectID;
      this.dueDate = dueDate;
    }
  }

  function addTask(title, projectID, dueDate) {
    // const project = projects.projectArr[projectID].title;
    // console.log(project);
    const task = new Task(title, false, projectID, dueDate);
    

    projects.projectArr[projectID].tasks.push(task);
  }
  function deleteTask(projectID, taskID) {
    projects.projectArr[projectID].tasks.splice(taskID, 1);
  }
  function completeTask(projectID, taskID) {
    projects.projectArr[projectID].tasks[taskID].completed = true;
  }
  function getTodayTask(projectID, taskID) {
    return projects.projectArr[projectID].tasks[taskID].dueDate;
  }
  return {
    getTodayTask,
    addTask,
    deleteTask,
    completeTask,
  };
})();
export default toDo;
