const tablesContainer = document.querySelector("#all-tables-container");

function strikeOut(event) {
  const target = event.target;
  if (target.matches(".task-item")) {
    target.setAttribute("class", "strikeout");
  }
}

tablesContainer.addEventListener("click", strikeOut);

