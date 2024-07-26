//check local storage//
// let topPrioValue = JSON.parse(localStorage.getItem("top")) || [];
// let medPrioValue = JSON.parse(localStorage.getItem("med")) || [];
// let lowPrioValue = JSON.parse(localStorage.getItem("low")) || [];

let topPrioValue = ["To","Do","List"];
let medPrioValue = ["To","Do","List"];
let lowPrioValue = ["To","Do","List"];

const renderData = function (array, element) {
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
    newCell.textContent = topPrioValue[i];
    newCell.classList.add("task-item");
    newRow.appendChild(newHeader);
    newRow.appendChild(newCell);
    document.getElementById(element).appendChild(newRow);
  }
};

renderData(topPrioValue, "topPrio");
renderData(medPrioValue, "medPrio");
renderData(lowPrioValue, "lowPrio");
