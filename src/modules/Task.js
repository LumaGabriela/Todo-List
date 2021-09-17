export function createTask(title, date, checked){
    return{title, date, checked}
}
export function aaa(){
    const task = []
    task.push(createTask(title, date, check))
    console.log(task)
}