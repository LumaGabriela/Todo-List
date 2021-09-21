import { currentIndex, currentProject } from "./Projects"

function createTask(title, date, checked, project){
    return{title, date, checked, project}
}
export let project = []
export let home = []
export let today = []
export let thisWeek = []

export function addTodo( type,title,date,check, proj){
    type.push(createTask(title, date, check, proj))
}

export function removeTodo(i, type){
    type.splice(i,1)
}
function createProject(title, todos){
    return {title, todos}
}
export function addProject(title, todos){
    project.push(createProject(title, todos))

}
export function removeProject(i){
    project.splice(i,1)
}
