const projects = (() => {
  let projectArr = [];
  let projId = projectArr.length;
  let currId =0;
  
  projectArr = [
    {
      title: "Inbox",
      id: 0,
      tasks: [
        {
          title: "task1",
          dueDate: '2023-4-10',
          completed: false,
          project: "inbox",
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
          project: "Groceries",
        },
        {
          title: "meat",
          completed: false,
          project: "Groceries",
        },
      ],
    },
  ];

  class Project {
    constructor(title) {
      this.title = title;
      currId = projId +1;
      console.log(currId);
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
