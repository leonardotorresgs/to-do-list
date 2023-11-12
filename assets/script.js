const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const allTasks = document.querySelector('.list-tasks')

let listItems = []


function addTask() {
    listItems.push({
        task: input.vale,
        status: false
    })

    input.value = ''

    viewTask()
}

function viewTask() {

    let newLi = ''

    listItems.forEach((item, index) => {

        newLi = newLi + `
        <li class="task ${item.status && "done"}">
            <img src="assets/img/checked.png" alt="Check icon" onclick="checked(${index})">
            <p>${item.task}</p>
            <img src="assets/img/trash.png" alt="Trash icon" onclick="delItem(${index})">
        </li>`

    })

    allTasks.innerHTML = newLi
    
}

function checked(index) {
    listItems[index].status = !listItems[index].status
}

function delItem(index) {
    listItems.splice(index, 1)

    viewTask()
}

button.addEventListener('click', addTask)




