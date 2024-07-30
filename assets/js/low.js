const saveBttn = document.getElementById('saveBttn');
const modalInput = document.getElementById('modalInput');

// Makes new rows for each task
// Add tasks to top priority only via a modal


saveBttn.addEventListener("click", function () {
  const currentTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let task = modalInput.value.trim();
  let priority = "top";
  currentTasks.push({ task, priority });
  localStorage.setItem("tasks", JSON.stringify(currentTasks));
  location.reload();
});

const renderTasksForLow = function (array, element, page) {
  if (!array.length) {
    const noDataRow = document.createElement("tr");
    const emptyTd = document.createElement("td");
    const noDataEl = document.createElement("td");
    noDataEl.textContent = "Nothing to see here 🌹";
    noDataRow.appendChild(emptyTd);
    noDataRow.appendChild(noDataEl);
    document.getElementById(element).appendChild(noDataRow);
    return;
  }
  for (let i = 0; i < array.length; i++) {
    const newRow = document.createElement("tr");
    const newCell = document.createElement("td");
    if (!page) {
      newCell.innerHTML = `<span class="mr-4">${array[i].task}</span>
      <span class="btn-group change-priority"> 
      <button data-index="${i}" data-priority="low" type="button" class="btn btn-primary ${array[i].priority === "low" ? "active" : ""}">Low</button>
      <button data-index="${i}" data-priority="med" type="button" class="btn btn-primary ${array[i].priority === "med" ? "active" : ""}">Medium</button>
      <button data-index="${i}" data-priority="top" type="button" class="btn btn-primary ${array[i].priority === "top" ? "active" : ""}">Top</button>
      </span>`;
    } else {
      newCell.textContent = array[i].task;
    }
    newRow.appendChild(newCell);
    document.getElementById(element).appendChild(newRow);
  }
};


// Filters local storage and calls table creating function

let topPrioValue = JSON.parse(localStorage.getItem("tasks")).filter(function (task) {
  return task.priority === "low";
}) || [];
renderTasksForTop(topPrioValue, "topPrio", true);