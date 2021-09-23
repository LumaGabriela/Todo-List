import {currentIndex, currentProject, projectDOM, todoSelector} from './Projects'
import { taskDOM, clearTasks , addListeners} from "./Todos";


function createTask(title, date, checked, project){
    return{title, date, checked, project}
}
export let project = []
export let home = []
export let today = []
export let thisWeek = []

export function addTodo( type,title,date,check, proj){
    type.push(createTask(title, date, check, proj))
    populateStorage()
}

export function removeTodo(i, type){
    type.splice(i,1)
    populateStorage()
}
function createProject(title, todos){
    return {title, todos}
}
export function addProject(title, todos){
    project.push(createProject(title, todos))
    populateStorage()
}
export function removeProject(i){
    project.splice(i,1)
    populateStorage()
}
//Add methods to use objects on local storage 
Storage.prototype.setObj = function(key, obj){
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key){
    return JSON.parse(this.getItem(key))
}
//      //  Setting the local storage    //      //
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}
//       //      //       //      
// var currentHome = localStorage.getObj('currentHome') || [];  
// var currentProjectObj = localStorage.getObj('currentProjectObj') || [];

export function populateStorage(){
    localStorage.setObj('currentHome', home);
    localStorage.setObj('currentProjectObj', project);   
    setStorageValues()
}

export function setStorageValues() {
    var currentHome = localStorage.getObj('currentHome');  
    var currentProjectObj = localStorage.getObj('currentProjectObj');
    home = currentHome;
    project = currentProjectObj;
    clearTasks()
    if(todoSelector === 0){
        taskDOM(home)
    }else if(todoSelector === 1){
        taskDOM(project[currentIndex].todos)
    }
    console.log(project)
    console.log(home)
    console.log(currentProjectObj)
    console.log(currentHome) 
}
if(!localStorage.getObj('currentProjectObj')) {
    populateStorage();
  } else {
    setStorageValues()
    if(project.length > 0){
        projectDOM();
    }
    clearTasks() 
    addListeners(home)
    taskDOM(home);
  }

