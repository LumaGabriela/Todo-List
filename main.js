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
let currentProject = 'Home'
let currentIndex = 0
const remProject = [] 
let projects = []
let patterns = {
    title: /^.{1,20}$/,
}
function projectDOM(){
    const currentProjectH1 = document.querySelector('#current-project')
    const projectContainer = document.querySelector('#projects')
    const projectDiv = document.querySelector('#project-div')
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
        projects[i].innerHTML = `<button class="btn-project"></button><button class="remove-project"><i class="fas fa-times"></i></button>`
        projectContainer.insertBefore(projects[i], projectDiv)
        const projectName = document.querySelectorAll('.btn-project')
        projectName[i].innerText = currentProject
        remProject[i] = document.querySelectorAll('.remove-project')[i]
        }
    }
    deleteProject()
    selectProject()
}
// Select home tab
let todoSelector = 0
const homeBtn = document.querySelector('#home-btn')
homeBtn.addEventListener('mouseup', ()=> {
    todoSelector = 0
    currentProject = 'Home'
    currentProjectH1.innerText = currentProject
    ;(0,_Todos__WEBPACK_IMPORTED_MODULE_0__.addListeners)(_Task__WEBPACK_IMPORTED_MODULE_1__.home)
    ;(0,_Todos__WEBPACK_IMPORTED_MODULE_0__.clearTasks)()
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
// Select which project to add notes
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
            projectDOM()
            ;(0,_Todos__WEBPACK_IMPORTED_MODULE_0__.addListeners)(_Task__WEBPACK_IMPORTED_MODULE_1__.project[currentIndex].todos)
        }
    })
}
//Listeners to open the project menu and add projects
const title = document.querySelector('#project-title')
const openProject = document.querySelector('#open-project')

