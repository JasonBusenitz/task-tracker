let topPrioValue =
  JSON.parse(localStorage.getItem("tasks")).filter(function (task) {
    return task.priority === "top";
  }) || [];
let medPrioValue =
  JSON.parse(localStorage.getItem("tasks")).filter(function (task) {
    return task.priority === "med";
  }) || [];
let lowPrioValue =
  JSON.parse(localStorage.getItem("tasks")).filter(function (task) {
    return task.priority === "low";
  }) || [];

renderTasks(topPrioValue, "topPrio", true);
renderTasks(medPrioValue, "medPrio", true);
renderTasks(lowPrioValue, "lowPrio", true);

document
  .getElementById("all-tables-container")
  .addEventListener("click", function (event) {
    if (event.target.matches("button")) {
      if (event.target.classList.contains("delete-taskBtn")) {
        let taskIndex = parseInt(event.target.dataset.index);

        let taskArray = JSON.parse(localStorage.getItem("tasks"));
        taskArray.splice(taskIndex, 1);
        localStorage.setItem("tasks", JSON.stringify(taskArray));
        location.reload();
      }
    }
  });
