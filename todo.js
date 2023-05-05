const STATUS = {
    TO_DO: "To Do",
    IN_PROGRESS: "In Progress",
    DONE: "Done",
}

const PRIORITY = {
    LOW: 'low',
    HIGH: 'high',
}

const DEFAULT_STATUS = STATUS.TO_DO;

const list = [
    {
        name: "create a new practice task",
        status: STATUS.IN_PROGRESS,
        priority: PRIORITY.LOW,
    },
    {
        name: "make a bed",
        status: STATUS.DONE,
        priority: PRIORITY.LOW,
    },
    {
        name: "write a post",
        status: STATUS.TO_DO,
        priority: PRIORITY.HIGH,
    },
]

function changeStatus(task, status) {
    list.forEach(element => {
        if (element.name === task) {
            element.status = status;
        }
    });
}

function addTask(task) {
    list.push({
        name: task,
        status: STATUS.TO_DO,
        priority: PRIORITY.HIGH,
    })
}

function deleteTask(task) {
    list.forEach((element, index) => {
        if (element.name === task) {
            list.splice(index, 1);
        }
    })
}

function showBy(choose) {
    if (choose === 'status') {
        console.log(`${STATUS.TO_DO}:`);
        list.forEach(element => {
            if (element.status === STATUS.TO_DO) console.log(` "${element.name}",`)
        })
        console.log(`${STATUS.IN_PROGRESS}:`);
        list.forEach(element => {
            if (element.status === STATUS.IN_PROGRESS) console.log(` "${element.name}",`)
        })
        console.log(`${STATUS.DONE}:`);
        list.forEach(element => {
            if (element.status === STATUS.DONE) console.log(` "${element.name}",`)
        })
    } else if (choose === 'priority') {
        console.log(`${PRIORITY.LOW}:`);
        list.forEach(element => {
            if (element.priority === PRIORITY.LOW) console.log(` "${element.name}",`)
        })
        console.log(`${PRIORITY.HIGH}:`);
        list.forEach(element => {
            if (element.priority === PRIORITY.HIGH) console.log(` "${element.name}",`)
        })
    }
}


console.log(list);

changeStatus("write a post", "Done");
addTask("write a todo list");
deleteTask("make a bed");
deleteTask("write a post");
showBy('priority');

console.log(list);