openProject.addEventListener('mouseup', projectListener)
function projectListener(){
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
// var currentHome = localStorage.getObj('currentHome') || [];  
// var currentProjectObj = localStorage.getObj('currentProjectObj') || [];

function populateStorage(){
    localStorage.setObj('currentHome', home);
    localStorage.setObj('currentProjectObj', project);   
    setStorageValues()
}

function setStorageValues() {
    var currentHome = localStorage.getObj('currentHome');  
    var currentProjectObj = localStorage.getObj('currentProjectObj');
    home = currentHome;
    project = currentProjectObj;
    (0,_Todos__WEBPACK_IMPORTED_MODULE_1__.clearTasks)()
    if(_Projects__WEBPACK_IMPORTED_MODULE_0__.todoSelector === 0){
        (0,_Todos__WEBPACK_IMPORTED_MODULE_1__.taskDOM)(home)
    }else if(_Projects__WEBPACK_IMPORTED_MODULE_0__.todoSelector === 1){
        (0,_Todos__WEBPACK_IMPORTED_MODULE_1__.taskDOM)(project[_Projects__WEBPACK_IMPORTED_MODULE_0__.currentIndex].todos)
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
        (0,_Projects__WEBPACK_IMPORTED_MODULE_0__.projectDOM)();
    }
    (0,_Todos__WEBPACK_IMPORTED_MODULE_1__.clearTasks)() 
    ;(0,_Todos__WEBPACK_IMPORTED_MODULE_1__.addListeners)(home)
    ;(0,_Todos__WEBPACK_IMPORTED_MODULE_1__.taskDOM)(home);
  }



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
            todo[i].innerHTML = `<div class='left'><label class="check-label">
            <input type='checkbox' class="check" name="check"><span class="span-check"></span></label>
            <input type='text' class="task-name">
            <p class='edit-titles active'></p></div>
            <div class='right'><p class='edit-dates active'>No Date</p><input type="date" class="date">
            <button class="remove"><i class="fas fa-times"></i></button></div>`
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
        }
    })
    editInput.forEach((input,i)=>{
        input.value = editTitles[i].innerHTML
        input.onkeyup = function (event){
            if(event.key === 'Enter'){
                editTitles[i].innerHTML = input.value
                type[i].title = input.value
                ;(0,_Task__WEBPACK_IMPORTED_MODULE_0__.populateStorage)()
                input.classList.remove('active')
                editTitles[i].classList.add('active')
                
            }
        }
    })
}
//Change the status of the date inputs
function changeDate(type){
    datesText.forEach((p,i)=> {
        p.onmouseup = ()=>{
            p.classList.remove('active')
            dates[i].classList.add('active')
        }
    })
    dates.forEach((input, i) => {
        input.onchange = () => {
            type[i].date = input.value
            datesText[i].innerText = input.value
            ;(0,_Task__WEBPACK_IMPORTED_MODULE_0__.populateStorage)()
            datesText[i].classList.add('active')
            input.classList.remove('active')
            
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
    if(_Projects__WEBPACK_IMPORTED_MODULE_1__.todoSelector === 0){
        addListeners(_Task__WEBPACK_IMPORTED_MODULE_0__.home)
    }else if(_Projects__WEBPACK_IMPORTED_MODULE_1__.todoSelector === 1){
        addListeners(_Task__WEBPACK_IMPORTED_MODULE_0__.project[_Projects__WEBPACK_IMPORTED_MODULE_1__.currentIndex].todos)
    }
})
//Add listener for open and close the title menu
function addListeners(selector){
    const title = document.querySelector('#task-title').value 
    const taskField = document.querySelector('#task-field')
    const addTask = document.querySelector('#add-task')
    addTask.onmouseup = ()=>{
        if(_Projects__WEBPACK_IMPORTED_MODULE_1__.patterns.title.test(title.value)=== true){
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
    dates = []
    datesText = []
    checkbox = []
    editTitles = []

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
/* harmony import */ var _modules_Todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Todos */ "./src/modules/Todos.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0RDtBQUN1QjtBQUNuRjtBQUNBO0FBQ087QUFDQTtBQUNBO0FBQ1A7QUFDQTtBQUNPO0FBQ1AsZUFBZSxLQUFLO0FBQ3BCO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLEVBQUUsaURBQWMsRUFBRTtBQUNuQztBQUNBO0FBQ0EseUJBQXlCLDBDQUFPO0FBQ2hDO0FBQ0E7QUFDQSxRQUFRLG1EQUFVO0FBQ2xCLFFBQVEsZ0RBQU8sQ0FBQywwQ0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBWSxDQUFDLHVDQUFJO0FBQ3JCLElBQUksbURBQVU7QUFDZCxJQUFJLGdEQUFPLENBQUMsdUNBQUk7QUFDaEI7QUFDQSxDQUFDO0FBQ0Q7QUFDTztBQUNQO0FBQ0EsT0FBTyxpREFBYztBQUNyQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0RBQWEsSUFBSSx1Q0FBSTtBQUNyQyxhQUFhO0FBQ2IsZ0JBQWdCLG9EQUFhLElBQUksMENBQU87QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsMENBQU87QUFDcEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDBDQUFPO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLFlBQVksbURBQVU7QUFDdEIsWUFBWSxnREFBTyxDQUFDLDBDQUFPO0FBQzNCO0FBQ0EsWUFBWSxxREFBWSxDQUFDLDBDQUFPO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxrREFBVTtBQUN0QixZQUFZLG1EQUFVO0FBQ3RCLFlBQVksZ0RBQU8sQ0FBQywwQ0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdklpRjtBQUNyQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDTztBQUNBO0FBQ0E7QUFDQTtBQUNQO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0RBQVU7QUFDZCxPQUFPLG1EQUFZO0FBQ25CLFFBQVEsK0NBQU87QUFDZixLQUFLLFFBQVEsbURBQVk7QUFDekIsUUFBUSwrQ0FBTyxTQUFTLG1EQUFZO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLFFBQVEscURBQVU7QUFDbEI7QUFDQSxJQUFJLGtEQUFVO0FBQ2QsSUFBSSxxREFBWTtBQUNoQixJQUFJLGdEQUFPO0FBQ1g7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRjREO0FBQ0Q7QUFDaUQ7QUFDdEU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsT0FBTyxtREFBWTtBQUNuQixRQUFRLGlFQUEwQjtBQUNsQyxxQkFBcUIsdUNBQUk7QUFDekI7QUFDQSxRQUFRLHFEQUFTO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUIsZUFBZTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsdURBQWU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1REFBZTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFlBQVksa0RBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1REFBZTtBQUMzQixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxPQUFPLG1EQUFZO0FBQ25CLHFCQUFxQix1Q0FBSTtBQUN6QixLQUFLLFFBQVEsbURBQVk7QUFDekIscUJBQXFCLDBDQUFPLENBQUMsbURBQVk7QUFDekM7QUFDQSxDQUFDO0FBQ0Q7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVywwREFBbUI7QUFDOUI7QUFDQSxZQUFZLCtDQUFPLDhCQUE4QixxREFBYztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2hLQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ055QztBQUNTO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsS0FBSztBQUN2QjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0UsWUFBWTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixlQUFlO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9Qcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9UYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1RvZG9zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0YXNrRE9NICwgY2xlYXJUYXNrcywgYWRkTGlzdGVuZXJzfSBmcm9tIFwiLi9Ub2Rvc1wiO1xyXG5pbXBvcnQgeyBwcm9qZWN0LCBhZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCBob21lICwgdG9kYXksIHRoaXNXZWVrIH0gZnJvbSAnLi9UYXNrJ1xyXG5cclxuLy9BZGQgcHJvamVjdCBsaXN0c1xyXG5leHBvcnQgY29uc3QgY3VycmVudFByb2plY3RIMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LXByb2plY3QnKVxyXG5leHBvcnQgbGV0IGN1cnJlbnRQcm9qZWN0ID0gJ0hvbWUnXHJcbmV4cG9ydCBsZXQgY3VycmVudEluZGV4ID0gMFxyXG5jb25zdCByZW1Qcm9qZWN0ID0gW10gXHJcbmxldCBwcm9qZWN0cyA9IFtdXHJcbmV4cG9ydCBsZXQgcGF0dGVybnMgPSB7XHJcbiAgICB0aXRsZTogL14uezEsMjB9JC8sXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RET00oKXtcclxuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0SDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC1wcm9qZWN0JylcclxuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHMnKVxyXG4gICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWRpdicpXHJcbiAgICBjdXJyZW50UHJvamVjdEgxLmlubmVyVGV4dCA9IGN1cnJlbnRQcm9qZWN0XHJcbiAgICBzaG93VGFza3MoKVxyXG4gICAgZm9yKGxldCBpPTA7IGk8cHJvamVjdC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgaWYoIXByb2plY3RzW2ldKXtcclxuICAgICAgICAvL3VwZGF0ZSBjdXJyZW50IHByb2plY3RcclxuICAgICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RbaV0udGl0bGVcclxuICAgICAgICBjdXJyZW50SW5kZXggPSBpXHJcbiAgICAgICAgY3VycmVudFByb2plY3RIMS5pbm5lckhUTUwgPSBjdXJyZW50UHJvamVjdFxyXG4gICAgICAgIGNsZWFyVGFza3MoKVxyXG4gICAgICAgIHRhc2tET00ocHJvamVjdFtjdXJyZW50SW5kZXhdLnRvZG9zKVxyXG4gICAgICAgIC8vY3JlYXRlIGVsZW1lbnRzXHJcbiAgICAgICAgcHJvamVjdHNbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHByb2plY3RzW2ldLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdHMnKVxyXG4gICAgICAgIHByb2plY3RzW2ldLmlubmVySFRNTCA9IGA8YnV0dG9uIGNsYXNzPVwiYnRuLXByb2plY3RcIj48L2J1dHRvbj48YnV0dG9uIGNsYXNzPVwicmVtb3ZlLXByb2plY3RcIj48aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT48L2J1dHRvbj5gXHJcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5pbnNlcnRCZWZvcmUocHJvamVjdHNbaV0sIHByb2plY3REaXYpXHJcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLXByb2plY3QnKVxyXG4gICAgICAgIHByb2plY3ROYW1lW2ldLmlubmVyVGV4dCA9IGN1cnJlbnRQcm9qZWN0XHJcbiAgICAgICAgcmVtUHJvamVjdFtpXSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmUtcHJvamVjdCcpW2ldXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGVsZXRlUHJvamVjdCgpXHJcbiAgICBzZWxlY3RQcm9qZWN0KClcclxufVxyXG4vLyBTZWxlY3QgaG9tZSB0YWJcclxuZXhwb3J0IGxldCB0b2RvU2VsZWN0b3IgPSAwXHJcbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZS1idG4nKVxyXG5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKT0+IHtcclxuICAgIHRvZG9TZWxlY3RvciA9IDBcclxuICAgIGN1cnJlbnRQcm9qZWN0ID0gJ0hvbWUnXHJcbiAgICBjdXJyZW50UHJvamVjdEgxLmlubmVyVGV4dCA9IGN1cnJlbnRQcm9qZWN0XHJcbiAgICBhZGRMaXN0ZW5lcnMoaG9tZSlcclxuICAgIGNsZWFyVGFza3MoKVxyXG4gICAgdGFza0RPTShob21lKVxyXG4gICAgc2hvd1Rhc2tzKClcclxufSlcclxuLy9TaG93IHRhc2sgbWVudVxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd1Rhc2tzKCl7XHJcbiAgICBjb25zdCB0YXNrRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1maWVsZCcpXHJcbiAgICBpZihwcm9qZWN0Lmxlbmd0aCA+IDAgfHwgdG9kb1NlbGVjdG9yID09PSAwKXtcclxuICAgICAgICB0YXNrRmllbGQuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJylcclxuICAgIH1lbHNlIHtcclxuICAgICAgICB0YXNrRmllbGQuY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJylcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KCl7XHJcbiAgICByZW1Qcm9qZWN0LmZvckVhY2goKGJ0bixpKT0+e1xyXG4gICAgICAgIGJ0bi5vbm1vdXNldXAgPSAoKT0+IHtcclxuICAgICAgICAgICAgYnRuLnBhcmVudE5vZGUucmVtb3ZlKClcclxuICAgICAgICAgICAgcmVtUHJvamVjdC5zcGxpY2UoaSwxKVxyXG4gICAgICAgICAgICBpZih0b2RvU2VsZWN0b3IgPT09IDApe1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlUHJvamVjdChpLCBob21lKVxyXG4gICAgICAgICAgICB9ZWxzZSBpZih0b2RvU2VsZWN0b3IgPT09IDEpe1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlUHJvamVjdChpLCBwcm9qZWN0W2N1cnJlbnRJbmRleF0udG9kb3MpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHJvamVjdHMuc3BsaWNlKGksMSlcclxuICAgICAgICAgICAgc2hvd1Rhc2tzKClcclxuICAgICAgICAgICAgaWYoaSAhPT0gMCApe1xyXG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RbaSAtIDFdLnRpdGxlXHJcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleCA9IGkgLSAxIFxyXG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdEgxLmlubmVySFRNTCA9IGN1cnJlbnRQcm9qZWN0XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFByb2plY3QgPSAnJ1xyXG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4ID0gaVxyXG4gICAgICAgICAgICAgICAgY3VycmVudFByb2plY3RIMS5pbm5lckhUTUwgPSBjdXJyZW50UHJvamVjdFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRvZG9TZWxlY3RvciA9IDFcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcbi8vIFNlbGVjdCB3aGljaCBwcm9qZWN0IHRvIGFkZCBub3Rlc1xyXG5mdW5jdGlvbiBzZWxlY3RQcm9qZWN0KCl7XHJcbiAgICBjb25zdCBwcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1wcm9qZWN0JylcclxuICAgIHByb2plY3RCdG4uZm9yRWFjaCgocCxpKT0+e1xyXG4gICAgICAgIHAub25tb3VzZXVwID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RbaV0udGl0bGVcclxuICAgICAgICAgICAgY3VycmVudEluZGV4ID0gaVxyXG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdEgxLmlubmVySFRNTCA9IGN1cnJlbnRQcm9qZWN0XHJcbiAgICAgICAgICAgIHRvZG9TZWxlY3RvciA9IDFcclxuICAgICAgICAgICAgY2xlYXJUYXNrcygpXHJcbiAgICAgICAgICAgIHRhc2tET00ocHJvamVjdFtjdXJyZW50SW5kZXhdLnRvZG9zKVxyXG4gICAgICAgICAgICBwcm9qZWN0RE9NKClcclxuICAgICAgICAgICAgYWRkTGlzdGVuZXJzKHByb2plY3RbY3VycmVudEluZGV4XS50b2RvcylcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcbi8vTGlzdGVuZXJzIHRvIG9wZW4gdGhlIHByb2plY3QgbWVudSBhbmQgYWRkIHByb2plY3RzXHJcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdGl0bGUnKVxyXG5jb25zdCBvcGVuUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcGVuLXByb2plY3QnKVxyXG5cclxub3BlblByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHByb2plY3RMaXN0ZW5lcilcclxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RMaXN0ZW5lcigpe1xyXG4gICAgY29uc3QgcHJvamVjdEluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1pbmZvJylcclxuICAgIGNvbnN0IGNsb3NlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1wcm9qZWN0JylcclxuICAgIFxyXG4gICAgY29uc3QgZWRpdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1wcm9qZWN0JylcclxuICAgIGVkaXRQcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICBvcGVuUHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgcHJvamVjdEluZm8uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgIGNsb3NlUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCk9PiB7XHJcbiAgICAgICAgcHJvamVjdEluZm8uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICAgICBvcGVuUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgfSlcclxuICAgIGNvbnN0IGFkZF9wcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0JylcclxuICAgIGFkZF9wcm9qZWN0Lm9ubW91c2V1cCA9ICgpPT57XHJcbiAgICAgICAgaWYocGF0dGVybnMudGl0bGUudGVzdCh0aXRsZS52YWx1ZSkgPT09IHRydWUpe1xyXG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IHRpdGxlLnZhbHVlXHJcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0SDEuaW5uZXJIVE1MID0gY3VycmVudFByb2plY3RcclxuICAgICAgICAgICAgZWRpdFByb2plY3QudmFsdWUgPSBjdXJyZW50UHJvamVjdFxyXG4gICAgICAgICAgICBlZGl0UHJvamVjdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICBwcm9qZWN0SW5mby5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICBvcGVuUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICBhZGRQcm9qZWN0KGN1cnJlbnRQcm9qZWN0LCBbXSlcclxuICAgICAgICAgICAgY2xlYXJUYXNrcygpIFxyXG4gICAgICAgICAgICB0YXNrRE9NKHByb2plY3RbY3VycmVudEluZGV4XS50b2RvcylcclxuICAgICAgICAgICAgcHJvamVjdERPTSgpXHJcbiAgICAgICAgICAgIHRvZG9TZWxlY3RvciA9IDFcclxuICAgICAgICB9ICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQge2N1cnJlbnRJbmRleCwgY3VycmVudFByb2plY3QsIHByb2plY3RET00sIHRvZG9TZWxlY3Rvcn0gZnJvbSAnLi9Qcm9qZWN0cydcclxuaW1wb3J0IHsgdGFza0RPTSwgY2xlYXJUYXNrcyAsIGFkZExpc3RlbmVyc30gZnJvbSBcIi4vVG9kb3NcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXNrKHRpdGxlLCBkYXRlLCBjaGVja2VkLCBwcm9qZWN0KXtcclxuICAgIHJldHVybnt0aXRsZSwgZGF0ZSwgY2hlY2tlZCwgcHJvamVjdH1cclxufVxyXG5leHBvcnQgbGV0IHByb2plY3QgPSBbXVxyXG5leHBvcnQgbGV0IGhvbWUgPSBbXVxyXG5leHBvcnQgbGV0IHRvZGF5ID0gW11cclxuZXhwb3J0IGxldCB0aGlzV2VlayA9IFtdXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9kbyggdHlwZSx0aXRsZSxkYXRlLGNoZWNrLCBwcm9qKXtcclxuICAgIHR5cGUucHVzaChjcmVhdGVUYXNrKHRpdGxlLCBkYXRlLCBjaGVjaywgcHJvaikpXHJcbiAgICBwb3B1bGF0ZVN0b3JhZ2UoKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVG9kbyhpLCB0eXBlKXtcclxuICAgIHR5cGUuc3BsaWNlKGksMSlcclxuICAgIHBvcHVsYXRlU3RvcmFnZSgpXHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSwgdG9kb3Mpe1xyXG4gICAgcmV0dXJuIHt0aXRsZSwgdG9kb3N9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3QodGl0bGUsIHRvZG9zKXtcclxuICAgIHByb2plY3QucHVzaChjcmVhdGVQcm9qZWN0KHRpdGxlLCB0b2RvcykpXHJcbiAgICBwb3B1bGF0ZVN0b3JhZ2UoKVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KGkpe1xyXG4gICAgcHJvamVjdC5zcGxpY2UoaSwxKVxyXG4gICAgcG9wdWxhdGVTdG9yYWdlKClcclxufVxyXG4vL0FkZCBtZXRob2RzIHRvIHVzZSBvYmplY3RzIG9uIGxvY2FsIHN0b3JhZ2UgXHJcblN0b3JhZ2UucHJvdG90eXBlLnNldE9iaiA9IGZ1bmN0aW9uKGtleSwgb2JqKXtcclxuICAgIHJldHVybiB0aGlzLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShvYmopKVxyXG59XHJcblN0b3JhZ2UucHJvdG90eXBlLmdldE9iaiA9IGZ1bmN0aW9uKGtleSl7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLmdldEl0ZW0oa2V5KSlcclxufVxyXG4vLyAgICAgIC8vICBTZXR0aW5nIHRoZSBsb2NhbCBzdG9yYWdlICAgIC8vICAgICAgLy9cclxuU3RvcmFnZS5wcm90b3R5cGUuc2V0T2JqID0gZnVuY3Rpb24oa2V5LCBvYmopIHtcclxuICAgIHJldHVybiB0aGlzLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShvYmopKVxyXG59XHJcblN0b3JhZ2UucHJvdG90eXBlLmdldE9iaiA9IGZ1bmN0aW9uKGtleSkge1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy5nZXRJdGVtKGtleSkpXHJcbn1cclxuLy8gICAgICAgLy8gICAgICAvLyAgICAgICAvLyAgICAgIFxyXG4vLyB2YXIgY3VycmVudEhvbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0T2JqKCdjdXJyZW50SG9tZScpIHx8IFtdOyAgXHJcbi8vIHZhciBjdXJyZW50UHJvamVjdE9iaiA9IGxvY2FsU3RvcmFnZS5nZXRPYmooJ2N1cnJlbnRQcm9qZWN0T2JqJykgfHwgW107XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGVTdG9yYWdlKCl7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0T2JqKCdjdXJyZW50SG9tZScsIGhvbWUpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldE9iaignY3VycmVudFByb2plY3RPYmonLCBwcm9qZWN0KTsgICBcclxuICAgIHNldFN0b3JhZ2VWYWx1ZXMoKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0U3RvcmFnZVZhbHVlcygpIHtcclxuICAgIHZhciBjdXJyZW50SG9tZSA9IGxvY2FsU3RvcmFnZS5nZXRPYmooJ2N1cnJlbnRIb21lJyk7ICBcclxuICAgIHZhciBjdXJyZW50UHJvamVjdE9iaiA9IGxvY2FsU3RvcmFnZS5nZXRPYmooJ2N1cnJlbnRQcm9qZWN0T2JqJyk7XHJcbiAgICBob21lID0gY3VycmVudEhvbWU7XHJcbiAgICBwcm9qZWN0ID0gY3VycmVudFByb2plY3RPYmo7XHJcbiAgICBjbGVhclRhc2tzKClcclxuICAgIGlmKHRvZG9TZWxlY3RvciA9PT0gMCl7XHJcbiAgICAgICAgdGFza0RPTShob21lKVxyXG4gICAgfWVsc2UgaWYodG9kb1NlbGVjdG9yID09PSAxKXtcclxuICAgICAgICB0YXNrRE9NKHByb2plY3RbY3VycmVudEluZGV4XS50b2RvcylcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHByb2plY3QpXHJcbiAgICBjb25zb2xlLmxvZyhob21lKVxyXG4gICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3RPYmopXHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50SG9tZSkgXHJcbn1cclxuaWYoIWxvY2FsU3RvcmFnZS5nZXRPYmooJ2N1cnJlbnRQcm9qZWN0T2JqJykpIHtcclxuICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzZXRTdG9yYWdlVmFsdWVzKClcclxuICAgIGlmKHByb2plY3QubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgcHJvamVjdERPTSgpO1xyXG4gICAgfVxyXG4gICAgY2xlYXJUYXNrcygpIFxyXG4gICAgYWRkTGlzdGVuZXJzKGhvbWUpXHJcbiAgICB0YXNrRE9NKGhvbWUpO1xyXG4gIH1cclxuXHJcbiIsImltcG9ydCB7Y29tcGFyZUFzYywgZm9ybWF0LCBmb3JtYXREaXN0YW5jZSB9IGZyb20gJ2RhdGUtZm5zJ1xyXG5pbXBvcnQge3JlbW92ZVRvZG8sIGFkZFRvZG8sIHByb2plY3QsIGhvbWUgIH0gZnJvbSAnLi9UYXNrJ1xyXG5pbXBvcnQge2N1cnJlbnRJbmRleCwgY3VycmVudFByb2plY3QsIGN1cnJlbnRQcm9qZWN0SDEsIHBhdHRlcm5zLCBzaG93VGFza3MsIHRvZG9TZWxlY3Rvcn0gZnJvbSAnLi9Qcm9qZWN0cydcclxuaW1wb3J0IHtwb3B1bGF0ZVN0b3JhZ2V9IGZyb20gJy4vVGFzaydcclxuLy9cclxuLy9cclxuLy8gVG9kb3NcclxubGV0IHRvZG8gPSBbXVxyXG5sZXQgcmVtb3ZlQnRuID0gW11cclxubGV0IGRhdGVzID0gW11cclxubGV0IGRhdGVzVGV4dCA9IFtdXHJcbmxldCBjaGVja2JveCA9IFtdXHJcbmxldCBlZGl0VGl0bGVzID0gW11cclxuXHJcbi8vRGlzcGxheSB0b2RvcyBvbiBzY3JlZW5cclxuZXhwb3J0IGZ1bmN0aW9uIHRhc2tET00odHlwZSl7XHJcbiAgICBpZih0b2RvU2VsZWN0b3IgPT09IDApe1xyXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0SDEuaW5uZXJUZXh0ID0gJ0hvbWUnXHJcbiAgICAgICAgYWRkTGlzdGVuZXJzKGhvbWUpXHJcbiAgICAgICAgY2xlYXJUYXNrcygpXHJcbiAgICAgICAgc2hvd1Rhc2tzKClcclxuICAgIH1cclxuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbGlzdCcpXHJcbiAgICBmb3IobGV0IGk9MDsgaTx0eXBlLmxlbmd0aDsgaSsrKSB7ICBcclxuICAgICAgICBpZighdG9kb1tpXSl7ICAgICBcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIHRhc2sgZmllbGQgICAgXHJcbiAgICAgICAgICAgIHRvZG9baV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICB0b2RvW2ldLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPSdsZWZ0Jz48bGFiZWwgY2xhc3M9XCJjaGVjay1sYWJlbFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGNsYXNzPVwiY2hlY2tcIiBuYW1lPVwiY2hlY2tcIj48c3BhbiBjbGFzcz1cInNwYW4tY2hlY2tcIj48L3NwYW4+PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGNsYXNzPVwidGFzay1uYW1lXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPSdlZGl0LXRpdGxlcyBhY3RpdmUnPjwvcD48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ncmlnaHQnPjxwIGNsYXNzPSdlZGl0LWRhdGVzIGFjdGl2ZSc+Tm8gRGF0ZTwvcD48aW5wdXQgdHlwZT1cImRhdGVcIiBjbGFzcz1cImRhdGVcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInJlbW92ZVwiPjxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPjwvYnV0dG9uPjwvZGl2PmBcclxuICAgICAgICAgICAgdG9kb1tpXS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2snKVxyXG4gICAgICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0b2RvW2ldKVxyXG4gICAgICAgICAgICAvLyBBZGQgZmllbGQgZWxlbWVudHMgXHJcbiAgICAgICAgICAgIHJlbW92ZUJ0bltpXSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmUnKVtpXVxyXG4gICAgICAgICAgICBkYXRlc1tpXSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRlJylbaV1cclxuICAgICAgICAgICAgZGF0ZXNUZXh0W2ldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQtZGF0ZXMnKVtpXVxyXG4gICAgICAgICAgICBjaGVja2JveFtpXSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVjaycpW2ldICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGVkaXRUaXRsZXNbaV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdC10aXRsZXMnKVtpXVxyXG4gICAgICAgICAgICBjaGVja2JveFtpXS5jaGVja2VkID0gdHlwZVtpXS5jaGVja2VkXHJcbiAgICAgICAgICAgIGVkaXRUaXRsZXNbaV0uaW5uZXJUZXh0ID0gdHlwZVtpXS50aXRsZSAgXHJcbiAgICAgICAgICAgIGlmKHR5cGVbaV0uZGF0ZSAhPT0gJycpe2RhdGVzVGV4dFtpXS5pbm5lclRleHQgPSB0eXBlW2ldLmRhdGV9IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFkZENoYW5nZXModHlwZSlcclxufVxyXG4vL0FkZCBjaGFuZ2VzIHRvIGlucHV0LCBkYXRlLCBjaGVja2JveGVzXHJcbmZ1bmN0aW9uIGFkZENoYW5nZXModHlwZSl7XHJcbiAgICByZW1vdmVET00odHlwZSlcclxuICAgIGNoYW5nZUNoZWNrKHR5cGUpXHJcbiAgICBjaGFuZ2VEYXRlKHR5cGUpXHJcbiAgICBlZGl0VGFzayh0eXBlKVxyXG59XHJcbi8vQWxsb3dzIGNoYW5nZSB0aGUgdGl0bGUgb2YgdGhlIHRhc2tcclxuZnVuY3Rpb24gZWRpdFRhc2sodHlwZSl7XHJcbiAgICBsZXQgZWRpdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stbmFtZScpXHJcbiAgICBlZGl0VGl0bGVzLmZvckVhY2goKGVUaXRsZXMsaSk9PntcclxuICAgICAgICBlVGl0bGVzLm9ubW91c2V1cCA9ICgpPT57XHJcbiAgICAgICAgICAgIGVUaXRsZXMuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICAgICAgICAgZWRpdElucHV0W2ldLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIGVkaXRJbnB1dC5mb3JFYWNoKChpbnB1dCxpKT0+e1xyXG4gICAgICAgIGlucHV0LnZhbHVlID0gZWRpdFRpdGxlc1tpXS5pbm5lckhUTUxcclxuICAgICAgICBpbnB1dC5vbmtleXVwID0gZnVuY3Rpb24gKGV2ZW50KXtcclxuICAgICAgICAgICAgaWYoZXZlbnQua2V5ID09PSAnRW50ZXInKXtcclxuICAgICAgICAgICAgICAgIGVkaXRUaXRsZXNbaV0uaW5uZXJIVE1MID0gaW5wdXQudmFsdWVcclxuICAgICAgICAgICAgICAgIHR5cGVbaV0udGl0bGUgPSBpbnB1dC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgcG9wdWxhdGVTdG9yYWdlKClcclxuICAgICAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICBlZGl0VGl0bGVzW2ldLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuLy9DaGFuZ2UgdGhlIHN0YXR1cyBvZiB0aGUgZGF0ZSBpbnB1dHNcclxuZnVuY3Rpb24gY2hhbmdlRGF0ZSh0eXBlKXtcclxuICAgIGRhdGVzVGV4dC5mb3JFYWNoKChwLGkpPT4ge1xyXG4gICAgICAgIHAub25tb3VzZXVwID0gKCk9PntcclxuICAgICAgICAgICAgcC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICBkYXRlc1tpXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBkYXRlcy5mb3JFYWNoKChpbnB1dCwgaSkgPT4ge1xyXG4gICAgICAgIGlucHV0Lm9uY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0eXBlW2ldLmRhdGUgPSBpbnB1dC52YWx1ZVxyXG4gICAgICAgICAgICBkYXRlc1RleHRbaV0uaW5uZXJUZXh0ID0gaW5wdXQudmFsdWVcclxuICAgICAgICAgICAgcG9wdWxhdGVTdG9yYWdlKClcclxuICAgICAgICAgICAgZGF0ZXNUZXh0W2ldLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbi8vUmVtb3ZlcyBhbiBlbGVtZW50IGZyb20gdGhlIHRhc2sgYXJyYXkgYW5kIERPTVxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRE9NKHR5cGUpeyAgXHJcbiAgICByZW1vdmVCdG4uZm9yRWFjaCgoYnRuLCBpKSA9PiB7XHJcbiAgICAgICAgYnRuLm9ubW91c2V1cCA9ICgpPT57XHJcbiAgICAgICAgICAgIGJ0bi5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlKClcclxuICAgICAgICAgICAgcmVtb3ZlVG9kbyhpLCB0eXBlKSBcclxuICAgICAgICAgICAgdG9kby5zcGxpY2UoaSwxKVxyXG4gICAgICAgICAgICByZW1vdmVCdG4uc3BsaWNlKGksMSlcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgfSk7XHJcbn1cclxuLy9DaGFuZ2VzIHRoZSBzdGF0dXMgb2YgdGhlIGNoZWNrYm94ZXNcclxuZnVuY3Rpb24gY2hhbmdlQ2hlY2sodHlwZSl7XHJcbiAgICBjaGVja2JveC5mb3JFYWNoKChjaGVjayxpKT0+IHtcclxuICAgICAgICBjaGVjay5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PntcclxuICAgICAgICAgICAgdHlwZVtpXS5jaGVja2VkID0gY2hlY2suY2hlY2tlZFxyXG4gICAgICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBidG5PcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wZW4tbWVudScpXHJcbmJ0bk9wZW4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpPT4ge1xyXG4gICAgY29uc3QgdGFza0ZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZmllbGQnKVxyXG4gICAgdGFza0ZpZWxkLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICBjb25zdCBidG5DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1idG4nKVxyXG4gICAgYnRuQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpPT57XHJcbiAgICAgICAgdGFza0ZpZWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICB9KVxyXG4gICAgaWYodG9kb1NlbGVjdG9yID09PSAwKXtcclxuICAgICAgICBhZGRMaXN0ZW5lcnMoaG9tZSlcclxuICAgIH1lbHNlIGlmKHRvZG9TZWxlY3RvciA9PT0gMSl7XHJcbiAgICAgICAgYWRkTGlzdGVuZXJzKHByb2plY3RbY3VycmVudEluZGV4XS50b2RvcylcclxuICAgIH1cclxufSlcclxuLy9BZGQgbGlzdGVuZXIgZm9yIG9wZW4gYW5kIGNsb3NlIHRoZSB0aXRsZSBtZW51XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRMaXN0ZW5lcnMoc2VsZWN0b3Ipe1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay10aXRsZScpLnZhbHVlIFxyXG4gICAgY29uc3QgdGFza0ZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZmllbGQnKVxyXG4gICAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzaycpXHJcbiAgICBhZGRUYXNrLm9ubW91c2V1cCA9ICgpPT57XHJcbiAgICAgICAgaWYocGF0dGVybnMudGl0bGUudGVzdCh0aXRsZS52YWx1ZSk9PT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stdGl0bGUnKS52YWx1ZVxyXG4gICAgICAgICAgICBhZGRUb2RvKHNlbGVjdG9yICwgdGl0bGUsICcnLCBmYWxzZSwgY3VycmVudFByb2plY3QpXHJcbiAgICAgICAgICAgIHRhc2tET00oc2VsZWN0b3IpXHJcbiAgICAgICAgICAgIHRhc2tGaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJUYXNrcygpe1xyXG4gICAgdG9kbyA9IFtdXHJcbiAgICByZW1vdmVCdG4gPSBbXVxyXG4gICAgZGF0ZXMgPSBbXVxyXG4gICAgZGF0ZXNUZXh0ID0gW11cclxuICAgIGNoZWNrYm94ID0gW11cclxuICAgIGVkaXRUaXRsZXMgPSBbXVxyXG5cclxuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbGlzdCcpXHJcbiAgICB3aGlsZSAodGFza0xpc3QuY2hpbGRFbGVtZW50Q291bnQ+MCl7XHJcbiAgICAgICAgdGFza0xpc3QuZmlyc3RDaGlsZC5yZW1vdmUoKVxyXG4gICAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBwcm9qZWN0IH0gZnJvbSBcIi4vbW9kdWxlcy9UYXNrXCI7XHJcbmltcG9ydCB7IHBvcHVsYXRlU3RvcmFnZSB9IGZyb20gXCIuL21vZHVsZXMvVG9kb3NcIjtcclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcclxuLy8gLy8gXHJcbi8vIC8vXHJcbi8vIC8vIFRhc2tzXHJcbi8vIGZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUsIGRhdGUsIGNoZWNrZWQsIHByb2plY3Qpe1xyXG4vLyAgICAgcmV0dXJue3RpdGxlLCBkYXRlLCBjaGVja2VkLCBwcm9qZWN0fVxyXG4vLyB9IFxyXG4vLyBsZXQgcHJvamVjdCA9IFtdIFxyXG4vLyBsZXQgaG9tZSA9IFtdIFxyXG4vLyBsZXQgdG9kYXkgPSBbXSBcclxuLy8gbGV0IHRoaXNXZWVrID0gW11cclxuIFxyXG4vLyBmdW5jdGlvbiBhZGRUb2RvKCB0eXBlLHRpdGxlLGRhdGUsY2hlY2ssIHByb2ope1xyXG4vLyAgICAgdHlwZS5wdXNoKGNyZWF0ZVRhc2sodGl0bGUsIGRhdGUsIGNoZWNrLCBwcm9qKSlcclxuLy8gICAgIHBvcHVsYXRlU3RvcmFnZSgpXHJcbi8vIH1cclxuIFxyXG4vLyBmdW5jdGlvbiByZW1vdmVUb2RvKGksIHR5cGUpe1xyXG4vLyAgICAgdHlwZS5zcGxpY2UoaSwxKVxyXG4vLyAgICAgcG9wdWxhdGVTdG9yYWdlKClcclxuLy8gfVxyXG4vLyBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlLCB0b2Rvcyl7XHJcbi8vICAgICByZXR1cm4ge3RpdGxlLCB0b2Rvc31cclxuLy8gfSBcclxuLy8gZnVuY3Rpb24gYWRkUHJvamVjdCh0aXRsZSwgdG9kb3Mpe1xyXG4vLyAgICAgcHJvamVjdC5wdXNoKGNyZWF0ZVByb2plY3QodGl0bGUsIHRvZG9zKSlcclxuLy8gICAgIHBvcHVsYXRlU3RvcmFnZSgpXHJcblxyXG4vLyB9IFxyXG4vLyBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KGkpe1xyXG4vLyAgICAgcHJvamVjdC5zcGxpY2UoaSwxKVxyXG4vLyAgICAgcG9wdWxhdGVTdG9yYWdlKClcclxuLy8gfVxyXG4vLyAvL1xyXG4vLyAvL1xyXG4vLyAvL0FkZCBwcm9qZWN0IGxpc3RzXHJcbi8vIGNvbnN0IGN1cnJlbnRQcm9qZWN0SDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC1wcm9qZWN0JylcclxuLy8gbGV0IGN1cnJlbnRQcm9qZWN0ID0gJydcclxuLy8gbGV0IGN1cnJlbnRJbmRleCA9IDBcclxuLy8gY29uc3QgcmVtUHJvamVjdCA9IFtdIFxyXG4vLyBsZXQgcHJvamVjdHMgPSBbXVxyXG4vLyBsZXQgcGF0dGVybnMgPSB7XHJcbi8vICAgICB0aXRsZTogL14uezEsMjB9JC8sXHJcbi8vIH1cclxuXHJcbi8vIGxldCB0b2RvU2VsZWN0b3IgPSBob21lXHJcbi8vIGZ1bmN0aW9uIHByb2plY3RET00oKXtjb25zb2xlLmxvZygncHJvamVjdERPTScpXHJcbi8vICAgICBpZihwcm9qZWN0Lmxlbmd0aD4wKXtcclxuLy8gICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0SDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC1wcm9qZWN0JylcclxuLy8gICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHMnKVxyXG4vLyAgICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWRpdicpXHJcbi8vICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXRpdGxlJylcclxuLy8gICAgIGN1cnJlbnRQcm9qZWN0SDEuaW5uZXJUZXh0ID0gY3VycmVudFByb2plY3RcclxuLy8gICAgIHRvZG9TZWxlY3RvciA9IHByb2plY3RbY3VycmVudEluZGV4XS50b2Rvc1xyXG4vLyAgICAgc2hvd1Rhc2tzKClcclxuLy8gICAgIGZvcihsZXQgaT0wOyBpPHByb2plY3QubGVuZ3RoOyBpKyspe1xyXG4vLyAgICAgICAgIGlmKCFwcm9qZWN0c1tpXSl7XHJcbi8vICAgICAgICAgLy91cGRhdGUgY3VycmVudCBwcm9qZWN0XHJcbi8vICAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0W2ldLnRpdGxlXHJcbi8vICAgICAgICAgY3VycmVudEluZGV4ID0gaVxyXG4vLyAgICAgICAgIGN1cnJlbnRQcm9qZWN0SDEuaW5uZXJIVE1MID0gY3VycmVudFByb2plY3RcclxuLy8gICAgICAgICBjbGVhclRhc2tzKClcclxuLy8gICAgICAgICB0YXNrRE9NKHByb2plY3RbY3VycmVudEluZGV4XS50b2RvcylcclxuLy8gICAgICAgICAvL2NyZWF0ZSBlbGVtZW50c1xyXG4vLyAgICAgICAgIHByb2plY3RzW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuLy8gICAgICAgICBwcm9qZWN0c1tpXS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3RzJylcclxuLy8gICAgICAgICBwcm9qZWN0c1tpXS5pbm5lckhUTUwgPSBgPGJ1dHRvbiBjbGFzcz1cImJ0bi1wcm9qZWN0XCI+JHt0aXRsZS52YWx1ZX08L2J1dHRvbj48YnV0dG9uIGNsYXNzPVwicmVtb3ZlLXByb2plY3RcIj48aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT48L2J1dHRvbj5gXHJcbi8vICAgICAgICAgcHJvamVjdENvbnRhaW5lci5pbnNlcnRCZWZvcmUocHJvamVjdHNbaV0sIHByb2plY3REaXYpXHJcbi8vICAgICAgICAgcmVtUHJvamVjdFtpXSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmUtcHJvamVjdCcpW2ldXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgZGVsZXRlUHJvamVjdCgpXHJcbi8vICAgICBzZWxlY3RQcm9qZWN0KClcclxuLy8gICAgIGNvbnNvbGUubG9nKHByb2plY3QpfVxyXG4vLyB9XHJcbi8vIC8vXHJcblxyXG5cclxuLy8gY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lLWJ0bicpXHJcbi8vIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpPT4ge1xyXG4vLyAgICAgdG9kb1NlbGVjdG9yID0gaG9tZVxyXG4vLyAgICAgY3VycmVudFByb2plY3QgPSAnSG9tZSdcclxuLy8gICAgIGN1cnJlbnRQcm9qZWN0SDEuaW5uZXJUZXh0ID0gY3VycmVudFByb2plY3RcclxuLy8gICAgIGFkZExpc3RlbmVycyh0b2RvU2VsZWN0b3IpXHJcbi8vICAgICBjbGVhclRhc2tzKClcclxuLy8gICAgIHRhc2tET00odG9kb1NlbGVjdG9yKVxyXG4vLyAgICAgc2hvd1Rhc2tzKClcclxuLy8gfSlcclxuLy8gLy9TaG93IHRhc2sgbWVudVxyXG4vLyBmdW5jdGlvbiBzaG93VGFza3MoKXtcclxuLy8gICAgIGNvbnN0IHRhc2tGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWZpZWxkJylcclxuLy8gICAgIGlmKHByb2plY3QubGVuZ3RoID4gMCB8fCB0b2RvU2VsZWN0b3IgPT0gaG9tZSl7XHJcbi8vICAgICAgICAgdGFza0ZpZWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpXHJcbi8vICAgICB9ZWxzZSB7XHJcbi8vICAgICAgICAgdGFza0ZpZWxkLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpXHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy8gZnVuY3Rpb24gZGVsZXRlUHJvamVjdCgpe1xyXG4vLyAgICAgcmVtUHJvamVjdC5mb3JFYWNoKChidG4saSk9PntcclxuLy8gICAgICAgICBidG4ub25tb3VzZXVwID0gKCk9PiB7XHJcbi8vICAgICAgICAgICAgIGJ0bi5wYXJlbnROb2RlLnJlbW92ZSgpXHJcbi8vICAgICAgICAgICAgIHJlbVByb2plY3Quc3BsaWNlKGksMSlcclxuLy8gICAgICAgICAgICAgcmVtb3ZlUHJvamVjdChpLCB0b2RvU2VsZWN0b3IpXHJcbi8vICAgICAgICAgICAgIHByb2plY3RzLnNwbGljZShpLDEpXHJcbi8vICAgICAgICAgICAgIHNob3dUYXNrcygpXHJcbi8vICAgICAgICAgICAgIGlmKGkgIT09IDAgKXtcclxuLy8gICAgICAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0W2kgLSAxXS50aXRsZVxyXG4vLyAgICAgICAgICAgICBjdXJyZW50SW5kZXggPSBpIC0gMSBcclxuLy8gICAgICAgICAgICAgY3VycmVudFByb2plY3RIMS5pbm5lckhUTUwgPSBjdXJyZW50UHJvamVjdFxyXG4vLyAgICAgICAgICAgICB9ZWxzZXtcclxuLy8gICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gJydcclxuLy8gICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleCA9IGlcclxuLy8gICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0SDEuaW5uZXJIVE1MID0gY3VycmVudFByb2plY3RcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICB0b2RvU2VsZWN0b3IgPSBwcm9qZWN0W2N1cnJlbnRJbmRleF0udG9kb3NcclxuLy8gICAgICAgICAgICAgLy9wb3B1bGF0ZVN0b3JhZ2UoKVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH0pXHJcbi8vIH1cclxuLy8gLy9cclxuXHJcbi8vIGZ1bmN0aW9uIHNlbGVjdFByb2plY3QoKXtcclxuLy8gICAgIGNvbnN0IHByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLXByb2plY3QnKVxyXG4vLyAgICAgcHJvamVjdEJ0bi5mb3JFYWNoKChwLGkpPT57XHJcbi8vICAgICAgICAgcC5vbm1vdXNldXAgPSAoKSA9PiB7XHJcbi8vICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdFtpXS50aXRsZVxyXG4vLyAgICAgICAgICAgICBjdXJyZW50SW5kZXggPSBpXHJcbi8vICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0SDEuaW5uZXJIVE1MID0gY3VycmVudFByb2plY3RcclxuLy8gICAgICAgICAgICAgdG9kb1NlbGVjdG9yID0gcHJvamVjdFtjdXJyZW50SW5kZXhdLnRvZG9zXHJcbi8vICAgICAgICAgICAgIGNsZWFyVGFza3MoKVxyXG4vLyAgICAgICAgICAgICB0YXNrRE9NKHRvZG9TZWxlY3RvcilcclxuLy8gICAgICAgICAgICAgYWRkTGlzdGVuZXJzKHRvZG9TZWxlY3RvcilcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9KVxyXG4vLyB9XHJcbi8vIC8vTGlzdGVuZXJzIHRvIG9wZW4gdGhlIHByb2plY3QgbWVudSBhbmQgYWRkIHByb2plY3RzXHJcbi8vIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdGl0bGUnKVxyXG4vLyBjb25zdCBvcGVuUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcGVuLXByb2plY3QnKVxyXG5cclxuLy8gb3BlblByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHByb2plY3RMaXN0ZW5lcilcclxuLy8gZnVuY3Rpb24gcHJvamVjdExpc3RlbmVyKCl7Y29uc29sZS5sb2coJ3BhdG9zIGZ1bmNpb25hbmRvJylcclxuLy8gICAgIGNvbnN0IHByb2plY3RJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtaW5mbycpXHJcbi8vICAgICBjb25zdCBjbG9zZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UtcHJvamVjdCcpXHJcbiAgICBcclxuLy8gICAgIGNvbnN0IGVkaXRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtcHJvamVjdCcpXHJcbi8vICAgICBlZGl0UHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4vLyAgICAgb3BlblByb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuLy8gICAgIHByb2plY3RJbmZvLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbi8vICAgICBjbG9zZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpPT4ge1xyXG4vLyAgICAgICAgIHByb2plY3RJbmZvLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbi8vICAgICAgICAgb3BlblByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuLy8gICAgIH0pXHJcbi8vICAgICBjb25zdCBhZGRfcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcHJvamVjdCcpXHJcbi8vICAgICBhZGRfcHJvamVjdC5vbm1vdXNldXAgPSAoKT0+e1xyXG4vLyAgICAgICAgIGlmKHBhdHRlcm5zLnRpdGxlLnRlc3QodGl0bGUudmFsdWUpID09PSB0cnVlKXtcclxuLy8gICAgICAgICAgICAgY3VycmVudFByb2plY3QgPSB0aXRsZS52YWx1ZVxyXG4vLyAgICAgICAgICAgICBjdXJyZW50UHJvamVjdEgxLmlubmVySFRNTCA9IGN1cnJlbnRQcm9qZWN0XHJcbi8vICAgICAgICAgICAgIGVkaXRQcm9qZWN0LnZhbHVlID0gY3VycmVudFByb2plY3RcclxuLy8gICAgICAgICAgICAgZWRpdFByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuLy8gICAgICAgICAgICAgcHJvamVjdEluZm8uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuLy8gICAgICAgICAgICAgb3BlblByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuLy8gICAgICAgICAgICAgYWRkUHJvamVjdChjdXJyZW50UHJvamVjdCwgW10pXHJcbi8vICAgICAgICAgICAgIGNsZWFyVGFza3MoKVxyXG4vLyAgICAgICAgICAgICB0YXNrRE9NKHRvZG9TZWxlY3RvcilcclxuLy8gICAgICAgICAgICAgYWRkTGlzdGVuZXJzKHRvZG9TZWxlY3RvcilcclxuLy8gICAgICAgICAgICAgcHJvamVjdERPTSgpXHJcbi8vICAgICAgICAgfSAgICBcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuXHJcbi8vIC8vXHJcbi8vIC8vXHJcbi8vIC8vIFRvZG9zXHJcbi8vIGxldCB0b2RvID0gW11cclxuLy8gbGV0IHJlbW92ZUJ0biA9IFtdXHJcbi8vIGxldCBkYXRlcyA9IFtdXHJcbi8vIGxldCBkYXRlc1RleHQgPSBbXVxyXG4vLyBsZXQgY2hlY2tib3ggPSBbXVxyXG4vLyBsZXQgZWRpdFRpdGxlcyA9IFtdXHJcblxyXG4vLyAvL0Rpc3BsYXkgdG9kb3Mgb24gc2NyZWVuIFxyXG4vLyBmdW5jdGlvbiB0YXNrRE9NKHR5cGUpe1xyXG4vLyAgICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1saXN0JylcclxuLy8gICAgIGZvcihsZXQgaT0wOyBpPHR5cGUubGVuZ3RoOyBpKyspIHsgIFxyXG4vLyAgICAgICAgIGlmKCF0b2RvW2ldKXsgICAgIFxyXG4vLyAgICAgICAgICAgICAvLyBDcmVhdGUgdGFzayBmaWVsZCAgICBcclxuLy8gICAgICAgICAgICAgdG9kb1tpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbi8vICAgICAgICAgICAgIHRvZG9baV0uaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9J2xlZnQnPlxyXG4vLyAgICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGNsYXNzPVwiY2hlY2tcIiBuYW1lPVwiY2hlY2tcIj5cclxuLy8gICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGNsYXNzPVwidGFzay1uYW1lXCI+XHJcbi8vICAgICAgICAgICAgIDxwIGNsYXNzPSdlZGl0LXRpdGxlcyBhY3RpdmUnPjwvcD48L2Rpdj5cclxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz0ncmlnaHQnPjxwIGNsYXNzPSdlZGl0LWRhdGVzIGFjdGl2ZSc+Tm8gRGF0ZTwvcD48aW5wdXQgdHlwZT1cImRhdGVcIiBjbGFzcz1cImRhdGVcIj5cclxuLy8gICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInJlbW92ZVwiPjxpIGNsYXNzPVwiZmFzIGZhLXRyYXNoLWFsdFwiPjwvaT48L2J1dHRvbj48L2Rpdj5gXHJcbi8vICAgICAgICAgICAgIHRvZG9baV0uc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrJylcclxuLy8gICAgICAgICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodG9kb1tpXSlcclxuLy8gICAgICAgICAgICAgLy8gQWRkIGZpZWxkIGVsZW1lbnRzIFxyXG4vLyAgICAgICAgICAgICByZW1vdmVCdG5baV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVtb3ZlJylbaV1cclxuLy8gICAgICAgICAgICAgZGF0ZXNbaV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZScpW2ldXHJcbi8vICAgICAgICAgICAgIGRhdGVzVGV4dFtpXSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0LWRhdGVzJylbaV1cclxuLy8gICAgICAgICAgICAgY2hlY2tib3hbaV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2snKVtpXSAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgICBlZGl0VGl0bGVzW2ldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQtdGl0bGVzJylbaV1cclxuLy8gICAgICAgICAgICAgY2hlY2tib3hbaV0uY2hlY2tlZCA9IHR5cGVbaV0uY2hlY2tlZFxyXG4vLyAgICAgICAgICAgICBlZGl0VGl0bGVzW2ldLmlubmVyVGV4dCA9IHR5cGVbaV0udGl0bGUgIFxyXG4vLyAgICAgICAgICAgICBpZih0eXBlW2ldLmRhdGUgIT09ICcnKXtkYXRlc1RleHRbaV0uaW5uZXJUZXh0ID0gdHlwZVtpXS5kYXRlfSBcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICBhZGRDaGFuZ2VzKHR5cGUpXHJcblxyXG4vLyB9XHJcbi8vIC8vQWRkIGNoYW5nZXMgdG8gaW5wdXQsIGRhdGUsIGNoZWNrYm94ZXNcclxuLy8gZnVuY3Rpb24gYWRkQ2hhbmdlcyh0eXBlKXtcclxuLy8gICAgIHJlbW92ZURPTSh0eXBlKVxyXG4vLyAgICAgY2hhbmdlQ2hlY2sodHlwZSlcclxuLy8gICAgIGNoYW5nZURhdGUodHlwZSlcclxuLy8gICAgIGVkaXRUYXNrKHR5cGUpXHJcbi8vIH1cclxuLy8gLy9BbGxvd3MgY2hhbmdlIHRoZSB0aXRsZSBvZiB0aGUgdGFza1xyXG4vLyBmdW5jdGlvbiBlZGl0VGFzayh0eXBlKXtcclxuLy8gICAgIGxldCBlZGl0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1uYW1lJylcclxuLy8gICAgIGVkaXRUaXRsZXMuZm9yRWFjaCgoZVRpdGxlcyxpKT0+e1xyXG4vLyAgICAgICAgIGVUaXRsZXMub25tb3VzZXVwID0gKCk9PntcclxuLy8gICAgICAgICAgICAgZVRpdGxlcy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4vLyAgICAgICAgICAgICBlZGl0SW5wdXRbaV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuLy8gICAgICAgICAgICAgcG9wdWxhdGVTdG9yYWdlKClcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9KVxyXG4vLyAgICAgZWRpdElucHV0LmZvckVhY2goKGlucHV0LGkpPT57XHJcbi8vICAgICAgICAgaW5wdXQudmFsdWUgPSBlZGl0VGl0bGVzW2ldLmlubmVySFRNTFxyXG4vLyAgICAgICAgIGlucHV0Lm9ua2V5dXAgPSBmdW5jdGlvbiAoZXZlbnQpe1xyXG4vLyAgICAgICAgICAgICBpZihldmVudC5rZXkgPT09ICdFbnRlcicpe1xyXG4vLyAgICAgICAgICAgICAgICAgZWRpdFRpdGxlc1tpXS5pbm5lckhUTUwgPSBpbnB1dC52YWx1ZVxyXG4vLyAgICAgICAgICAgICAgICAgdHlwZVtpXS50aXRsZSA9IGlucHV0LnZhbHVlXHJcbi8vICAgICAgICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4vLyAgICAgICAgICAgICAgICAgZWRpdFRpdGxlc1tpXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4vLyAgICAgICAgICAgICAgICAgcG9wdWxhdGVTdG9yYWdlKClcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH0pXHJcbi8vIH1cclxuLy8gLy9DaGFuZ2UgdGhlIHN0YXR1cyBvZiB0aGUgZGF0ZSBpbnB1dHNcclxuLy8gZnVuY3Rpb24gY2hhbmdlRGF0ZSh0eXBlKXtcclxuLy8gICAgIGRhdGVzVGV4dC5mb3JFYWNoKChwLGkpPT4ge1xyXG4vLyAgICAgICAgIHAub25tb3VzZXVwID0gKCk9PntcclxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ3Bhc3NlaSBvIG1vc3VlJylcclxuLy8gICAgICAgICAgICAgcC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4vLyAgICAgICAgICAgICBkYXRlc1tpXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH0pXHJcbi8vICAgICBkYXRlcy5mb3JFYWNoKChpbnB1dCwgaSkgPT4ge1xyXG4vLyAgICAgICAgIGlucHV0Lm9uY2hhbmdlID0gKCkgPT4ge2NvbnNvbGUubG9nKGlucHV0LnZhbHVlKVxyXG4vLyAgICAgICAgICAgICB0eXBlW2ldLmRhdGUgPSBpbnB1dC52YWx1ZVxyXG4vLyAgICAgICAgICAgICBkYXRlc1RleHRbaV0uaW5uZXJUZXh0ID0gaW5wdXQudmFsdWVcclxuLy8gICAgICAgICAgICAgZGF0ZXNUZXh0W2ldLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbi8vICAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbi8vICAgICAgICAgICAgIHBvcHVsYXRlU3RvcmFnZSgpXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfSlcclxuLy8gfVxyXG5cclxuLy8gLy9SZW1vdmVzIGFuIGVsZW1lbnQgZnJvbSB0aGUgdGFzayBhcnJheSBhbmQgRE9NIFxyXG4vLyBmdW5jdGlvbiByZW1vdmVET00odHlwZSl7ICBcclxuLy8gICAgIHJlbW92ZUJ0bi5mb3JFYWNoKChidG4sIGkpID0+IHtcclxuLy8gICAgICAgICBidG4ub25tb3VzZXVwID0gKCk9PntcclxuLy8gICAgICAgICAgICAgYnRuLnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmUoKVxyXG4vLyAgICAgICAgICAgICByZW1vdmVUb2RvKGksIHR5cGUpIFxyXG4vLyAgICAgICAgICAgICB0b2RvLnNwbGljZShpLDEpXHJcbi8vICAgICAgICAgICAgIHJlbW92ZUJ0bi5zcGxpY2UoaSwxKVxyXG4vLyAgICAgICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoKVxyXG4vLyAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbi8vICAgICB9KTtcclxuLy8gfVxyXG4vLyAvL0NoYW5nZXMgdGhlIHN0YXR1cyBvZiB0aGUgY2hlY2tib3hlc1xyXG4vLyBmdW5jdGlvbiBjaGFuZ2VDaGVjayh0eXBlKXtcclxuLy8gICAgIGNoZWNrYm94LmZvckVhY2goKGNoZWNrLGkpPT4ge1xyXG4vLyAgICAgICAgIGNoZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+e1xyXG4vLyAgICAgICAgICAgICB0eXBlW2ldLmNoZWNrZWQgPSBjaGVjay5jaGVja2VkXHJcbi8vICAgICAgICAgICAgIHBvcHVsYXRlU3RvcmFnZSgpXHJcbi8vICAgICAgICAgfSlcclxuLy8gICAgIH0pXHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IGJ0bk9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3Blbi1tZW51JylcclxuLy8gYnRuT3Blbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCk9PiB7XHJcbi8vICAgICBjb25zdCB0YXNrRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1maWVsZCcpXHJcbi8vICAgICB0YXNrRmllbGQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuLy8gICAgIGNvbnN0IGJ0bkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLWJ0bicpXHJcbi8vICAgICBidG5DbG9zZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCk9PntcclxuLy8gICAgICAgICB0YXNrRmllbGQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuLy8gICAgIH0pXHJcbi8vICAgICBjb25zb2xlLmxvZyh0b2RvU2VsZWN0b3IpXHJcbi8vICAgICBhZGRMaXN0ZW5lcnModG9kb1NlbGVjdG9yKVxyXG4vLyB9KVxyXG4vLyAvL0FkZCBsaXN0ZW5lciBmb3Igb3BlbiBhbmQgY2xvc2UgdGhlIHRpdGxlIG1lbnUgXHJcbi8vIGZ1bmN0aW9uIGFkZExpc3RlbmVycyhzZWxlY3Rvcil7XHJcbi8vICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXRpdGxlJykudmFsdWUgXHJcbi8vICAgICBjb25zdCB0YXNrRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1maWVsZCcpXHJcbi8vICAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrJylcclxuICAgICAgXHJcbi8vICAgICBhZGRUYXNrLm9ubW91c2V1cCA9ICgpPT57XHJcbi8vICAgICAgICAgaWYocGF0dGVybnMudGl0bGUudGVzdCh0aXRsZS52YWx1ZSk9PT0gdHJ1ZSl7Y29uc29sZS5sb2coJ3RvZG8gYWRkZWQnKVxyXG4vLyAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXRpdGxlJykudmFsdWVcclxuLy8gICAgICAgICAgICAgYWRkVG9kbyhzZWxlY3RvciAsIHRpdGxlLCAnJywgZmFsc2UsIGN1cnJlbnRQcm9qZWN0KVxyXG4vLyAgICAgICAgICAgICB0YXNrRE9NKHNlbGVjdG9yKVxyXG4vLyAgICAgICAgICAgICB0YXNrRmllbGQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH0gXHJcbi8vIGZ1bmN0aW9uIGNsZWFyVGFza3MoKXtcclxuLy8gICAgIHRvZG8gPSBbXVxyXG4vLyAgICAgcmVtb3ZlQnRuID0gW11cclxuLy8gICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbGlzdCcpXHJcbi8vICAgICB3aGlsZSAodGFza0xpc3QuY2hpbGRFbGVtZW50Q291bnQ+MCl7XHJcbi8vICAgICAgICAgdGFza0xpc3QuZmlyc3RDaGlsZC5yZW1vdmUoKVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyAvL1xyXG4vLyAvL1xyXG4vLyAvLyBMb2NhbCBTdG9yYWdlXHJcbi8vIFN0b3JhZ2UucHJvdG90eXBlLnNldE9iaiA9IGZ1bmN0aW9uKGtleSwgb2JqKXtcclxuLy8gICAgIHJldHVybiB0aGlzLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShvYmopKVxyXG4vLyB9XHJcbi8vIFN0b3JhZ2UucHJvdG90eXBlLmdldE9iaiA9IGZ1bmN0aW9uKGtleSl7XHJcbi8vICAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLmdldEl0ZW0oa2V5KSlcclxuLy8gfVxyXG4vLyAvL0xvY2FsIHN0b3JhZ2UgdmVyaWZ5XHJcbi8vICBmdW5jdGlvbiBwb3B1bGF0ZVN0b3JhZ2UoKSB7Y29uc29sZS5sb2cobG9jYWxTdG9yYWdlKVxyXG4vLyAgICAgaWYoIWxvY2FsU3RvcmFnZS5nZXRPYmooJ3Byb2plY3QnKSAmJiAhbG9jYWxTdG9yYWdlLmdldE9iaignaG9tZScpKXtcclxuLy8gICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0T2JqKCdob21lJywgaG9tZSk7XHJcbi8vICAgICAgICAgbG9jYWxTdG9yYWdlLnNldE9iaigncHJvamVjdCcsIHByb2plY3QpO1xyXG4vLyAgICAgICAgIHZhciBjdXJyZW50SG9tZSA9IGxvY2FsU3RvcmFnZS5nZXRPYmooJ2hvbWUnKTtcclxuLy8gICAgICAgICB2YXIgY3VycmVudFByb2plY3RPYmogPSBsb2NhbFN0b3JhZ2UuZ2V0T2JqKCdwcm9qZWN0Jyk7XHJcbi8vICAgICAgICAgcHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0T2JqO1xyXG4vLyAgICAgICAgIGhvbWUgPSBjdXJyZW50SG9tZVxyXG4vLyAgICAgfWVsc2Uge1xyXG4vLyAgICAgICAgIHZhciBjdXJyZW50SG9tZSA9IGxvY2FsU3RvcmFnZS5nZXRPYmooJ2hvbWUnKTtcclxuLy8gICAgICAgICB2YXIgY3VycmVudFByb2plY3RPYmogPSBsb2NhbFN0b3JhZ2UuZ2V0T2JqKCdwcm9qZWN0Jyk7XHJcbi8vICAgICAgICAgcHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0T2JqO1xyXG4vLyAgICAgICAgIGhvbWUgPSBjdXJyZW50SG9tZVxyXG4vLyAgICAgICAgIGlmKHByb2plY3QubGVuZ3RoPjApe1xyXG4vLyAgICAgICAgICAgICBwcm9qZWN0RE9NKClcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgaWYoaG9tZS5sZW5ndGg+MCl7XHJcbi8vICAgICAgICAgICAgIHRhc2tET00oaG9tZSlcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy8gcG9wdWxhdGVTdG9yYWdlKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=