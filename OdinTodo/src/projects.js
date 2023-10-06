const projects = (() => {
  let projectArr = [];
  projectArr = [
    {
      title: "Inbox",
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
      this.tasks = [];
    }
  }

  function addProject(title) {
    const project = new Project(title);
    projectArr.push(project);
  }
  return {
    projectArr,
    addProject,
  };
})();
export default projects;
