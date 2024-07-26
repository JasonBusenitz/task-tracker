let topPrioValue = JSON.parse(localStorage.getItem("tasks")).filter(function(task){
  return task.priority==="top";
}) || [];
renderTasks(topPrioValue, "topPrio", true); 