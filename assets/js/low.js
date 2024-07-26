let lowPrioValue = JSON.parse(localStorage.getItem("tasks")).filter(function(task){
    return task.priority==="low";
  }) || [];
  renderTasks(lowPrioValue, "lowPrio", true); 