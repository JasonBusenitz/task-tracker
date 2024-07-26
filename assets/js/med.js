let medPrioValue = JSON.parse(localStorage.getItem("tasks")).filter(function(task){
    return task.priority==="med";
  }) || [];
  renderTasks(medPrioValue, "medPrio", true); 