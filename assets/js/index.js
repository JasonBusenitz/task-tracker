//check local storage//
let topPrio = JSON.parse(localStorage.getItem('top')) || [];
let medPrio = JSON.parse(localStorage.getItem('med')) || [];
let lowPrio = JSON.parse(localStorage.getItem('low'))|| [];

const renderData = function(array,element){
    if(!array.length) {
        const noDataRow = document.createElement("tr");
        const emptyTd = document.createElement("td");
        const noDataEl = document.createElement("td");
        noDataEl.textContent = "No Tasks";
        noDataRow.appendChild(emptyTd);
        noDataRow.appendChild(noDataEl);
        document.getElementById(element).appendChild(noDataRow);
        return;
    };
    for (let i = 0; i < array.length; i++) {
    const newRow = document.createElement("tr");
    const newCell = document.createElement("td");
    const newHeader = document.createElement("th");
    newHeader.setAttribute("scope","row");
    newHeader.textContent=i+1;
    newCell.textContent=topPrio[i];
    newRow.appendChild(newHeader);
    newRow.appendChild(newCell);
    document.getElementById(element).appendChild(newRow);
};
};

renderData(topPrio, "topPrio");
renderData(medPrio, "medPrio");
renderData(lowPrio, "lowPrio")
