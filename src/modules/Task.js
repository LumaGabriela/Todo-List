export function createTask(title, date, checked, i){
    return{title, date, checked, i}
}
export let task = []

export function addTodo(title,date,check, i){
    task.push(createTask(title, date, check, i))
}

export function removeTodo(i){
    task.splice(i,1)
    console.log(task)
}