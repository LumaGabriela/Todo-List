/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/Projects.js":
/*!*********************************!*\
  !*** ./src/modules/Projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currentProjectH1": () => (/* binding */ currentProjectH1),
/* harmony export */   "currentProject": () => (/* binding */ currentProject),
/* harmony export */   "currentIndex": () => (/* binding */ currentIndex),
/* harmony export */   "patterns": () => (/* binding */ patterns),
/* harmony export */   "projectDOM": () => (/* binding */ projectDOM),
/* harmony export */   "todoSelector": () => (/* binding */ todoSelector),
/* harmony export */   "showTasks": () => (/* binding */ showTasks),
/* harmony export */   "projectListener": () => (/* binding */ projectListener)
/* harmony export */ });
/* harmony import */ var _Todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todos */ "./src/modules/Todos.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ "./src/modules/Task.js");



//Add project lists
const currentProjectH1 = document.querySelector('#current-project')
let currentProject = ''
let currentIndex = 0
const remProject = [] 
let projects = []
let patterns = {
    title: /^.{1,20}$/,
}
function projectDOM(){console.log('projectDOM')
    const currentProjectH1 = document.querySelector('#current-project')
    const projectContainer = document.querySelector('#projects')
    const projectDiv = document.querySelector('#project-div')
    const title = document.querySelector('#project-title')
    currentProjectH1.innerText = currentProject
    showTasks()
    for(let i=0; i<_Task__WEBPACK_IMPORTED_MODULE_1__.project.length; i++){
        if(!projects[i]){
        //update current project
        currentProject = _Task__WEBPACK_IMPORTED_MODULE_1__.project[i].title
        currentIndex = i
        currentProjectH1.innerHTML = currentProject
        ;(0,_Todos__WEBPACK_IMPORTED_MODULE_0__.clearTasks)()
        ;(0,_Todos__WEBPACK_IMPORTED_MODULE_0__.taskDOM)(_Task__WEBPACK_IMPORTED_MODULE_1__.project[currentIndex].todos)
        //create elements
        projects[i] = document.createElement('div')
        projects[i].setAttribute('class', 'projects')
        projects[i].innerHTML = `<button class="btn-project">${title.value}</button><button class="remove-project"><i class="fas fa-times"></i></button>`
        projectContainer.insertBefore(projects[i], projectDiv)
        remProject[i] = document.querySelectorAll('.remove-project')[i]
        }
    }
    deleteProject()
    selectProject()
}
//
let todoSelector = 0
const homeBtn = document.querySelector('#home-btn')
homeBtn.addEventListener('mouseup', ()=> {
    todoSelector = 0
    currentProject = 'Home'
    currentProjectH1.innerText = currentProject
    ;(0,_Todos__WEBPACK_IMPORTED_MODULE_0__.addListeners)(_Task__WEBPACK_IMPORTED_MODULE_1__.home)
    ;(0,_Todos__WEBPACK_IMPORTED_MODULE_0__.clearTasks)()
    console.log(_Task__WEBPACK_IMPORTED_MODULE_1__.home)
    ;(0,_Todos__WEBPACK_IMPORTED_MODULE_0__.taskDOM)(_Task__WEBPACK_IMPORTED_MODULE_1__.home)
    showTasks()
})
//Show task menu
function showTasks(){
    const taskField = document.querySelector('#task-field')
    if(_Task__WEBPACK_IMPORTED_MODULE_1__.project.length > 0 || todoSelector === 0){
        taskField.classList.remove('invisible')
    }else {
        taskField.classList.add('invisible')
    }
}
function deleteProject(){
    remProject.forEach((btn,i)=>{
        btn.onmouseup = ()=> {
            btn.parentNode.remove()
            remProject.splice(i,1)
            if(todoSelector === 0){
                (0,_Task__WEBPACK_IMPORTED_MODULE_1__.removeProject)(i, _Task__WEBPACK_IMPORTED_MODULE_1__.home)
            }else if(todoSelector === 1){
                (0,_Task__WEBPACK_IMPORTED_MODULE_1__.removeProject)(i, _Task__WEBPACK_IMPORTED_MODULE_1__.project[currentIndex].todos)
            }
            projects.splice(i,1)
            showTasks()
            if(i !== 0 ){
            currentProject = _Task__WEBPACK_IMPORTED_MODULE_1__.project[i - 1].title
            currentIndex = i - 1 
            currentProjectH1.innerHTML = currentProject
            }else{
                currentProject = ''
                currentIndex = i
                currentProjectH1.innerHTML = currentProject
            }
            todoSelector = 1
        }
    })
}
//

function selectProject(){
    const projectBtn = document.querySelectorAll('.btn-project')
    projectBtn.forEach((p,i)=>{
        p.onmouseup = () => {
            currentProject = _Task__WEBPACK_IMPORTED_MODULE_1__.project[i].title
            currentIndex = i
            currentProjectH1.innerHTML = currentProject
            todoSelector = 1
            ;(0,_Todos__WEBPACK_IMPORTED_MODULE_0__.clearTasks)()
            ;(0,_Todos__WEBPACK_IMPORTED_MODULE_0__.taskDOM)(_Task__WEBPACK_IMPORTED_MODULE_1__.project[currentIndex].todos)
            ;(0,_Todos__WEBPACK_IMPORTED_MODULE_0__.addListeners)(_Task__WEBPACK_IMPORTED_MODULE_1__.project[currentIndex].todos)

            
        }
    })
}
//Listeners to open the project menu and add projects
const title = document.querySelector('#project-title')
const openProject = document.querySelector('#open-project')

openProject.addEventListener('mouseup', projectListener)
function projectListener(){console.log('patos funcionando')
    const projectInfo = document.querySelector('#project-info')
    const closeProject = document.querySelector('#close-project')
    
    const editProject = document.querySelector('#edit-project')
    editProject.classList.remove('active')
    openProject.classList.remove('active')
    projectInfo.classList.add('active')
    closeProject.addEventListener('mouseup', ()=> {
        projectInfo.classList.remove('active')
        openProject.classList.add('active')
    })
    const add_project = document.querySelector('#add-project')
    add_project.onmouseup = ()=>{
        if(patterns.title.test(title.value) === true){
            currentProject = title.value
            currentProjectH1.innerHTML = currentProject
            editProject.value = currentProject
            editProject.classList.add('active')
            projectInfo.classList.remove('active')
            openProject.classList.add('active')
            ;(0,_Task__WEBPACK_IMPORTED_MODULE_1__.addProject)(currentProject, [])
            ;(0,_Todos__WEBPACK_IMPORTED_MODULE_0__.clearTasks)() 
            console.log(_Task__WEBPACK_IMPORTED_MODULE_1__.project)
            ;(0,_Todos__WEBPACK_IMPORTED_MODULE_0__.taskDOM)(_Task__WEBPACK_IMPORTED_MODULE_1__.project[currentIndex].todos)
            projectDOM()
            todoSelector = 1
        }    
    }
}



/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "project": () => (/* binding */ project),
/* harmony export */   "home": () => (/* binding */ home),
/* harmony export */   "today": () => (/* binding */ today),
/* harmony export */   "thisWeek": () => (/* binding */ thisWeek),
/* harmony export */   "addTodo": () => (/* binding */ addTodo),
/* harmony export */   "removeTodo": () => (/* binding */ removeTodo),
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "removeProject": () => (/* binding */ removeProject),
/* harmony export */   "populateStorage": () => (/* binding */ populateStorage),
/* harmony export */   "setStorageValues": () => (/* binding */ setStorageValues)
/* harmony export */ });
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects */ "./src/modules/Projects.js");
/* harmony import */ var _Todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todos */ "./src/modules/Todos.js");
//import {populateStorage} from './Storage'
//
//import {project, home, today, thisWeek} from "./Task";




function createTask(title, date, checked, project){
    return{title, date, checked, project}
}
let project = []
let home = []
let today = []
let thisWeek = []

function addTodo( type,title,date,check, proj){
    type.push(createTask(title, date, check, proj))
    populateStorage()
}

function removeTodo(i, type){
    type.splice(i,1)
    populateStorage()
}
function createProject(title, todos){
    return {title, todos}
}
function addProject(title, todos){
    project.push(createProject(title, todos))
    populateStorage()
    console.log('projeto')

}
function removeProject(i){
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

function populateStorage(){
    localStorage.setObj('home', home);
    localStorage.setObj('project', project);   
    setStorageValues()
}

function setStorageValues() {
    var currentHome = localStorage.getObj('home');  
    var currentProjectObj = localStorage.getObj('project');
    home = currentHome 
    project = currentProjectObj;
    console.log(project)
    console.log(home)
    if(project.length > 0){
        (0,_Projects__WEBPACK_IMPORTED_MODULE_0__.projectDOM)();
    }
    if(home.length > 0 & _Projects__WEBPACK_IMPORTED_MODULE_0__.todoSelector === 0){
        (0,_Todos__WEBPACK_IMPORTED_MODULE_1__.taskDOM)(home);
    }
    
}
if(!localStorage.getObj('project')) {
    populateStorage();
  } else {
    setStorageValues();
  }

//

/***/ }),

/***/ "./src/modules/Todos.js":
/*!******************************!*\
  !*** ./src/modules/Todos.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskDOM": () => (/* binding */ taskDOM),
/* harmony export */   "removeDOM": () => (/* binding */ removeDOM),
/* harmony export */   "addListeners": () => (/* binding */ addListeners),
/* harmony export */   "clearTasks": () => (/* binding */ clearTasks)
/* harmony export */ });
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/modules/Task.js");
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projects */ "./src/modules/Projects.js");




//
//
// Todos
let todo = []
let removeBtn = []
let dates = []
let datesText = []
let checkbox = []
let editTitles = []

