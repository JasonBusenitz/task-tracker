let topPrioValue = JSON.parse(localStorage.getItem("tasks")).filter(function(task){
  return task.priority==="top";
}) || [];
let medPrioValue = JSON.parse(localStorage.getItem("tasks")).filter(function(task){
  return task.priority==="med";
}) || [];
let lowPrioValue = JSON.parse(localStorage.getItem("tasks")).filter(function(task){
  return task.priority==="low";
}) || [];


renderTasks(topPrioValue, "topPrio", true);
renderTasks(medPrioValue, "medPrio", true);
renderTasks(lowPrioValue, "lowPrio", true);
