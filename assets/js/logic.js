const renderTasks = function (array, element, page) {
  if (!array.length) {
    const noDataRow = document.createElement("tr");
    const emptyTd = document.createElement("td");
    const noDataEl = document.createElement("td");
    noDataEl.textContent = "No Tasks";
    noDataRow.appendChild(emptyTd);
    noDataRow.appendChild(noDataEl);
    document.getElementById(element).appendChild(noDataRow);
    return;
  }
  for (let i = 0; i < array.length; i++) {
    const newRow = document.createElement("tr");
    const newCell = document.createElement("td");
    const newHeader = document.createElement("th");
    newHeader.setAttribute("scope", "row");
    newHeader.textContent = i + 1;
    if (!page) {
      newCell.innerHTML = `<span class="mr-4">${array[i].task}</span>
         <span class="btn-group change-priority"> 
            <button data-index="${i}" data-priority="low" type="button" class="btn btn-primary ${
        array[i].priority === "low" ? "active" : ""
      }">Low</button>
            <button data-index="${i}" data-priority="med" type="button" class="btn btn-primary ${
        array[i].priority === "med" ? "active" : ""
      }">Medium</button>
            <button data-index="${i}" data-priority="top" type="button" class="btn btn-primary ${
        array[i].priority === "top" ? "active" : ""
      }">Top</button>
        </span>`;
    } else {
      newCell.innerHTML = `<span>${array[i].task}</span><span class="mx-2"><button data-index="${i}" class="delete-taskBtn btn btn-danger">X</button></span>`;
    }
    newCell.classList.add("task-item", "brain-task-item");

    newRow.appendChild(newHeader);
    newRow.appendChild(newCell);
    document.getElementById(element).appendChild(newRow);
  }
};