//Display todos on screen
function taskDOM(type){
    if(_Projects__WEBPACK_IMPORTED_MODULE_1__.todoSelector === 0){
        _Projects__WEBPACK_IMPORTED_MODULE_1__.currentProjectH1.innerText = 'Home'
        addListeners(_Task__WEBPACK_IMPORTED_MODULE_0__.home)
        clearTasks()
        ;(0,_Projects__WEBPACK_IMPORTED_MODULE_1__.showTasks)()
    }
    const taskList = document.querySelector('#task-list')
    for(let i=0; i<type.length; i++) {  
        if(!todo[i]){     
            // Create task field    
            todo[i] = document.createElement('div')
            todo[i].innerHTML = `<div class='left'>
            <input type='checkbox' class="check" name="check">
            <input type='text' class="task-name">
            <p class='edit-titles active'></p></div>
            <div class='right'><p class='edit-dates active'>No Date</p><input type="date" class="date">
            <button class="remove"><i class="fas fa-trash-alt"></i></button></div>`
            todo[i].setAttribute('class', 'task')
            taskList.appendChild(todo[i])
            // Add field elements 
            removeBtn[i] = document.querySelectorAll('.remove')[i]
            dates[i] = document.querySelectorAll('.date')[i]
            datesText[i] = document.querySelectorAll('.edit-dates')[i]
            checkbox[i] = document.querySelectorAll('.check')[i]            
            editTitles[i] = document.querySelectorAll('.edit-titles')[i]
            checkbox[i].checked = type[i].checked
            editTitles[i].innerText = type[i].title  
            if(type[i].date !== ''){datesText[i].innerText = type[i].date} 
        }
    }
    addChanges(type)
}
//Add changes to input, date, checkboxes
function addChanges(type){
    removeDOM(type)
    changeCheck(type)
    changeDate(type)
    editTask(type)
}
//Allows change the title of the task
function editTask(type){
    let editInput = document.querySelectorAll('.task-name')
    editTitles.forEach((eTitles,i)=>{
        eTitles.onmouseup = ()=>{
            eTitles.classList.remove('active')
            editInput[i].classList.add('active')
            ;(0,_Task__WEBPACK_IMPORTED_MODULE_0__.populateStorage)()
        }
    })
    editInput.forEach((input,i)=>{
        input.value = editTitles[i].innerHTML
        input.onkeyup = function (event){
            if(event.key === 'Enter'){
                editTitles[i].innerHTML = input.value
                type[i].title = input.value
                input.classList.remove('active')
                editTitles[i].classList.add('active')
                ;(0,_Task__WEBPACK_IMPORTED_MODULE_0__.populateStorage)()
            }
        }
    })
}
//Change the status of the date inputs
function changeDate(type){
    datesText.forEach((p,i)=> {
        p.onmouseup = ()=>{
            console.log('passei o mosue')
            p.classList.remove('active')
            dates[i].classList.add('active')
        }
    })
    dates.forEach((input, i) => {
        input.onchange = () => {console.log(input.value)
            type[i].date = input.value
            datesText[i].innerText = input.value
            datesText[i].classList.add('active')
            input.classList.remove('active')
            ;(0,_Task__WEBPACK_IMPORTED_MODULE_0__.populateStorage)()
        }
    })
}

//Removes an element from the task array and DOM
function removeDOM(type){  
    removeBtn.forEach((btn, i) => {
        btn.onmouseup = ()=>{
            btn.parentNode.parentNode.remove()
            ;(0,_Task__WEBPACK_IMPORTED_MODULE_0__.removeTodo)(i, type) 
            todo.splice(i,1)
            removeBtn.splice(i,1)
            ;(0,_Task__WEBPACK_IMPORTED_MODULE_0__.populateStorage)()
        }
               
    });
}
//Changes the status of the checkboxes
function changeCheck(type){
    checkbox.forEach((check,i)=> {
        check.addEventListener('change', () =>{
            type[i].checked = check.checked
            ;(0,_Task__WEBPACK_IMPORTED_MODULE_0__.populateStorage)()
        })
    })
}

const btnOpen = document.querySelector('#open-menu')
btnOpen.addEventListener('mouseup', ()=> {
    const taskField = document.querySelector('#task-field')
    taskField.classList.add('active')
    const btnClose = document.querySelector('#close-btn')
    btnClose.addEventListener('mouseup', ()=>{
        taskField.classList.remove('active')
    })
    console.log(_Projects__WEBPACK_IMPORTED_MODULE_1__.todoSelector)
    if(_Projects__WEBPACK_IMPORTED_MODULE_1__.todoSelector === 0){
        addListeners(_Task__WEBPACK_IMPORTED_MODULE_0__.home)
    }else if(_Projects__WEBPACK_IMPORTED_MODULE_1__.todoSelector === 1){
        addListeners(_Task__WEBPACK_IMPORTED_MODULE_0__.project[_Projects__WEBPACK_IMPORTED_MODULE_1__.currentIndex].todos)
    }
})
//Add listener for open and close the title menu
function addListeners(selector){console.log(selector)
    const title = document.querySelector('#task-title').value 
    const taskField = document.querySelector('#task-field')
    const addTask = document.querySelector('#add-task')
    addTask.onmouseup = ()=>{
        if(_Projects__WEBPACK_IMPORTED_MODULE_1__.patterns.title.test(title.value)=== true){console.log('todo added')
            const title = document.querySelector('#task-title').value
            
            ;(0,_Task__WEBPACK_IMPORTED_MODULE_0__.addTodo)(selector , title, '', false, _Projects__WEBPACK_IMPORTED_MODULE_1__.currentProject)
            taskDOM(selector)
            taskField.classList.remove('active')
        }
    }
}
function clearTasks(){
    todo = []
    removeBtn = []
    const taskList = document.querySelector('#task-list')
    while (taskList.childElementCount>0){
        taskList.firstChild.remove()
    }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Task */ "./src/modules/Task.js");


const content = document.querySelector('#content')
// // 
// //
// // Tasks
// function createTask(title, date, checked, project){
//     return{title, date, checked, project}
// } 
// let project = [] 
// let home = [] 
// let today = [] 
// let thisWeek = []
 
// function addTodo( type,title,date,check, proj){
//     type.push(createTask(title, date, check, proj))
//     populateStorage()
// }
 
// function removeTodo(i, type){
//     type.splice(i,1)
//     populateStorage()
// }
// function createProject(title, todos){
//     return {title, todos}
// } 
// function addProject(title, todos){
//     project.push(createProject(title, todos))
//     populateStorage()

// } 
// function removeProject(i){
//     project.splice(i,1)
//     populateStorage()
// }
// //
// //
// //Add project lists
// const currentProjectH1 = document.querySelector('#current-project')
// let currentProject = ''
// let currentIndex = 0
// const remProject = [] 
// let projects = []
// let patterns = {
//     title: /^.{1,20}$/,
// }

// let todoSelector = home
// function projectDOM(){console.log('projectDOM')
//     if(project.length>0){
//     const currentProjectH1 = document.querySelector('#current-project')
//     const projectContainer = document.querySelector('#projects')
//     const projectDiv = document.querySelector('#project-div')
//     const title = document.querySelector('#project-title')
//     currentProjectH1.innerText = currentProject
//     todoSelector = project[currentIndex].todos
//     showTasks()
//     for(let i=0; i<project.length; i++){
//         if(!projects[i]){
//         //update current project
//         currentProject = project[i].title
//         currentIndex = i
//         currentProjectH1.innerHTML = currentProject
//         clearTasks()
//         taskDOM(project[currentIndex].todos)
//         //create elements
//         projects[i] = document.createElement('div')
//         projects[i].setAttribute('class', 'projects')
//         projects[i].innerHTML = `<button class="btn-project">${title.value}</button><button class="remove-project"><i class="fas fa-times"></i></button>`
//         projectContainer.insertBefore(projects[i], projectDiv)
//         remProject[i] = document.querySelectorAll('.remove-project')[i]
//         }
//     }
//     deleteProject()
//     selectProject()
//     console.log(project)}
// }
// //


// const homeBtn = document.querySelector('#home-btn')
// homeBtn.addEventListener('mouseup', ()=> {
//     todoSelector = home
//     currentProject = 'Home'
//     currentProjectH1.innerText = currentProject
//     addListeners(todoSelector)
//     clearTasks()
//     taskDOM(todoSelector)
//     showTasks()
// })
// //Show task menu
// function showTasks(){
//     const taskField = document.querySelector('#task-field')
//     if(project.length > 0 || todoSelector == home){
//         taskField.classList.remove('invisible')
//     }else {
//         taskField.classList.add('invisible')
//     }
// }
// function deleteProject(){
//     remProject.forEach((btn,i)=>{
//         btn.onmouseup = ()=> {
//             btn.parentNode.remove()
//             remProject.splice(i,1)
//             removeProject(i, todoSelector)
//             projects.splice(i,1)
//             showTasks()
//             if(i !== 0 ){
//             currentProject = project[i - 1].title
//             currentIndex = i - 1 
//             currentProjectH1.innerHTML = currentProject
//             }else{
//                 currentProject = ''
//                 currentIndex = i
//                 currentProjectH1.innerHTML = currentProject
//             }
//             todoSelector = project[currentIndex].todos
//             //populateStorage()
//         }
//     })
// }
// //

// function selectProject(){
//     const projectBtn = document.querySelectorAll('.btn-project')
//     projectBtn.forEach((p,i)=>{
//         p.onmouseup = () => {
//             currentProject = project[i].title
//             currentIndex = i
//             currentProjectH1.innerHTML = currentProject
//             todoSelector = project[currentIndex].todos
//             clearTasks()
//             taskDOM(todoSelector)
//             addListeners(todoSelector)
//         }
//     })
// }
// //Listeners to open the project menu and add projects
// const title = document.querySelector('#project-title')
// const openProject = document.querySelector('#open-project')

// openProject.addEventListener('mouseup', projectListener)
// function projectListener(){console.log('patos funcionando')
//     const projectInfo = document.querySelector('#project-info')
//     const closeProject = document.querySelector('#close-project')
    
//     const editProject = document.querySelector('#edit-project')
//     editProject.classList.remove('active')
//     openProject.classList.remove('active')
//     projectInfo.classList.add('active')
//     closeProject.addEventListener('mouseup', ()=> {
//         projectInfo.classList.remove('active')
//         openProject.classList.add('active')
//     })
//     const add_project = document.querySelector('#add-project')
//     add_project.onmouseup = ()=>{
//         if(patterns.title.test(title.value) === true){
//             currentProject = title.value
//             currentProjectH1.innerHTML = currentProject
//             editProject.value = currentProject
//             editProject.classList.add('active')
//             projectInfo.classList.remove('active')
//             openProject.classList.add('active')
//             addProject(currentProject, [])
//             clearTasks()
//             taskDOM(todoSelector)
//             addListeners(todoSelector)
//             projectDOM()
//         }    
//     }
// }


// //
// //
// // Todos
// let todo = []
// let removeBtn = []
// let dates = []
// let datesText = []
// let checkbox = []
// let editTitles = []

