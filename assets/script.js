const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const allTasks = document.querySelector('.list-tasks')

let listItems = []


function addTask() {
    listItems.push({
        task: input.value,
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

    localStorage.setItem('list', JSON.stringify(listItems))
    
}

function checked(index) {
    listItems[index].status = !listItems[index].status

    viewTask()
}

function delItem(index) {
    listItems.splice(index, 1)

    viewTask()
}

function rechargeTasks() {
    const LStasks = localStorage.getItem('list')

    if(LStasks) {
        listItems = JSON.parse(LStasks)
    }

    viewTask()
}

rechargeTasks()
button.addEventListener('click', addTask)
