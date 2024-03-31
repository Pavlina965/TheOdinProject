const projects = (() => {
  let projectArr = [];
  let projId;
  let currId =0;
  
  if (localStorage.getItem("projects")===null){
  projectArr = [

    {
      title: "Inbox",
      id: 0,
      tasks: [
        {
          title: "task1",
          completed: false,
          projectID: 0,
          dueDate: new Date('2024-3-6'),
        },
      ],
    },
    {
      title: "Groceries",
      id: 1,
      tasks: [
        {
          title: "apples",
          completed: false,
          projectID: 1,
        },
        {
          title: "meat",
          completed: false,
          projectID: 1,
        },
      ],
    },
  ];
}
else {
  const storredProjects = JSON.parse(localStorage.getItem("projects"));
  projectArr = storredProjects;
}
  
  class Project {
    constructor(title) {
      this.title = title;
      projId = projectArr.length;
      currId = projId;
      this.id = currId;
      this.tasks = [];
    }
  }
  
  function addProject(title) {
    const project = new Project(title);
    projectArr.push(project);
  }
  function editProject(index,title){
    projectArr[index].title = title;
  }

  function deleteProject(index){
    projectArr.splice(index, 1);

  }
  return {
    projectArr,
    addProject,
    editProject,
    deleteProject,
  };
})();
export default projects;
