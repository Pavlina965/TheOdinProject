import projects from './projects';

const toDo = (() => {

class Task{

    constructor(title, completed, project){
        this.title = title;
        // this.dueDate = dueDate;
        this.completed = false;
        this.project = project;
    }
}
    
    function addTask(title, projectId){
        const task = new Task(title,projectId);

        projects.projectArr[projectId].tasks.push(task);
    }
    function deleteTask(projectId, taskId){
        projects.projectArr[projectId].tasks.splice(taskId,1);

    }
    function completeTask(projectID,taskId){
        projects.projectArr[projectID].tasks[taskId].completed = true;
    }
    return{
        addTask,
        deleteTask,
        completeTask,
    };
})();
export default toDo;