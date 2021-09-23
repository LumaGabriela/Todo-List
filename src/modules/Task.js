//import {populateStorage} from './Storage'
//
//import {project, home, today, thisWeek} from "./Task";
import {currentProject, projectDOM, todoSelector} from './Projects'
import { taskDOM } from "./Todos";


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
    console.log('projeto')

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

export function populateStorage(){
    localStorage.setObj('home', home);
    localStorage.setObj('project', project);   
    setStorageValues()
}

export function setStorageValues() {
    var currentHome = localStorage.getObj('home');  
    var currentProjectObj = localStorage.getObj('project');
    home = currentHome 
    project = currentProjectObj;
    console.log(project)
    console.log(home)
    if(project.length > 0){
        projectDOM();
    }
    if(home.length > 0 & todoSelector === 0){
        taskDOM(home);
    }
    
}
if(!localStorage.getObj('project')) {
    populateStorage();
  } else {
    setStorageValues();
  }

//