// //Display todos on screen 
// function taskDOM(type){
//     const taskList = document.querySelector('#task-list')
//     for(let i=0; i<type.length; i++) {  
//         if(!todo[i]){     
//             // Create task field    
//             todo[i] = document.createElement('div')
//             todo[i].innerHTML = `<div class='left'>
//             <input type='checkbox' class="check" name="check">
//             <input type='text' class="task-name">
//             <p class='edit-titles active'></p></div>
//             <div class='right'><p class='edit-dates active'>No Date</p><input type="date" class="date">
//             <button class="remove"><i class="fas fa-trash-alt"></i></button></div>`
//             todo[i].setAttribute('class', 'task')
//             taskList.appendChild(todo[i])
//             // Add field elements 
//             removeBtn[i] = document.querySelectorAll('.remove')[i]
//             dates[i] = document.querySelectorAll('.date')[i]
//             datesText[i] = document.querySelectorAll('.edit-dates')[i]
//             checkbox[i] = document.querySelectorAll('.check')[i]            
//             editTitles[i] = document.querySelectorAll('.edit-titles')[i]
//             checkbox[i].checked = type[i].checked
//             editTitles[i].innerText = type[i].title  
//             if(type[i].date !== ''){datesText[i].innerText = type[i].date} 
//         }
//     }
//     addChanges(type)

// }
// //Add changes to input, date, checkboxes
// function addChanges(type){
//     removeDOM(type)
//     changeCheck(type)
//     changeDate(type)
//     editTask(type)
// }
// //Allows change the title of the task
// function editTask(type){
//     let editInput = document.querySelectorAll('.task-name')
//     editTitles.forEach((eTitles,i)=>{
//         eTitles.onmouseup = ()=>{
//             eTitles.classList.remove('active')
//             editInput[i].classList.add('active')
//             populateStorage()
//         }
//     })
//     editInput.forEach((input,i)=>{
//         input.value = editTitles[i].innerHTML
//         input.onkeyup = function (event){
//             if(event.key === 'Enter'){
//                 editTitles[i].innerHTML = input.value
//                 type[i].title = input.value
//                 input.classList.remove('active')
//                 editTitles[i].classList.add('active')
//                 populateStorage()
//             }
//         }
//     })
// }
// //Change the status of the date inputs
// function changeDate(type){
//     datesText.forEach((p,i)=> {
//         p.onmouseup = ()=>{
//             console.log('passei o mosue')
//             p.classList.remove('active')
//             dates[i].classList.add('active')
//         }
//     })
//     dates.forEach((input, i) => {
//         input.onchange = () => {console.log(input.value)
//             type[i].date = input.value
//             datesText[i].innerText = input.value
//             datesText[i].classList.add('active')
//             input.classList.remove('active')
//             populateStorage()
//         }
//     })
// }

// //Removes an element from the task array and DOM 
// function removeDOM(type){  
//     removeBtn.forEach((btn, i) => {
//         btn.onmouseup = ()=>{
//             btn.parentNode.parentNode.remove()
//             removeTodo(i, type) 
//             todo.splice(i,1)
//             removeBtn.splice(i,1)
//             populateStorage()
//         }
               
//     });
// }
// //Changes the status of the checkboxes
// function changeCheck(type){
//     checkbox.forEach((check,i)=> {
//         check.addEventListener('change', () =>{
//             type[i].checked = check.checked
//             populateStorage()
//         })
//     })
// }

// const btnOpen = document.querySelector('#open-menu')
// btnOpen.addEventListener('mouseup', ()=> {
//     const taskField = document.querySelector('#task-field')
//     taskField.classList.add('active')
//     const btnClose = document.querySelector('#close-btn')
//     btnClose.addEventListener('mouseup', ()=>{
//         taskField.classList.remove('active')
//     })
//     console.log(todoSelector)
//     addListeners(todoSelector)
// })
// //Add listener for open and close the title menu 
// function addListeners(selector){
//     const title = document.querySelector('#task-title').value 
//     const taskField = document.querySelector('#task-field')
//     const addTask = document.querySelector('#add-task')
      
//     addTask.onmouseup = ()=>{
//         if(patterns.title.test(title.value)=== true){console.log('todo added')
//             const title = document.querySelector('#task-title').value
//             addTodo(selector , title, '', false, currentProject)
//             taskDOM(selector)
//             taskField.classList.remove('active')
//         }
//     }
// } 
// function clearTasks(){
//     todo = []
//     removeBtn = []
//     const taskList = document.querySelector('#task-list')
//     while (taskList.childElementCount>0){
//         taskList.firstChild.remove()
//     }
// }

