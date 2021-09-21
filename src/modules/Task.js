import { currentIndex, currentProject } from "./Projects"

function createTask(title, date, checked, project){
    return{title, date, checked, project}
}
export let project = []

export let task = []

export function addTodo(title,date,check, proj){
    project[currentIndex].todos.push(createTask(title, date, check, proj))
    console.log(project[currentIndex].todos)
}

export function removeTodo(i){
    project[currentIndex].todos.splice(i,1)
}
function createProject(title, todos){
    return {title, todos}
}
export function addProject(title, todos){
    project.push(createProject(title, todos))
    console.log(project)
}
export function removeProject(i){
    project.splice(i,1)
}
