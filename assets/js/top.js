const taskContainer = document.getElementById('content')


const renderTasks = function (priority, parentElement) {
    const allTasks = JSON.parse(localStorage.getItem("tasks"));
    
    if (!allTasks) {
        return
    };

    const currentPriorityTasks = allTasks.filter(function (task) {
      return task.priority === priority;
    });
    currentPriorityTasks.forEach(function (task) {
      const item = document.createElement("li");
      item.textContent = task.task;
      parentElement.appendChild(item);
    });
  };
  

renderTasks('top', taskContainer); 