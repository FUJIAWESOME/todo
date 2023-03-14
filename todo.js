const STATUS = {
    TO_DO: "To Do",
    IN_PROGRESS: "In Progress",
    DONE: "Done",
}

const DEFAULT_STATUS = STATUS.TO_DO;

const list = {
    "create a new practice task": STATUS.IN_PROGRESS,
    "make a bed": STATUS.DONE,
    "write a post": STATUS.TO_DO,
}

function changeStatus(task, status) {
    this[task] = status;
}

function addTask(task) {
    this[task] = DEFAULT_STATUS;
}

function deleteTask(task) {
    delete this[task];
}

function showList() {
    console.log(`${STATUS.TO_DO}:`);
    for (let key in this) {
        if (this[key] === STATUS.TO_DO) console.log(` "${key}",`)
    }
    console.log(`${STATUS.IN_PROGRESS}:`);
    for (let key in this) {
        if (this[key] === STATUS.IN_PROGRESS) console.log(` "${key}",`)
    }
    console.log(`${STATUS.DONE}:`);
    for (let key in this) {
        if (this[key] === STATUS.DONE) console.log(` "${key}",`)
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
list.deleteTask("write a post");
list.showList();
console.log(list);