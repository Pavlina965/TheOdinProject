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
    return{
        addTask,
    };
})();
export default toDo;