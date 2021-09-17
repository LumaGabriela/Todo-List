export function createTask(title, date, checked, i){
    return{title, date, checked, i}
}
const task = []
export function addTodo(title,date,check, i){
    task.push(createTask(title, date, check, i))
    console.log(task)
    return task
}

export function removeTodo(i){
    task[i] = ''
}