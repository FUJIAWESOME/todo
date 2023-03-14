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

function showList() {
    console.log("ToDo:");
    for (let key in this) {
        if (this[key] === "To Do") console.log(` "${key}",`)
    }
    console.log("In Progress:");
    for (let key in this) {
        if (this[key] === "In Progress") console.log(` "${key}",`)
    }
    console.log("Done:");
    for (let key in this) {
        if (this[key] === "Done") console.log(` "${key}",`)
    }
}

list.changeStatus = changeStatus;
list.addTask = addTask;
list.deleteTask = deleteTask;
list.showList = showList;

console.log(list);
list.changeStatus("write a post", "Done");
list.addTask("write a todo list");
list.deleteTask("make a bed");
list.showList();
console.log(list);

