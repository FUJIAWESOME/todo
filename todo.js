const list = {
    "create a new practice task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
}

function changeStatus(task, taskStatus) {
    this[task] = taskStatus;
}

function addTask(task) {
    this[task] = "To Do";
}

function deleteTask(task) {
    delete this[task];
}

list.changeStatus = changeStatus;
list.addTask = addTask;
list.deleteTask = deleteTask;

console.log(list);
list.changeStatus("write a post", "Done");
list.addTask("write a todo list");
list.deleteTask("make a bed");
console.log(list);