// //
// //
// // Local Storage
// Storage.prototype.setObj = function(key, obj){
//     return this.setItem(key, JSON.stringify(obj))
// }
// Storage.prototype.getObj = function(key){
//     return JSON.parse(this.getItem(key))
// }
// //Local storage verify
//  function populateStorage() {console.log(localStorage)
//     if(!localStorage.getObj('project') && !localStorage.getObj('home')){
//         localStorage.setObj('home', home);
//         localStorage.setObj('project', project);
//         var currentHome = localStorage.getObj('home');
//         var currentProjectObj = localStorage.getObj('project');
//         project = currentProjectObj;
//         home = currentHome
//     }else {
//         var currentHome = localStorage.getObj('home');
//         var currentProjectObj = localStorage.getObj('project');
//         project = currentProjectObj;
//         home = currentHome
//         if(project.length>0){
//             projectDOM()
//         }
//         if(home.length>0){
//             taskDOM(home)
//         }
//     }
// }
// populateStorage()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVE7QUFDUjtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9Qcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9UYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1RvZG9zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0YXNrRE9NICwgY2xlYXJUYXNrcywgYWRkTGlzdGVuZXJzfSBmcm9tIFwiLi9Ub2Rvc1wiO1xyXG5pbXBvcnQgeyBwcm9qZWN0LCBhZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCBob21lICwgdG9kYXksIHRoaXNXZWVrIH0gZnJvbSAnLi9UYXNrJ1xyXG5cclxuLy9BZGQgcHJvamVjdCBsaXN0c1xyXG5leHBvcnQgY29uc3QgY3VycmVudFByb2plY3RIMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LXByb2plY3QnKVxyXG5leHBvcnQgbGV0IGN1cnJlbnRQcm9qZWN0ID0gJydcclxuZXhwb3J0IGxldCBjdXJyZW50SW5kZXggPSAwXHJcbmNvbnN0IHJlbVByb2plY3QgPSBbXSBcclxubGV0IHByb2plY3RzID0gW11cclxuZXhwb3J0IGxldCBwYXR0ZXJucyA9IHtcclxuICAgIHRpdGxlOiAvXi57MSwyMH0kLyxcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdERPTSgpe2NvbnNvbGUubG9nKCdwcm9qZWN0RE9NJylcclxuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0SDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC1wcm9qZWN0JylcclxuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHMnKVxyXG4gICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWRpdicpXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXRpdGxlJylcclxuICAgIGN1cnJlbnRQcm9qZWN0SDEuaW5uZXJUZXh0ID0gY3VycmVudFByb2plY3RcclxuICAgIHNob3dUYXNrcygpXHJcbiAgICBmb3IobGV0IGk9MDsgaTxwcm9qZWN0Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBpZighcHJvamVjdHNbaV0pe1xyXG4gICAgICAgIC8vdXBkYXRlIGN1cnJlbnQgcHJvamVjdFxyXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdFtpXS50aXRsZVxyXG4gICAgICAgIGN1cnJlbnRJbmRleCA9IGlcclxuICAgICAgICBjdXJyZW50UHJvamVjdEgxLmlubmVySFRNTCA9IGN1cnJlbnRQcm9qZWN0XHJcbiAgICAgICAgY2xlYXJUYXNrcygpXHJcbiAgICAgICAgdGFza0RPTShwcm9qZWN0W2N1cnJlbnRJbmRleF0udG9kb3MpXHJcbiAgICAgICAgLy9jcmVhdGUgZWxlbWVudHNcclxuICAgICAgICBwcm9qZWN0c1tpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcHJvamVjdHNbaV0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0cycpXHJcbiAgICAgICAgcHJvamVjdHNbaV0uaW5uZXJIVE1MID0gYDxidXR0b24gY2xhc3M9XCJidG4tcHJvamVjdFwiPiR7dGl0bGUudmFsdWV9PC9idXR0b24+PGJ1dHRvbiBjbGFzcz1cInJlbW92ZS1wcm9qZWN0XCI+PGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+PC9idXR0b24+YFxyXG4gICAgICAgIHByb2plY3RDb250YWluZXIuaW5zZXJ0QmVmb3JlKHByb2plY3RzW2ldLCBwcm9qZWN0RGl2KVxyXG4gICAgICAgIHJlbVByb2plY3RbaV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVtb3ZlLXByb2plY3QnKVtpXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRlbGV0ZVByb2plY3QoKVxyXG4gICAgc2VsZWN0UHJvamVjdCgpXHJcbn1cclxuLy9cclxuZXhwb3J0IGxldCB0b2RvU2VsZWN0b3IgPSAwXHJcbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZS1idG4nKVxyXG5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKT0+IHtcclxuICAgIHRvZG9TZWxlY3RvciA9IDBcclxuICAgIGN1cnJlbnRQcm9qZWN0ID0gJ0hvbWUnXHJcbiAgICBjdXJyZW50UHJvamVjdEgxLmlubmVyVGV4dCA9IGN1cnJlbnRQcm9qZWN0XHJcbiAgICBhZGRMaXN0ZW5lcnMoaG9tZSlcclxuICAgIGNsZWFyVGFza3MoKVxyXG4gICAgY29uc29sZS5sb2coaG9tZSlcclxuICAgIHRhc2tET00oaG9tZSlcclxuICAgIHNob3dUYXNrcygpXHJcbn0pXHJcbi8vU2hvdyB0YXNrIG1lbnVcclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dUYXNrcygpe1xyXG4gICAgY29uc3QgdGFza0ZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZmllbGQnKVxyXG4gICAgaWYocHJvamVjdC5sZW5ndGggPiAwIHx8IHRvZG9TZWxlY3RvciA9PT0gMCl7XHJcbiAgICAgICAgdGFza0ZpZWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpXHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgICAgdGFza0ZpZWxkLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpXHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdCgpe1xyXG4gICAgcmVtUHJvamVjdC5mb3JFYWNoKChidG4saSk9PntcclxuICAgICAgICBidG4ub25tb3VzZXVwID0gKCk9PiB7XHJcbiAgICAgICAgICAgIGJ0bi5wYXJlbnROb2RlLnJlbW92ZSgpXHJcbiAgICAgICAgICAgIHJlbVByb2plY3Quc3BsaWNlKGksMSlcclxuICAgICAgICAgICAgaWYodG9kb1NlbGVjdG9yID09PSAwKXtcclxuICAgICAgICAgICAgICAgIHJlbW92ZVByb2plY3QoaSwgaG9tZSlcclxuICAgICAgICAgICAgfWVsc2UgaWYodG9kb1NlbGVjdG9yID09PSAxKXtcclxuICAgICAgICAgICAgICAgIHJlbW92ZVByb2plY3QoaSwgcHJvamVjdFtjdXJyZW50SW5kZXhdLnRvZG9zKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHByb2plY3RzLnNwbGljZShpLDEpXHJcbiAgICAgICAgICAgIHNob3dUYXNrcygpXHJcbiAgICAgICAgICAgIGlmKGkgIT09IDAgKXtcclxuICAgICAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0W2kgLSAxXS50aXRsZVxyXG4gICAgICAgICAgICBjdXJyZW50SW5kZXggPSBpIC0gMSBcclxuICAgICAgICAgICAgY3VycmVudFByb2plY3RIMS5pbm5lckhUTUwgPSBjdXJyZW50UHJvamVjdFxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gJydcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleCA9IGlcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0SDEuaW5uZXJIVE1MID0gY3VycmVudFByb2plY3RcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0b2RvU2VsZWN0b3IgPSAxXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG4vL1xyXG5cclxuZnVuY3Rpb24gc2VsZWN0UHJvamVjdCgpe1xyXG4gICAgY29uc3QgcHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tcHJvamVjdCcpXHJcbiAgICBwcm9qZWN0QnRuLmZvckVhY2goKHAsaSk9PntcclxuICAgICAgICBwLm9ubW91c2V1cCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0W2ldLnRpdGxlXHJcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleCA9IGlcclxuICAgICAgICAgICAgY3VycmVudFByb2plY3RIMS5pbm5lckhUTUwgPSBjdXJyZW50UHJvamVjdFxyXG4gICAgICAgICAgICB0b2RvU2VsZWN0b3IgPSAxXHJcbiAgICAgICAgICAgIGNsZWFyVGFza3MoKVxyXG4gICAgICAgICAgICB0YXNrRE9NKHByb2plY3RbY3VycmVudEluZGV4XS50b2RvcylcclxuICAgICAgICAgICAgYWRkTGlzdGVuZXJzKHByb2plY3RbY3VycmVudEluZGV4XS50b2RvcylcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuLy9MaXN0ZW5lcnMgdG8gb3BlbiB0aGUgcHJvamVjdCBtZW51IGFuZCBhZGQgcHJvamVjdHNcclxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC10aXRsZScpXHJcbmNvbnN0IG9wZW5Qcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wZW4tcHJvamVjdCcpXHJcblxyXG5vcGVuUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgcHJvamVjdExpc3RlbmVyKVxyXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdExpc3RlbmVyKCl7Y29uc29sZS5sb2coJ3BhdG9zIGZ1bmNpb25hbmRvJylcclxuICAgIGNvbnN0IHByb2plY3RJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtaW5mbycpXHJcbiAgICBjb25zdCBjbG9zZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UtcHJvamVjdCcpXHJcbiAgICBcclxuICAgIGNvbnN0IGVkaXRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtcHJvamVjdCcpXHJcbiAgICBlZGl0UHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgb3BlblByb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgIHByb2plY3RJbmZvLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICBjbG9zZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpPT4ge1xyXG4gICAgICAgIHByb2plY3RJbmZvLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgICAgb3BlblByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgIH0pXHJcbiAgICBjb25zdCBhZGRfcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcHJvamVjdCcpXHJcbiAgICBhZGRfcHJvamVjdC5vbm1vdXNldXAgPSAoKT0+e1xyXG4gICAgICAgIGlmKHBhdHRlcm5zLnRpdGxlLnRlc3QodGl0bGUudmFsdWUpID09PSB0cnVlKXtcclxuICAgICAgICAgICAgY3VycmVudFByb2plY3QgPSB0aXRsZS52YWx1ZVxyXG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdEgxLmlubmVySFRNTCA9IGN1cnJlbnRQcm9qZWN0XHJcbiAgICAgICAgICAgIGVkaXRQcm9qZWN0LnZhbHVlID0gY3VycmVudFByb2plY3RcclxuICAgICAgICAgICAgZWRpdFByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgICAgICAgICAgcHJvamVjdEluZm8uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICAgICAgICAgb3BlblByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgICAgICAgICAgYWRkUHJvamVjdChjdXJyZW50UHJvamVjdCwgW10pXHJcbiAgICAgICAgICAgIGNsZWFyVGFza3MoKSBcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdClcclxuICAgICAgICAgICAgdGFza0RPTShwcm9qZWN0W2N1cnJlbnRJbmRleF0udG9kb3MpXHJcbiAgICAgICAgICAgIHByb2plY3RET00oKVxyXG4gICAgICAgICAgICB0b2RvU2VsZWN0b3IgPSAxXHJcbiAgICAgICAgfSAgICBcclxuICAgIH1cclxufVxyXG5cclxuIiwiLy9pbXBvcnQge3BvcHVsYXRlU3RvcmFnZX0gZnJvbSAnLi9TdG9yYWdlJ1xyXG4vL1xyXG4vL2ltcG9ydCB7cHJvamVjdCwgaG9tZSwgdG9kYXksIHRoaXNXZWVrfSBmcm9tIFwiLi9UYXNrXCI7XHJcbmltcG9ydCB7Y3VycmVudFByb2plY3QsIHByb2plY3RET00sIHRvZG9TZWxlY3Rvcn0gZnJvbSAnLi9Qcm9qZWN0cydcclxuaW1wb3J0IHsgdGFza0RPTSB9IGZyb20gXCIuL1RvZG9zXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZGF0ZSwgY2hlY2tlZCwgcHJvamVjdCl7XHJcbiAgICByZXR1cm57dGl0bGUsIGRhdGUsIGNoZWNrZWQsIHByb2plY3R9XHJcbn1cclxuZXhwb3J0IGxldCBwcm9qZWN0ID0gW11cclxuZXhwb3J0IGxldCBob21lID0gW11cclxuZXhwb3J0IGxldCB0b2RheSA9IFtdXHJcbmV4cG9ydCBsZXQgdGhpc1dlZWsgPSBbXVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvZG8oIHR5cGUsdGl0bGUsZGF0ZSxjaGVjaywgcHJvail7XHJcbiAgICB0eXBlLnB1c2goY3JlYXRlVGFzayh0aXRsZSwgZGF0ZSwgY2hlY2ssIHByb2opKVxyXG4gICAgcG9wdWxhdGVTdG9yYWdlKClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRvZG8oaSwgdHlwZSl7XHJcbiAgICB0eXBlLnNwbGljZShpLDEpXHJcbiAgICBwb3B1bGF0ZVN0b3JhZ2UoKVxyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUsIHRvZG9zKXtcclxuICAgIHJldHVybiB7dGl0bGUsIHRvZG9zfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0KHRpdGxlLCB0b2Rvcyl7XHJcbiAgICBwcm9qZWN0LnB1c2goY3JlYXRlUHJvamVjdCh0aXRsZSwgdG9kb3MpKVxyXG4gICAgcG9wdWxhdGVTdG9yYWdlKClcclxuICAgIGNvbnNvbGUubG9nKCdwcm9qZXRvJylcclxuXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb2plY3QoaSl7XHJcbiAgICBwcm9qZWN0LnNwbGljZShpLDEpXHJcbiAgICBwb3B1bGF0ZVN0b3JhZ2UoKVxyXG59XHJcbi8vQWRkIG1ldGhvZHMgdG8gdXNlIG9iamVjdHMgb24gbG9jYWwgc3RvcmFnZSBcclxuU3RvcmFnZS5wcm90b3R5cGUuc2V0T2JqID0gZnVuY3Rpb24oa2V5LCBvYmope1xyXG4gICAgcmV0dXJuIHRoaXMuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KG9iaikpXHJcbn1cclxuU3RvcmFnZS5wcm90b3R5cGUuZ2V0T2JqID0gZnVuY3Rpb24oa2V5KXtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKHRoaXMuZ2V0SXRlbShrZXkpKVxyXG59XHJcbi8vICAgICAgLy8gIFNldHRpbmcgdGhlIGxvY2FsIHN0b3JhZ2UgICAgLy8gICAgICAvL1xyXG5TdG9yYWdlLnByb3RvdHlwZS5zZXRPYmogPSBmdW5jdGlvbihrZXksIG9iaikge1xyXG4gICAgcmV0dXJuIHRoaXMuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KG9iaikpXHJcbn1cclxuU3RvcmFnZS5wcm90b3R5cGUuZ2V0T2JqID0gZnVuY3Rpb24oa2V5KSB7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLmdldEl0ZW0oa2V5KSlcclxufVxyXG4vLyAgICAgICAvLyAgICAgIC8vICAgICAgIC8vICAgICAgXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGVTdG9yYWdlKCl7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0T2JqKCdob21lJywgaG9tZSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0T2JqKCdwcm9qZWN0JywgcHJvamVjdCk7ICAgXHJcbiAgICBzZXRTdG9yYWdlVmFsdWVzKClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFN0b3JhZ2VWYWx1ZXMoKSB7XHJcbiAgICB2YXIgY3VycmVudEhvbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0T2JqKCdob21lJyk7ICBcclxuICAgIHZhciBjdXJyZW50UHJvamVjdE9iaiA9IGxvY2FsU3RvcmFnZS5nZXRPYmooJ3Byb2plY3QnKTtcclxuICAgIGhvbWUgPSBjdXJyZW50SG9tZSBcclxuICAgIHByb2plY3QgPSBjdXJyZW50UHJvamVjdE9iajtcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3QpXHJcbiAgICBjb25zb2xlLmxvZyhob21lKVxyXG4gICAgaWYocHJvamVjdC5sZW5ndGggPiAwKXtcclxuICAgICAgICBwcm9qZWN0RE9NKCk7XHJcbiAgICB9XHJcbiAgICBpZihob21lLmxlbmd0aCA+IDAgJiB0b2RvU2VsZWN0b3IgPT09IDApe1xyXG4gICAgICAgIHRhc2tET00oaG9tZSk7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5pZighbG9jYWxTdG9yYWdlLmdldE9iaigncHJvamVjdCcpKSB7XHJcbiAgICBwb3B1bGF0ZVN0b3JhZ2UoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgc2V0U3RvcmFnZVZhbHVlcygpO1xyXG4gIH1cclxuXHJcbi8vIiwiaW1wb3J0IHtjb21wYXJlQXNjLCBmb3JtYXQsIGZvcm1hdERpc3RhbmNlIH0gZnJvbSAnZGF0ZS1mbnMnXHJcbmltcG9ydCB7cmVtb3ZlVG9kbywgYWRkVG9kbywgcHJvamVjdCwgaG9tZSAgfSBmcm9tICcuL1Rhc2snXHJcbmltcG9ydCB7Y3VycmVudEluZGV4LCBjdXJyZW50UHJvamVjdCwgY3VycmVudFByb2plY3RIMSwgcGF0dGVybnMsIHNob3dUYXNrcywgdG9kb1NlbGVjdG9yfSBmcm9tICcuL1Byb2plY3RzJ1xyXG5pbXBvcnQge3BvcHVsYXRlU3RvcmFnZX0gZnJvbSAnLi9UYXNrJ1xyXG4vL1xyXG4vL1xyXG4vLyBUb2Rvc1xyXG5sZXQgdG9kbyA9IFtdXHJcbmxldCByZW1vdmVCdG4gPSBbXVxyXG5sZXQgZGF0ZXMgPSBbXVxyXG5sZXQgZGF0ZXNUZXh0ID0gW11cclxubGV0IGNoZWNrYm94ID0gW11cclxubGV0IGVkaXRUaXRsZXMgPSBbXVxyXG5cclxuLy9EaXNwbGF5IHRvZG9zIG9uIHNjcmVlblxyXG5leHBvcnQgZnVuY3Rpb24gdGFza0RPTSh0eXBlKXtcclxuICAgIGlmKHRvZG9TZWxlY3RvciA9PT0gMCl7XHJcbiAgICAgICAgY3VycmVudFByb2plY3RIMS5pbm5lclRleHQgPSAnSG9tZSdcclxuICAgICAgICBhZGRMaXN0ZW5lcnMoaG9tZSlcclxuICAgICAgICBjbGVhclRhc2tzKClcclxuICAgICAgICBzaG93VGFza3MoKVxyXG4gICAgfVxyXG4gICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1saXN0JylcclxuICAgIGZvcihsZXQgaT0wOyBpPHR5cGUubGVuZ3RoOyBpKyspIHsgIFxyXG4gICAgICAgIGlmKCF0b2RvW2ldKXsgICAgIFxyXG4gICAgICAgICAgICAvLyBDcmVhdGUgdGFzayBmaWVsZCAgICBcclxuICAgICAgICAgICAgdG9kb1tpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIHRvZG9baV0uaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9J2xlZnQnPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGNsYXNzPVwiY2hlY2tcIiBuYW1lPVwiY2hlY2tcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGNsYXNzPVwidGFzay1uYW1lXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPSdlZGl0LXRpdGxlcyBhY3RpdmUnPjwvcD48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ncmlnaHQnPjxwIGNsYXNzPSdlZGl0LWRhdGVzIGFjdGl2ZSc+Tm8gRGF0ZTwvcD48aW5wdXQgdHlwZT1cImRhdGVcIiBjbGFzcz1cImRhdGVcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInJlbW92ZVwiPjxpIGNsYXNzPVwiZmFzIGZhLXRyYXNoLWFsdFwiPjwvaT48L2J1dHRvbj48L2Rpdj5gXHJcbiAgICAgICAgICAgIHRvZG9baV0uc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrJylcclxuICAgICAgICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodG9kb1tpXSlcclxuICAgICAgICAgICAgLy8gQWRkIGZpZWxkIGVsZW1lbnRzIFxyXG4gICAgICAgICAgICByZW1vdmVCdG5baV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVtb3ZlJylbaV1cclxuICAgICAgICAgICAgZGF0ZXNbaV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZScpW2ldXHJcbiAgICAgICAgICAgIGRhdGVzVGV4dFtpXSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0LWRhdGVzJylbaV1cclxuICAgICAgICAgICAgY2hlY2tib3hbaV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2snKVtpXSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBlZGl0VGl0bGVzW2ldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQtdGl0bGVzJylbaV1cclxuICAgICAgICAgICAgY2hlY2tib3hbaV0uY2hlY2tlZCA9IHR5cGVbaV0uY2hlY2tlZFxyXG4gICAgICAgICAgICBlZGl0VGl0bGVzW2ldLmlubmVyVGV4dCA9IHR5cGVbaV0udGl0bGUgIFxyXG4gICAgICAgICAgICBpZih0eXBlW2ldLmRhdGUgIT09ICcnKXtkYXRlc1RleHRbaV0uaW5uZXJUZXh0ID0gdHlwZVtpXS5kYXRlfSBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhZGRDaGFuZ2VzKHR5cGUpXHJcbn1cclxuLy9BZGQgY2hhbmdlcyB0byBpbnB1dCwgZGF0ZSwgY2hlY2tib3hlc1xyXG5mdW5jdGlvbiBhZGRDaGFuZ2VzKHR5cGUpe1xyXG4gICAgcmVtb3ZlRE9NKHR5cGUpXHJcbiAgICBjaGFuZ2VDaGVjayh0eXBlKVxyXG4gICAgY2hhbmdlRGF0ZSh0eXBlKVxyXG4gICAgZWRpdFRhc2sodHlwZSlcclxufVxyXG4vL0FsbG93cyBjaGFuZ2UgdGhlIHRpdGxlIG9mIHRoZSB0YXNrXHJcbmZ1bmN0aW9uIGVkaXRUYXNrKHR5cGUpe1xyXG4gICAgbGV0IGVkaXRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLW5hbWUnKVxyXG4gICAgZWRpdFRpdGxlcy5mb3JFYWNoKChlVGl0bGVzLGkpPT57XHJcbiAgICAgICAgZVRpdGxlcy5vbm1vdXNldXAgPSAoKT0+e1xyXG4gICAgICAgICAgICBlVGl0bGVzLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgIGVkaXRJbnB1dFtpXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBlZGl0SW5wdXQuZm9yRWFjaCgoaW5wdXQsaSk9PntcclxuICAgICAgICBpbnB1dC52YWx1ZSA9IGVkaXRUaXRsZXNbaV0uaW5uZXJIVE1MXHJcbiAgICAgICAgaW5wdXQub25rZXl1cCA9IGZ1bmN0aW9uIChldmVudCl7XHJcbiAgICAgICAgICAgIGlmKGV2ZW50LmtleSA9PT0gJ0VudGVyJyl7XHJcbiAgICAgICAgICAgICAgICBlZGl0VGl0bGVzW2ldLmlubmVySFRNTCA9IGlucHV0LnZhbHVlXHJcbiAgICAgICAgICAgICAgICB0eXBlW2ldLnRpdGxlID0gaW5wdXQudmFsdWVcclxuICAgICAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICBlZGl0VGl0bGVzW2ldLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG4vL0NoYW5nZSB0aGUgc3RhdHVzIG9mIHRoZSBkYXRlIGlucHV0c1xyXG5mdW5jdGlvbiBjaGFuZ2VEYXRlKHR5cGUpe1xyXG4gICAgZGF0ZXNUZXh0LmZvckVhY2goKHAsaSk9PiB7XHJcbiAgICAgICAgcC5vbm1vdXNldXAgPSAoKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncGFzc2VpIG8gbW9zdWUnKVxyXG4gICAgICAgICAgICBwLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgIGRhdGVzW2ldLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIGRhdGVzLmZvckVhY2goKGlucHV0LCBpKSA9PiB7XHJcbiAgICAgICAgaW5wdXQub25jaGFuZ2UgPSAoKSA9PiB7Y29uc29sZS5sb2coaW5wdXQudmFsdWUpXHJcbiAgICAgICAgICAgIHR5cGVbaV0uZGF0ZSA9IGlucHV0LnZhbHVlXHJcbiAgICAgICAgICAgIGRhdGVzVGV4dFtpXS5pbm5lclRleHQgPSBpbnB1dC52YWx1ZVxyXG4gICAgICAgICAgICBkYXRlc1RleHRbaV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICAgICAgICAgcG9wdWxhdGVTdG9yYWdlKClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG4vL1JlbW92ZXMgYW4gZWxlbWVudCBmcm9tIHRoZSB0YXNrIGFycmF5IGFuZCBET01cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZURPTSh0eXBlKXsgIFxyXG4gICAgcmVtb3ZlQnRuLmZvckVhY2goKGJ0biwgaSkgPT4ge1xyXG4gICAgICAgIGJ0bi5vbm1vdXNldXAgPSAoKT0+e1xyXG4gICAgICAgICAgICBidG4ucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZSgpXHJcbiAgICAgICAgICAgIHJlbW92ZVRvZG8oaSwgdHlwZSkgXHJcbiAgICAgICAgICAgIHRvZG8uc3BsaWNlKGksMSlcclxuICAgICAgICAgICAgcmVtb3ZlQnRuLnNwbGljZShpLDEpXHJcbiAgICAgICAgICAgIHBvcHVsYXRlU3RvcmFnZSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuICAgIH0pO1xyXG59XHJcbi8vQ2hhbmdlcyB0aGUgc3RhdHVzIG9mIHRoZSBjaGVja2JveGVzXHJcbmZ1bmN0aW9uIGNoYW5nZUNoZWNrKHR5cGUpe1xyXG4gICAgY2hlY2tib3guZm9yRWFjaCgoY2hlY2ssaSk9PiB7XHJcbiAgICAgICAgY2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT57XHJcbiAgICAgICAgICAgIHR5cGVbaV0uY2hlY2tlZCA9IGNoZWNrLmNoZWNrZWRcclxuICAgICAgICAgICAgcG9wdWxhdGVTdG9yYWdlKClcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgYnRuT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcGVuLW1lbnUnKVxyXG5idG5PcGVuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKT0+IHtcclxuICAgIGNvbnN0IHRhc2tGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWZpZWxkJylcclxuICAgIHRhc2tGaWVsZC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgY29uc3QgYnRuQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UtYnRuJylcclxuICAgIGJ0bkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKT0+e1xyXG4gICAgICAgIHRhc2tGaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKHRvZG9TZWxlY3RvcilcclxuICAgIGlmKHRvZG9TZWxlY3RvciA9PT0gMCl7XHJcbiAgICAgICAgYWRkTGlzdGVuZXJzKGhvbWUpXHJcbiAgICB9ZWxzZSBpZih0b2RvU2VsZWN0b3IgPT09IDEpe1xyXG4gICAgICAgIGFkZExpc3RlbmVycyhwcm9qZWN0W2N1cnJlbnRJbmRleF0udG9kb3MpXHJcbiAgICB9XHJcbn0pXHJcbi8vQWRkIGxpc3RlbmVyIGZvciBvcGVuIGFuZCBjbG9zZSB0aGUgdGl0bGUgbWVudVxyXG5leHBvcnQgZnVuY3Rpb24gYWRkTGlzdGVuZXJzKHNlbGVjdG9yKXtjb25zb2xlLmxvZyhzZWxlY3RvcilcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stdGl0bGUnKS52YWx1ZSBcclxuICAgIGNvbnN0IHRhc2tGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWZpZWxkJylcclxuICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2snKVxyXG4gICAgYWRkVGFzay5vbm1vdXNldXAgPSAoKT0+e1xyXG4gICAgICAgIGlmKHBhdHRlcm5zLnRpdGxlLnRlc3QodGl0bGUudmFsdWUpPT09IHRydWUpe2NvbnNvbGUubG9nKCd0b2RvIGFkZGVkJylcclxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay10aXRsZScpLnZhbHVlXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBhZGRUb2RvKHNlbGVjdG9yICwgdGl0bGUsICcnLCBmYWxzZSwgY3VycmVudFByb2plY3QpXHJcbiAgICAgICAgICAgIHRhc2tET00oc2VsZWN0b3IpXHJcbiAgICAgICAgICAgIHRhc2tGaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJUYXNrcygpe1xyXG4gICAgdG9kbyA9IFtdXHJcbiAgICByZW1vdmVCdG4gPSBbXVxyXG4gICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1saXN0JylcclxuICAgIHdoaWxlICh0YXNrTGlzdC5jaGlsZEVsZW1lbnRDb3VudD4wKXtcclxuICAgICAgICB0YXNrTGlzdC5maXJzdENoaWxkLnJlbW92ZSgpXHJcbiAgICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHByb2plY3QgfSBmcm9tIFwiLi9tb2R1bGVzL1Rhc2tcIjtcclxuaW1wb3J0IHsgcG9wdWxhdGVTdG9yYWdlIH0gZnJvbSBcIi4vbW9kdWxlcy9UYXNrXCI7XHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXHJcbi8vIC8vIFxyXG4vLyAvL1xyXG4vLyAvLyBUYXNrc1xyXG4vLyBmdW5jdGlvbiBjcmVhdGVUYXNrKHRpdGxlLCBkYXRlLCBjaGVja2VkLCBwcm9qZWN0KXtcclxuLy8gICAgIHJldHVybnt0aXRsZSwgZGF0ZSwgY2hlY2tlZCwgcHJvamVjdH1cclxuLy8gfSBcclxuLy8gbGV0IHByb2plY3QgPSBbXSBcclxuLy8gbGV0IGhvbWUgPSBbXSBcclxuLy8gbGV0IHRvZGF5ID0gW10gXHJcbi8vIGxldCB0aGlzV2VlayA9IFtdXHJcbiBcclxuLy8gZnVuY3Rpb24gYWRkVG9kbyggdHlwZSx0aXRsZSxkYXRlLGNoZWNrLCBwcm9qKXtcclxuLy8gICAgIHR5cGUucHVzaChjcmVhdGVUYXNrKHRpdGxlLCBkYXRlLCBjaGVjaywgcHJvaikpXHJcbi8vICAgICBwb3B1bGF0ZVN0b3JhZ2UoKVxyXG4vLyB9XHJcbiBcclxuLy8gZnVuY3Rpb24gcmVtb3ZlVG9kbyhpLCB0eXBlKXtcclxuLy8gICAgIHR5cGUuc3BsaWNlKGksMSlcclxuLy8gICAgIHBvcHVsYXRlU3RvcmFnZSgpXHJcbi8vIH1cclxuLy8gZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSwgdG9kb3Mpe1xyXG4vLyAgICAgcmV0dXJuIHt0aXRsZSwgdG9kb3N9XHJcbi8vIH0gXHJcbi8vIGZ1bmN0aW9uIGFkZFByb2plY3QodGl0bGUsIHRvZG9zKXtcclxuLy8gICAgIHByb2plY3QucHVzaChjcmVhdGVQcm9qZWN0KHRpdGxlLCB0b2RvcykpXHJcbi8vICAgICBwb3B1bGF0ZVN0b3JhZ2UoKVxyXG5cclxuLy8gfSBcclxuLy8gZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChpKXtcclxuLy8gICAgIHByb2plY3Quc3BsaWNlKGksMSlcclxuLy8gICAgIHBvcHVsYXRlU3RvcmFnZSgpXHJcbi8vIH1cclxuLy8gLy9cclxuLy8gLy9cclxuLy8gLy9BZGQgcHJvamVjdCBsaXN0c1xyXG4vLyBjb25zdCBjdXJyZW50UHJvamVjdEgxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtcHJvamVjdCcpXHJcbi8vIGxldCBjdXJyZW50UHJvamVjdCA9ICcnXHJcbi8vIGxldCBjdXJyZW50SW5kZXggPSAwXHJcbi8vIGNvbnN0IHJlbVByb2plY3QgPSBbXSBcclxuLy8gbGV0IHByb2plY3RzID0gW11cclxuLy8gbGV0IHBhdHRlcm5zID0ge1xyXG4vLyAgICAgdGl0bGU6IC9eLnsxLDIwfSQvLFxyXG4vLyB9XHJcblxyXG4vLyBsZXQgdG9kb1NlbGVjdG9yID0gaG9tZVxyXG4vLyBmdW5jdGlvbiBwcm9qZWN0RE9NKCl7Y29uc29sZS5sb2coJ3Byb2plY3RET00nKVxyXG4vLyAgICAgaWYocHJvamVjdC5sZW5ndGg+MCl7XHJcbi8vICAgICBjb25zdCBjdXJyZW50UHJvamVjdEgxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtcHJvamVjdCcpXHJcbi8vICAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzJylcclxuLy8gICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1kaXYnKVxyXG4vLyAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC10aXRsZScpXHJcbi8vICAgICBjdXJyZW50UHJvamVjdEgxLmlubmVyVGV4dCA9IGN1cnJlbnRQcm9qZWN0XHJcbi8vICAgICB0b2RvU2VsZWN0b3IgPSBwcm9qZWN0W2N1cnJlbnRJbmRleF0udG9kb3NcclxuLy8gICAgIHNob3dUYXNrcygpXHJcbi8vICAgICBmb3IobGV0IGk9MDsgaTxwcm9qZWN0Lmxlbmd0aDsgaSsrKXtcclxuLy8gICAgICAgICBpZighcHJvamVjdHNbaV0pe1xyXG4vLyAgICAgICAgIC8vdXBkYXRlIGN1cnJlbnQgcHJvamVjdFxyXG4vLyAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdFtpXS50aXRsZVxyXG4vLyAgICAgICAgIGN1cnJlbnRJbmRleCA9IGlcclxuLy8gICAgICAgICBjdXJyZW50UHJvamVjdEgxLmlubmVySFRNTCA9IGN1cnJlbnRQcm9qZWN0XHJcbi8vICAgICAgICAgY2xlYXJUYXNrcygpXHJcbi8vICAgICAgICAgdGFza0RPTShwcm9qZWN0W2N1cnJlbnRJbmRleF0udG9kb3MpXHJcbi8vICAgICAgICAgLy9jcmVhdGUgZWxlbWVudHNcclxuLy8gICAgICAgICBwcm9qZWN0c1tpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbi8vICAgICAgICAgcHJvamVjdHNbaV0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0cycpXHJcbi8vICAgICAgICAgcHJvamVjdHNbaV0uaW5uZXJIVE1MID0gYDxidXR0b24gY2xhc3M9XCJidG4tcHJvamVjdFwiPiR7dGl0bGUudmFsdWV9PC9idXR0b24+PGJ1dHRvbiBjbGFzcz1cInJlbW92ZS1wcm9qZWN0XCI+PGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+PC9idXR0b24+YFxyXG4vLyAgICAgICAgIHByb2plY3RDb250YWluZXIuaW5zZXJ0QmVmb3JlKHByb2plY3RzW2ldLCBwcm9qZWN0RGl2KVxyXG4vLyAgICAgICAgIHJlbVByb2plY3RbaV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVtb3ZlLXByb2plY3QnKVtpXVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICAgIGRlbGV0ZVByb2plY3QoKVxyXG4vLyAgICAgc2VsZWN0UHJvamVjdCgpXHJcbi8vICAgICBjb25zb2xlLmxvZyhwcm9qZWN0KX1cclxuLy8gfVxyXG4vLyAvL1xyXG5cclxuXHJcbi8vIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZS1idG4nKVxyXG4vLyBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKT0+IHtcclxuLy8gICAgIHRvZG9TZWxlY3RvciA9IGhvbWVcclxuLy8gICAgIGN1cnJlbnRQcm9qZWN0ID0gJ0hvbWUnXHJcbi8vICAgICBjdXJyZW50UHJvamVjdEgxLmlubmVyVGV4dCA9IGN1cnJlbnRQcm9qZWN0XHJcbi8vICAgICBhZGRMaXN0ZW5lcnModG9kb1NlbGVjdG9yKVxyXG4vLyAgICAgY2xlYXJUYXNrcygpXHJcbi8vICAgICB0YXNrRE9NKHRvZG9TZWxlY3RvcilcclxuLy8gICAgIHNob3dUYXNrcygpXHJcbi8vIH0pXHJcbi8vIC8vU2hvdyB0YXNrIG1lbnVcclxuLy8gZnVuY3Rpb24gc2hvd1Rhc2tzKCl7XHJcbi8vICAgICBjb25zdCB0YXNrRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1maWVsZCcpXHJcbi8vICAgICBpZihwcm9qZWN0Lmxlbmd0aCA+IDAgfHwgdG9kb1NlbGVjdG9yID09IGhvbWUpe1xyXG4vLyAgICAgICAgIHRhc2tGaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKVxyXG4vLyAgICAgfWVsc2Uge1xyXG4vLyAgICAgICAgIHRhc2tGaWVsZC5jbGFzc0xpc3QuYWRkKCdpbnZpc2libGUnKVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoKXtcclxuLy8gICAgIHJlbVByb2plY3QuZm9yRWFjaCgoYnRuLGkpPT57XHJcbi8vICAgICAgICAgYnRuLm9ubW91c2V1cCA9ICgpPT4ge1xyXG4vLyAgICAgICAgICAgICBidG4ucGFyZW50Tm9kZS5yZW1vdmUoKVxyXG4vLyAgICAgICAgICAgICByZW1Qcm9qZWN0LnNwbGljZShpLDEpXHJcbi8vICAgICAgICAgICAgIHJlbW92ZVByb2plY3QoaSwgdG9kb1NlbGVjdG9yKVxyXG4vLyAgICAgICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaSwxKVxyXG4vLyAgICAgICAgICAgICBzaG93VGFza3MoKVxyXG4vLyAgICAgICAgICAgICBpZihpICE9PSAwICl7XHJcbi8vICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdFtpIC0gMV0udGl0bGVcclxuLy8gICAgICAgICAgICAgY3VycmVudEluZGV4ID0gaSAtIDEgXHJcbi8vICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0SDEuaW5uZXJIVE1MID0gY3VycmVudFByb2plY3RcclxuLy8gICAgICAgICAgICAgfWVsc2V7XHJcbi8vICAgICAgICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9ICcnXHJcbi8vICAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXggPSBpXHJcbi8vICAgICAgICAgICAgICAgICBjdXJyZW50UHJvamVjdEgxLmlubmVySFRNTCA9IGN1cnJlbnRQcm9qZWN0XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgdG9kb1NlbGVjdG9yID0gcHJvamVjdFtjdXJyZW50SW5kZXhdLnRvZG9zXHJcbi8vICAgICAgICAgICAgIC8vcG9wdWxhdGVTdG9yYWdlKClcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9KVxyXG4vLyB9XHJcbi8vIC8vXHJcblxyXG4vLyBmdW5jdGlvbiBzZWxlY3RQcm9qZWN0KCl7XHJcbi8vICAgICBjb25zdCBwcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1wcm9qZWN0JylcclxuLy8gICAgIHByb2plY3RCdG4uZm9yRWFjaCgocCxpKT0+e1xyXG4vLyAgICAgICAgIHAub25tb3VzZXVwID0gKCkgPT4ge1xyXG4vLyAgICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RbaV0udGl0bGVcclxuLy8gICAgICAgICAgICAgY3VycmVudEluZGV4ID0gaVxyXG4vLyAgICAgICAgICAgICBjdXJyZW50UHJvamVjdEgxLmlubmVySFRNTCA9IGN1cnJlbnRQcm9qZWN0XHJcbi8vICAgICAgICAgICAgIHRvZG9TZWxlY3RvciA9IHByb2plY3RbY3VycmVudEluZGV4XS50b2Rvc1xyXG4vLyAgICAgICAgICAgICBjbGVhclRhc2tzKClcclxuLy8gICAgICAgICAgICAgdGFza0RPTSh0b2RvU2VsZWN0b3IpXHJcbi8vICAgICAgICAgICAgIGFkZExpc3RlbmVycyh0b2RvU2VsZWN0b3IpXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfSlcclxuLy8gfVxyXG4vLyAvL0xpc3RlbmVycyB0byBvcGVuIHRoZSBwcm9qZWN0IG1lbnUgYW5kIGFkZCBwcm9qZWN0c1xyXG4vLyBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXRpdGxlJylcclxuLy8gY29uc3Qgb3BlblByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3Blbi1wcm9qZWN0JylcclxuXHJcbi8vIG9wZW5Qcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBwcm9qZWN0TGlzdGVuZXIpXHJcbi8vIGZ1bmN0aW9uIHByb2plY3RMaXN0ZW5lcigpe2NvbnNvbGUubG9nKCdwYXRvcyBmdW5jaW9uYW5kbycpXHJcbi8vICAgICBjb25zdCBwcm9qZWN0SW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWluZm8nKVxyXG4vLyAgICAgY29uc3QgY2xvc2VQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLXByb2plY3QnKVxyXG4gICAgXHJcbi8vICAgICBjb25zdCBlZGl0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXByb2plY3QnKVxyXG4vLyAgICAgZWRpdFByb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuLy8gICAgIG9wZW5Qcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbi8vICAgICBwcm9qZWN0SW5mby5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4vLyAgICAgY2xvc2VQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKT0+IHtcclxuLy8gICAgICAgICBwcm9qZWN0SW5mby5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4vLyAgICAgICAgIG9wZW5Qcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbi8vICAgICB9KVxyXG4vLyAgICAgY29uc3QgYWRkX3Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QnKVxyXG4vLyAgICAgYWRkX3Byb2plY3Qub25tb3VzZXVwID0gKCk9PntcclxuLy8gICAgICAgICBpZihwYXR0ZXJucy50aXRsZS50ZXN0KHRpdGxlLnZhbHVlKSA9PT0gdHJ1ZSl7XHJcbi8vICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gdGl0bGUudmFsdWVcclxuLy8gICAgICAgICAgICAgY3VycmVudFByb2plY3RIMS5pbm5lckhUTUwgPSBjdXJyZW50UHJvamVjdFxyXG4vLyAgICAgICAgICAgICBlZGl0UHJvamVjdC52YWx1ZSA9IGN1cnJlbnRQcm9qZWN0XHJcbi8vICAgICAgICAgICAgIGVkaXRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbi8vICAgICAgICAgICAgIHByb2plY3RJbmZvLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbi8vICAgICAgICAgICAgIG9wZW5Qcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbi8vICAgICAgICAgICAgIGFkZFByb2plY3QoY3VycmVudFByb2plY3QsIFtdKVxyXG4vLyAgICAgICAgICAgICBjbGVhclRhc2tzKClcclxuLy8gICAgICAgICAgICAgdGFza0RPTSh0b2RvU2VsZWN0b3IpXHJcbi8vICAgICAgICAgICAgIGFkZExpc3RlbmVycyh0b2RvU2VsZWN0b3IpXHJcbi8vICAgICAgICAgICAgIHByb2plY3RET00oKVxyXG4vLyAgICAgICAgIH0gICAgXHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcblxyXG4vLyAvL1xyXG4vLyAvL1xyXG4vLyAvLyBUb2Rvc1xyXG4vLyBsZXQgdG9kbyA9IFtdXHJcbi8vIGxldCByZW1vdmVCdG4gPSBbXVxyXG4vLyBsZXQgZGF0ZXMgPSBbXVxyXG4vLyBsZXQgZGF0ZXNUZXh0ID0gW11cclxuLy8gbGV0IGNoZWNrYm94ID0gW11cclxuLy8gbGV0IGVkaXRUaXRsZXMgPSBbXVxyXG5cclxuLy8gLy9EaXNwbGF5IHRvZG9zIG9uIHNjcmVlbiBcclxuLy8gZnVuY3Rpb24gdGFza0RPTSh0eXBlKXtcclxuLy8gICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbGlzdCcpXHJcbi8vICAgICBmb3IobGV0IGk9MDsgaTx0eXBlLmxlbmd0aDsgaSsrKSB7ICBcclxuLy8gICAgICAgICBpZighdG9kb1tpXSl7ICAgICBcclxuLy8gICAgICAgICAgICAgLy8gQ3JlYXRlIHRhc2sgZmllbGQgICAgXHJcbi8vICAgICAgICAgICAgIHRvZG9baV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4vLyAgICAgICAgICAgICB0b2RvW2ldLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPSdsZWZ0Jz5cclxuLy8gICAgICAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyBjbGFzcz1cImNoZWNrXCIgbmFtZT1cImNoZWNrXCI+XHJcbi8vICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzcz1cInRhc2stbmFtZVwiPlxyXG4vLyAgICAgICAgICAgICA8cCBjbGFzcz0nZWRpdC10aXRsZXMgYWN0aXZlJz48L3A+PC9kaXY+XHJcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3JpZ2h0Jz48cCBjbGFzcz0nZWRpdC1kYXRlcyBhY3RpdmUnPk5vIERhdGU8L3A+PGlucHV0IHR5cGU9XCJkYXRlXCIgY2xhc3M9XCJkYXRlXCI+XHJcbi8vICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJyZW1vdmVcIj48aSBjbGFzcz1cImZhcyBmYS10cmFzaC1hbHRcIj48L2k+PC9idXR0b24+PC9kaXY+YFxyXG4vLyAgICAgICAgICAgICB0b2RvW2ldLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzaycpXHJcbi8vICAgICAgICAgICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRvZG9baV0pXHJcbi8vICAgICAgICAgICAgIC8vIEFkZCBmaWVsZCBlbGVtZW50cyBcclxuLy8gICAgICAgICAgICAgcmVtb3ZlQnRuW2ldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlbW92ZScpW2ldXHJcbi8vICAgICAgICAgICAgIGRhdGVzW2ldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhdGUnKVtpXVxyXG4vLyAgICAgICAgICAgICBkYXRlc1RleHRbaV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdC1kYXRlcycpW2ldXHJcbi8vICAgICAgICAgICAgIGNoZWNrYm94W2ldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrJylbaV0gICAgICAgICAgICBcclxuLy8gICAgICAgICAgICAgZWRpdFRpdGxlc1tpXSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0LXRpdGxlcycpW2ldXHJcbi8vICAgICAgICAgICAgIGNoZWNrYm94W2ldLmNoZWNrZWQgPSB0eXBlW2ldLmNoZWNrZWRcclxuLy8gICAgICAgICAgICAgZWRpdFRpdGxlc1tpXS5pbm5lclRleHQgPSB0eXBlW2ldLnRpdGxlICBcclxuLy8gICAgICAgICAgICAgaWYodHlwZVtpXS5kYXRlICE9PSAnJyl7ZGF0ZXNUZXh0W2ldLmlubmVyVGV4dCA9IHR5cGVbaV0uZGF0ZX0gXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgYWRkQ2hhbmdlcyh0eXBlKVxyXG5cclxuLy8gfVxyXG4vLyAvL0FkZCBjaGFuZ2VzIHRvIGlucHV0LCBkYXRlLCBjaGVja2JveGVzXHJcbi8vIGZ1bmN0aW9uIGFkZENoYW5nZXModHlwZSl7XHJcbi8vICAgICByZW1vdmVET00odHlwZSlcclxuLy8gICAgIGNoYW5nZUNoZWNrKHR5cGUpXHJcbi8vICAgICBjaGFuZ2VEYXRlKHR5cGUpXHJcbi8vICAgICBlZGl0VGFzayh0eXBlKVxyXG4vLyB9XHJcbi8vIC8vQWxsb3dzIGNoYW5nZSB0aGUgdGl0bGUgb2YgdGhlIHRhc2tcclxuLy8gZnVuY3Rpb24gZWRpdFRhc2sodHlwZSl7XHJcbi8vICAgICBsZXQgZWRpdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stbmFtZScpXHJcbi8vICAgICBlZGl0VGl0bGVzLmZvckVhY2goKGVUaXRsZXMsaSk9PntcclxuLy8gICAgICAgICBlVGl0bGVzLm9ubW91c2V1cCA9ICgpPT57XHJcbi8vICAgICAgICAgICAgIGVUaXRsZXMuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuLy8gICAgICAgICAgICAgZWRpdElucHV0W2ldLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbi8vICAgICAgICAgICAgIHBvcHVsYXRlU3RvcmFnZSgpXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfSlcclxuLy8gICAgIGVkaXRJbnB1dC5mb3JFYWNoKChpbnB1dCxpKT0+e1xyXG4vLyAgICAgICAgIGlucHV0LnZhbHVlID0gZWRpdFRpdGxlc1tpXS5pbm5lckhUTUxcclxuLy8gICAgICAgICBpbnB1dC5vbmtleXVwID0gZnVuY3Rpb24gKGV2ZW50KXtcclxuLy8gICAgICAgICAgICAgaWYoZXZlbnQua2V5ID09PSAnRW50ZXInKXtcclxuLy8gICAgICAgICAgICAgICAgIGVkaXRUaXRsZXNbaV0uaW5uZXJIVE1MID0gaW5wdXQudmFsdWVcclxuLy8gICAgICAgICAgICAgICAgIHR5cGVbaV0udGl0bGUgPSBpbnB1dC52YWx1ZVxyXG4vLyAgICAgICAgICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuLy8gICAgICAgICAgICAgICAgIGVkaXRUaXRsZXNbaV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuLy8gICAgICAgICAgICAgICAgIHBvcHVsYXRlU3RvcmFnZSgpXHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9KVxyXG4vLyB9XHJcbi8vIC8vQ2hhbmdlIHRoZSBzdGF0dXMgb2YgdGhlIGRhdGUgaW5wdXRzXHJcbi8vIGZ1bmN0aW9uIGNoYW5nZURhdGUodHlwZSl7XHJcbi8vICAgICBkYXRlc1RleHQuZm9yRWFjaCgocCxpKT0+IHtcclxuLy8gICAgICAgICBwLm9ubW91c2V1cCA9ICgpPT57XHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwYXNzZWkgbyBtb3N1ZScpXHJcbi8vICAgICAgICAgICAgIHAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuLy8gICAgICAgICAgICAgZGF0ZXNbaV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9KVxyXG4vLyAgICAgZGF0ZXMuZm9yRWFjaCgoaW5wdXQsIGkpID0+IHtcclxuLy8gICAgICAgICBpbnB1dC5vbmNoYW5nZSA9ICgpID0+IHtjb25zb2xlLmxvZyhpbnB1dC52YWx1ZSlcclxuLy8gICAgICAgICAgICAgdHlwZVtpXS5kYXRlID0gaW5wdXQudmFsdWVcclxuLy8gICAgICAgICAgICAgZGF0ZXNUZXh0W2ldLmlubmVyVGV4dCA9IGlucHV0LnZhbHVlXHJcbi8vICAgICAgICAgICAgIGRhdGVzVGV4dFtpXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4vLyAgICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4vLyAgICAgICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoKVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH0pXHJcbi8vIH1cclxuXHJcbi8vIC8vUmVtb3ZlcyBhbiBlbGVtZW50IGZyb20gdGhlIHRhc2sgYXJyYXkgYW5kIERPTSBcclxuLy8gZnVuY3Rpb24gcmVtb3ZlRE9NKHR5cGUpeyAgXHJcbi8vICAgICByZW1vdmVCdG4uZm9yRWFjaCgoYnRuLCBpKSA9PiB7XHJcbi8vICAgICAgICAgYnRuLm9ubW91c2V1cCA9ICgpPT57XHJcbi8vICAgICAgICAgICAgIGJ0bi5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlKClcclxuLy8gICAgICAgICAgICAgcmVtb3ZlVG9kbyhpLCB0eXBlKSBcclxuLy8gICAgICAgICAgICAgdG9kby5zcGxpY2UoaSwxKVxyXG4vLyAgICAgICAgICAgICByZW1vdmVCdG4uc3BsaWNlKGksMSlcclxuLy8gICAgICAgICAgICAgcG9wdWxhdGVTdG9yYWdlKClcclxuLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4vLyAgICAgfSk7XHJcbi8vIH1cclxuLy8gLy9DaGFuZ2VzIHRoZSBzdGF0dXMgb2YgdGhlIGNoZWNrYm94ZXNcclxuLy8gZnVuY3Rpb24gY2hhbmdlQ2hlY2sodHlwZSl7XHJcbi8vICAgICBjaGVja2JveC5mb3JFYWNoKChjaGVjayxpKT0+IHtcclxuLy8gICAgICAgICBjaGVjay5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PntcclxuLy8gICAgICAgICAgICAgdHlwZVtpXS5jaGVja2VkID0gY2hlY2suY2hlY2tlZFxyXG4vLyAgICAgICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoKVxyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICB9KVxyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBidG5PcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wZW4tbWVudScpXHJcbi8vIGJ0bk9wZW4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpPT4ge1xyXG4vLyAgICAgY29uc3QgdGFza0ZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZmllbGQnKVxyXG4vLyAgICAgdGFza0ZpZWxkLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbi8vICAgICBjb25zdCBidG5DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1idG4nKVxyXG4vLyAgICAgYnRuQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpPT57XHJcbi8vICAgICAgICAgdGFza0ZpZWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbi8vICAgICB9KVxyXG4vLyAgICAgY29uc29sZS5sb2codG9kb1NlbGVjdG9yKVxyXG4vLyAgICAgYWRkTGlzdGVuZXJzKHRvZG9TZWxlY3RvcilcclxuLy8gfSlcclxuLy8gLy9BZGQgbGlzdGVuZXIgZm9yIG9wZW4gYW5kIGNsb3NlIHRoZSB0aXRsZSBtZW51IFxyXG4vLyBmdW5jdGlvbiBhZGRMaXN0ZW5lcnMoc2VsZWN0b3Ipe1xyXG4vLyAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay10aXRsZScpLnZhbHVlIFxyXG4vLyAgICAgY29uc3QgdGFza0ZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZmllbGQnKVxyXG4vLyAgICAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzaycpXHJcbiAgICAgIFxyXG4vLyAgICAgYWRkVGFzay5vbm1vdXNldXAgPSAoKT0+e1xyXG4vLyAgICAgICAgIGlmKHBhdHRlcm5zLnRpdGxlLnRlc3QodGl0bGUudmFsdWUpPT09IHRydWUpe2NvbnNvbGUubG9nKCd0b2RvIGFkZGVkJylcclxuLy8gICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay10aXRsZScpLnZhbHVlXHJcbi8vICAgICAgICAgICAgIGFkZFRvZG8oc2VsZWN0b3IgLCB0aXRsZSwgJycsIGZhbHNlLCBjdXJyZW50UHJvamVjdClcclxuLy8gICAgICAgICAgICAgdGFza0RPTShzZWxlY3RvcilcclxuLy8gICAgICAgICAgICAgdGFza0ZpZWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9IFxyXG4vLyBmdW5jdGlvbiBjbGVhclRhc2tzKCl7XHJcbi8vICAgICB0b2RvID0gW11cclxuLy8gICAgIHJlbW92ZUJ0biA9IFtdXHJcbi8vICAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWxpc3QnKVxyXG4vLyAgICAgd2hpbGUgKHRhc2tMaXN0LmNoaWxkRWxlbWVudENvdW50PjApe1xyXG4vLyAgICAgICAgIHRhc2tMaXN0LmZpcnN0Q2hpbGQucmVtb3ZlKClcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gLy9cclxuLy8gLy9cclxuLy8gLy8gTG9jYWwgU3RvcmFnZVxyXG4vLyBTdG9yYWdlLnByb3RvdHlwZS5zZXRPYmogPSBmdW5jdGlvbihrZXksIG9iail7XHJcbi8vICAgICByZXR1cm4gdGhpcy5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkob2JqKSlcclxuLy8gfVxyXG4vLyBTdG9yYWdlLnByb3RvdHlwZS5nZXRPYmogPSBmdW5jdGlvbihrZXkpe1xyXG4vLyAgICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy5nZXRJdGVtKGtleSkpXHJcbi8vIH1cclxuLy8gLy9Mb2NhbCBzdG9yYWdlIHZlcmlmeVxyXG4vLyAgZnVuY3Rpb24gcG9wdWxhdGVTdG9yYWdlKCkge2NvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSlcclxuLy8gICAgIGlmKCFsb2NhbFN0b3JhZ2UuZ2V0T2JqKCdwcm9qZWN0JykgJiYgIWxvY2FsU3RvcmFnZS5nZXRPYmooJ2hvbWUnKSl7XHJcbi8vICAgICAgICAgbG9jYWxTdG9yYWdlLnNldE9iaignaG9tZScsIGhvbWUpO1xyXG4vLyAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRPYmooJ3Byb2plY3QnLCBwcm9qZWN0KTtcclxuLy8gICAgICAgICB2YXIgY3VycmVudEhvbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0T2JqKCdob21lJyk7XHJcbi8vICAgICAgICAgdmFyIGN1cnJlbnRQcm9qZWN0T2JqID0gbG9jYWxTdG9yYWdlLmdldE9iaigncHJvamVjdCcpO1xyXG4vLyAgICAgICAgIHByb2plY3QgPSBjdXJyZW50UHJvamVjdE9iajtcclxuLy8gICAgICAgICBob21lID0gY3VycmVudEhvbWVcclxuLy8gICAgIH1lbHNlIHtcclxuLy8gICAgICAgICB2YXIgY3VycmVudEhvbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0T2JqKCdob21lJyk7XHJcbi8vICAgICAgICAgdmFyIGN1cnJlbnRQcm9qZWN0T2JqID0gbG9jYWxTdG9yYWdlLmdldE9iaigncHJvamVjdCcpO1xyXG4vLyAgICAgICAgIHByb2plY3QgPSBjdXJyZW50UHJvamVjdE9iajtcclxuLy8gICAgICAgICBob21lID0gY3VycmVudEhvbWVcclxuLy8gICAgICAgICBpZihwcm9qZWN0Lmxlbmd0aD4wKXtcclxuLy8gICAgICAgICAgICAgcHJvamVjdERPTSgpXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGlmKGhvbWUubGVuZ3RoPjApe1xyXG4vLyAgICAgICAgICAgICB0YXNrRE9NKGhvbWUpXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vIHBvcHVsYXRlU3RvcmFnZSgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9