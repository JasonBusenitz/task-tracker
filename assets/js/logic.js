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
<<<<<<< HEAD
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

=======
            <button data-index="${i}" data-priority="low" type="button" class="btn btn-primary ${array[i].priority === "low" ? "active" : ""}">&#x1F40C;</button>
            <button data-index="${i}" data-priority="med" type="button" class="btn btn-primary ${array[i].priority === "med" ? "active" : ""}">&#x1F984;</button>
            <button data-index="${i}" data-priority="top" type="button" class="btn btn-primary ${array[i].priority === "top" ? "active" : ""}">&#x1F407;</button>
        </span>`;
    } else {
      newCell.textContent = array[i].task;
    }
    newCell.classList.add("task-item");
>>>>>>> 8619486e7d902ef5f10cb977c6e14a58a93fbed5
    newRow.appendChild(newHeader);
    newRow.appendChild(newCell);
    document.getElementById(element).appendChild(newRow);
  }
<<<<<<< HEAD
};
=======
};
>>>>>>> 8619486e7d902ef5f10cb977c6e14a58a93fbed5
