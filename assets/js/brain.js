const taskField = document.getElementById("taskInput");
const priorityField = document.getElementById("priorityInput");
const savebutton = document.getElementById("savebutton");
savebutton.addEventListener("click", function () {
  const currentTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let task = taskField.value.trim();
  let priority = priorityField.value.trim();
  currentTasks.push({ task, priority });
  localStorage.setItem("tasks", JSON.stringify(currentTasks));
  location.reload();
});

/*Click Modal (event Listener) and a li is added with the given text*/

// For loop? for each li add three emojiis//

//event listener for emojii click to add to local storage but stringified//
