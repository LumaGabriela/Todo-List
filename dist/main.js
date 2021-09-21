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
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Projects */ "./src/modules/Projects.js");


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
    todoSelector = _Task__WEBPACK_IMPORTED_MODULE_1__.project[currentIndex].todos
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
    console.log(_Task__WEBPACK_IMPORTED_MODULE_1__.project)
}
//
const btnOpen = document.querySelector('#open-menu')
btnOpen.addEventListener('mouseup', ()=> {
    ;(0,_Todos__WEBPACK_IMPORTED_MODULE_0__.addListeners)(todoSelector)
})
let todoSelector 
const homeBtn = document.querySelector('#home-btn')
homeBtn.addEventListener('mouseup', ()=> {
    todoSelector = _Task__WEBPACK_IMPORTED_MODULE_1__.home
    currentProject = 'Home'
    currentProjectH1.innerText = currentProject
    ;(0,_Todos__WEBPACK_IMPORTED_MODULE_0__.addListeners)(todoSelector)
    ;(0,_Todos__WEBPACK_IMPORTED_MODULE_0__.clearTasks)()
    ;(0,_Todos__WEBPACK_IMPORTED_MODULE_0__.taskDOM)(todoSelector)
    showTasks()
})
//
const todayBtn = document.querySelector('#today-btn')
todayBtn.addEventListener('mouseup', ()=> {
    todoSelector = _Task__WEBPACK_IMPORTED_MODULE_1__.today
    currentProject = 'Today'
    currentProjectH1.innerText = currentProject
    ;(0,_Todos__WEBPACK_IMPORTED_MODULE_0__.addListeners)(todoSelector)
    ;(0,_Todos__WEBPACK_IMPORTED_MODULE_0__.clearTasks)()
    ;(0,_Todos__WEBPACK_IMPORTED_MODULE_0__.taskDOM)(todoSelector)
    showTasks()
})
const weekBtn = document.querySelector('#week-btn')
weekBtn.addEventListener('mouseup', ()=> {
    todoSelector = _Task__WEBPACK_IMPORTED_MODULE_1__.today
    currentProject = 'This Week'
    currentProjectH1.innerText = currentProject
    ;(0,_Todos__WEBPACK_IMPORTED_MODULE_0__.addListeners)(todoSelector)
    ;(0,_Todos__WEBPACK_IMPORTED_MODULE_0__.clearTasks)()
    ;(0,_Todos__WEBPACK_IMPORTED_MODULE_0__.taskDOM)(todoSelector)
    showTasks()
})
//Show task menu
function showTasks(){
    const taskField = document.querySelector('#task-field')
    if(_Task__WEBPACK_IMPORTED_MODULE_1__.project.length > 0 || todoSelector == _Task__WEBPACK_IMPORTED_MODULE_1__.home){
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
            ;(0,_Task__WEBPACK_IMPORTED_MODULE_1__.removeProject)(i, todoSelector)
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
            todoSelector = _Task__WEBPACK_IMPORTED_MODULE_1__.project[currentIndex].todos
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
            todoSelector = _Task__WEBPACK_IMPORTED_MODULE_1__.project[currentIndex].todos
            ;(0,_Todos__WEBPACK_IMPORTED_MODULE_0__.clearTasks)()
            ;(0,_Todos__WEBPACK_IMPORTED_MODULE_0__.taskDOM)(todoSelector)
            ;(0,_Todos__WEBPACK_IMPORTED_MODULE_0__.addListeners)(todoSelector)
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
            ;(0,_Todos__WEBPACK_IMPORTED_MODULE_0__.taskDOM)(todoSelector)
            ;(0,_Todos__WEBPACK_IMPORTED_MODULE_0__.addListeners)(todoSelector)
            projectDOM()
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
/* harmony export */   "removeProject": () => (/* binding */ removeProject)
/* harmony export */ });
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects */ "./src/modules/Projects.js");


function createTask(title, date, checked, project){
    return{title, date, checked, project}
}
let project = []
let home = []
let today = []
let thisWeek = []

function addTodo( type,title,date,check, proj){
    type.push(createTask(title, date, check, proj))
}

function removeTodo(i, type){
    type.splice(i,1)
}
function createProject(title, todos){
    return {title, todos}
}
function addProject(title, todos){
    project.push(createProject(title, todos))

}
function removeProject(i){
    project.splice(i,1)
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
let todo = []
let removeBtn = []
let dates = []
let datesText = []
let checkbox = []
let editTitles = []

//Display todos on screen
function taskDOM(type){console.log(_Projects__WEBPACK_IMPORTED_MODULE_1__.currentProject)
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
    }console.log(_Projects__WEBPACK_IMPORTED_MODULE_1__.todoSelector)
    addChanges(type)
}
//
// export let todoSelector 
// const homeBtn = document.querySelector('#home-btn')
// homeBtn.addEventListener('mouseup', ()=> {console.log('homee')
//     todoSelector = home
//     currentProject = 'pato'
//     addListeners(todoSelector)
//     showTasks()
// })
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
    addListeners(_Projects__WEBPACK_IMPORTED_MODULE_1__.todoSelector)
})
//Add listener for open and close the title menu
function addListeners(selector){
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
/* harmony import */ var _modules_Todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Todos */ "./src/modules/Todos.js");
/* harmony import */ var _modules_Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Task */ "./src/modules/Task.js");
/* harmony import */ var _modules_Projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Projects */ "./src/modules/Projects.js");



const menu = document.querySelector('#menu')

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOdUM7QUFDRDtBQUMyQjtBQUNqRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvVG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRhc2tET00gLCBjbGVhclRhc2tzLCBhZGRMaXN0ZW5lcnN9IGZyb20gXCIuL1RvZG9zXCI7XHJcbmltcG9ydCB7IHByb2plY3QsIGFkZFByb2plY3QsIHJlbW92ZVByb2plY3QsIGhvbWUgLCB0b2RheSwgdGhpc1dlZWsgfSBmcm9tICcuL1Rhc2snXHJcbi8vQWRkIHByb2plY3QgbGlzdHNcclxuY29uc3QgY3VycmVudFByb2plY3RIMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LXByb2plY3QnKVxyXG5leHBvcnQgbGV0IGN1cnJlbnRQcm9qZWN0ID0gJydcclxuZXhwb3J0IGxldCBjdXJyZW50SW5kZXggPSAwXHJcbmNvbnN0IHJlbVByb2plY3QgPSBbXSBcclxubGV0IHByb2plY3RzID0gW11cclxuZXhwb3J0IGxldCBwYXR0ZXJucyA9IHtcclxuICAgIHRpdGxlOiAvXi57MSwyMH0kLyxcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdERPTSgpe2NvbnNvbGUubG9nKCdwcm9qZWN0RE9NJylcclxuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0SDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC1wcm9qZWN0JylcclxuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHMnKVxyXG4gICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWRpdicpXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXRpdGxlJylcclxuICAgIGN1cnJlbnRQcm9qZWN0SDEuaW5uZXJUZXh0ID0gY3VycmVudFByb2plY3RcclxuICAgIHRvZG9TZWxlY3RvciA9IHByb2plY3RbY3VycmVudEluZGV4XS50b2Rvc1xyXG4gICAgc2hvd1Rhc2tzKClcclxuICAgIGZvcihsZXQgaT0wOyBpPHByb2plY3QubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGlmKCFwcm9qZWN0c1tpXSl7XHJcbiAgICAgICAgLy91cGRhdGUgY3VycmVudCBwcm9qZWN0XHJcbiAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0W2ldLnRpdGxlXHJcbiAgICAgICAgY3VycmVudEluZGV4ID0gaVxyXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0SDEuaW5uZXJIVE1MID0gY3VycmVudFByb2plY3RcclxuICAgICAgICBjbGVhclRhc2tzKClcclxuICAgICAgICB0YXNrRE9NKHByb2plY3RbY3VycmVudEluZGV4XS50b2RvcylcclxuICAgICAgICAvL2NyZWF0ZSBlbGVtZW50c1xyXG4gICAgICAgIHByb2plY3RzW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBwcm9qZWN0c1tpXS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3RzJylcclxuICAgICAgICBwcm9qZWN0c1tpXS5pbm5lckhUTUwgPSBgPGJ1dHRvbiBjbGFzcz1cImJ0bi1wcm9qZWN0XCI+JHt0aXRsZS52YWx1ZX08L2J1dHRvbj48YnV0dG9uIGNsYXNzPVwicmVtb3ZlLXByb2plY3RcIj48aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT48L2J1dHRvbj5gXHJcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5pbnNlcnRCZWZvcmUocHJvamVjdHNbaV0sIHByb2plY3REaXYpXHJcbiAgICAgICAgcmVtUHJvamVjdFtpXSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmUtcHJvamVjdCcpW2ldXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGVsZXRlUHJvamVjdCgpXHJcbiAgICBzZWxlY3RQcm9qZWN0KClcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3QpXHJcbn1cclxuLy9cclxuY29uc3QgYnRuT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcGVuLW1lbnUnKVxyXG5idG5PcGVuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKT0+IHtcclxuICAgIGFkZExpc3RlbmVycyh0b2RvU2VsZWN0b3IpXHJcbn0pXHJcbmV4cG9ydCBsZXQgdG9kb1NlbGVjdG9yIFxyXG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUtYnRuJylcclxuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCk9PiB7XHJcbiAgICB0b2RvU2VsZWN0b3IgPSBob21lXHJcbiAgICBjdXJyZW50UHJvamVjdCA9ICdIb21lJ1xyXG4gICAgY3VycmVudFByb2plY3RIMS5pbm5lclRleHQgPSBjdXJyZW50UHJvamVjdFxyXG4gICAgYWRkTGlzdGVuZXJzKHRvZG9TZWxlY3RvcilcclxuICAgIGNsZWFyVGFza3MoKVxyXG4gICAgdGFza0RPTSh0b2RvU2VsZWN0b3IpXHJcbiAgICBzaG93VGFza3MoKVxyXG59KVxyXG4vL1xyXG5jb25zdCB0b2RheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheS1idG4nKVxyXG50b2RheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCk9PiB7XHJcbiAgICB0b2RvU2VsZWN0b3IgPSB0b2RheVxyXG4gICAgY3VycmVudFByb2plY3QgPSAnVG9kYXknXHJcbiAgICBjdXJyZW50UHJvamVjdEgxLmlubmVyVGV4dCA9IGN1cnJlbnRQcm9qZWN0XHJcbiAgICBhZGRMaXN0ZW5lcnModG9kb1NlbGVjdG9yKVxyXG4gICAgY2xlYXJUYXNrcygpXHJcbiAgICB0YXNrRE9NKHRvZG9TZWxlY3RvcilcclxuICAgIHNob3dUYXNrcygpXHJcbn0pXHJcbmNvbnN0IHdlZWtCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2Vlay1idG4nKVxyXG53ZWVrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKT0+IHtcclxuICAgIHRvZG9TZWxlY3RvciA9IHRvZGF5XHJcbiAgICBjdXJyZW50UHJvamVjdCA9ICdUaGlzIFdlZWsnXHJcbiAgICBjdXJyZW50UHJvamVjdEgxLmlubmVyVGV4dCA9IGN1cnJlbnRQcm9qZWN0XHJcbiAgICBhZGRMaXN0ZW5lcnModG9kb1NlbGVjdG9yKVxyXG4gICAgY2xlYXJUYXNrcygpXHJcbiAgICB0YXNrRE9NKHRvZG9TZWxlY3RvcilcclxuICAgIHNob3dUYXNrcygpXHJcbn0pXHJcbi8vU2hvdyB0YXNrIG1lbnVcclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dUYXNrcygpe1xyXG4gICAgY29uc3QgdGFza0ZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZmllbGQnKVxyXG4gICAgaWYocHJvamVjdC5sZW5ndGggPiAwIHx8IHRvZG9TZWxlY3RvciA9PSBob21lKXtcclxuICAgICAgICB0YXNrRmllbGQuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJylcclxuICAgIH1lbHNlIHtcclxuICAgICAgICB0YXNrRmllbGQuY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJylcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KCl7XHJcbiAgICByZW1Qcm9qZWN0LmZvckVhY2goKGJ0bixpKT0+e1xyXG4gICAgICAgIGJ0bi5vbm1vdXNldXAgPSAoKT0+IHtcclxuICAgICAgICAgICAgYnRuLnBhcmVudE5vZGUucmVtb3ZlKClcclxuICAgICAgICAgICAgcmVtUHJvamVjdC5zcGxpY2UoaSwxKVxyXG4gICAgICAgICAgICByZW1vdmVQcm9qZWN0KGksIHRvZG9TZWxlY3RvcilcclxuICAgICAgICAgICAgcHJvamVjdHMuc3BsaWNlKGksMSlcclxuICAgICAgICAgICAgc2hvd1Rhc2tzKClcclxuICAgICAgICAgICAgaWYoaSAhPT0gMCApe1xyXG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RbaSAtIDFdLnRpdGxlXHJcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleCA9IGkgLSAxIFxyXG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdEgxLmlubmVySFRNTCA9IGN1cnJlbnRQcm9qZWN0XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFByb2plY3QgPSAnJ1xyXG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4ID0gaVxyXG4gICAgICAgICAgICAgICAgY3VycmVudFByb2plY3RIMS5pbm5lckhUTUwgPSBjdXJyZW50UHJvamVjdFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRvZG9TZWxlY3RvciA9IHByb2plY3RbY3VycmVudEluZGV4XS50b2Rvc1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuLy9cclxuXHJcbmZ1bmN0aW9uIHNlbGVjdFByb2plY3QoKXtcclxuICAgIGNvbnN0IHByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLXByb2plY3QnKVxyXG4gICAgcHJvamVjdEJ0bi5mb3JFYWNoKChwLGkpPT57XHJcbiAgICAgICAgcC5vbm1vdXNldXAgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdFtpXS50aXRsZVxyXG4gICAgICAgICAgICBjdXJyZW50SW5kZXggPSBpXHJcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0SDEuaW5uZXJIVE1MID0gY3VycmVudFByb2plY3RcclxuICAgICAgICAgICAgdG9kb1NlbGVjdG9yID0gcHJvamVjdFtjdXJyZW50SW5kZXhdLnRvZG9zXHJcbiAgICAgICAgICAgIGNsZWFyVGFza3MoKVxyXG4gICAgICAgICAgICB0YXNrRE9NKHRvZG9TZWxlY3RvcilcclxuICAgICAgICAgICAgYWRkTGlzdGVuZXJzKHRvZG9TZWxlY3RvcilcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcbi8vTGlzdGVuZXJzIHRvIG9wZW4gdGhlIHByb2plY3QgbWVudSBhbmQgYWRkIHByb2plY3RzXHJcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdGl0bGUnKVxyXG5jb25zdCBvcGVuUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcGVuLXByb2plY3QnKVxyXG5cclxub3BlblByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHByb2plY3RMaXN0ZW5lcilcclxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RMaXN0ZW5lcigpe2NvbnNvbGUubG9nKCdwYXRvcyBmdW5jaW9uYW5kbycpXHJcbiAgICBjb25zdCBwcm9qZWN0SW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWluZm8nKVxyXG4gICAgY29uc3QgY2xvc2VQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLXByb2plY3QnKVxyXG4gICAgXHJcbiAgICBjb25zdCBlZGl0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXByb2plY3QnKVxyXG4gICAgZWRpdFByb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgIG9wZW5Qcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICBwcm9qZWN0SW5mby5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgY2xvc2VQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKT0+IHtcclxuICAgICAgICBwcm9qZWN0SW5mby5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgIG9wZW5Qcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICB9KVxyXG4gICAgY29uc3QgYWRkX3Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QnKVxyXG4gICAgYWRkX3Byb2plY3Qub25tb3VzZXVwID0gKCk9PntcclxuICAgICAgICBpZihwYXR0ZXJucy50aXRsZS50ZXN0KHRpdGxlLnZhbHVlKSA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gdGl0bGUudmFsdWVcclxuICAgICAgICAgICAgY3VycmVudFByb2plY3RIMS5pbm5lckhUTUwgPSBjdXJyZW50UHJvamVjdFxyXG4gICAgICAgICAgICBlZGl0UHJvamVjdC52YWx1ZSA9IGN1cnJlbnRQcm9qZWN0XHJcbiAgICAgICAgICAgIGVkaXRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgIHByb2plY3RJbmZvLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgIG9wZW5Qcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgIGFkZFByb2plY3QoY3VycmVudFByb2plY3QsIFtdKVxyXG4gICAgICAgICAgICBjbGVhclRhc2tzKClcclxuICAgICAgICAgICAgdGFza0RPTSh0b2RvU2VsZWN0b3IpXHJcbiAgICAgICAgICAgIGFkZExpc3RlbmVycyh0b2RvU2VsZWN0b3IpXHJcbiAgICAgICAgICAgIHByb2plY3RET00oKVxyXG4gICAgICAgIH0gICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vUHJvamVjdHMnIiwiaW1wb3J0IHsgY3VycmVudEluZGV4LCBjdXJyZW50UHJvamVjdCB9IGZyb20gXCIuL1Byb2plY3RzXCJcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUsIGRhdGUsIGNoZWNrZWQsIHByb2plY3Qpe1xyXG4gICAgcmV0dXJue3RpdGxlLCBkYXRlLCBjaGVja2VkLCBwcm9qZWN0fVxyXG59XHJcbmV4cG9ydCBsZXQgcHJvamVjdCA9IFtdXHJcbmV4cG9ydCBsZXQgaG9tZSA9IFtdXHJcbmV4cG9ydCBsZXQgdG9kYXkgPSBbXVxyXG5leHBvcnQgbGV0IHRoaXNXZWVrID0gW11cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRUb2RvKCB0eXBlLHRpdGxlLGRhdGUsY2hlY2ssIHByb2ope1xyXG4gICAgdHlwZS5wdXNoKGNyZWF0ZVRhc2sodGl0bGUsIGRhdGUsIGNoZWNrLCBwcm9qKSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRvZG8oaSwgdHlwZSl7XHJcbiAgICB0eXBlLnNwbGljZShpLDEpXHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSwgdG9kb3Mpe1xyXG4gICAgcmV0dXJuIHt0aXRsZSwgdG9kb3N9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3QodGl0bGUsIHRvZG9zKXtcclxuICAgIHByb2plY3QucHVzaChjcmVhdGVQcm9qZWN0KHRpdGxlLCB0b2RvcykpXHJcblxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KGkpe1xyXG4gICAgcHJvamVjdC5zcGxpY2UoaSwxKVxyXG59XHJcbiIsImltcG9ydCB7Y29tcGFyZUFzYywgZm9ybWF0LCBmb3JtYXREaXN0YW5jZSB9IGZyb20gJ2RhdGUtZm5zJ1xyXG5pbXBvcnQge3JlbW92ZVRvZG8sIGFkZFRvZG8sIHRhc2ssIHByb2plY3QsIGhvbWUgIH0gZnJvbSAnLi9UYXNrJ1xyXG5pbXBvcnQge2N1cnJlbnRJbmRleCwgY3VycmVudFByb2plY3QsIHBhdHRlcm5zLCBzaG93VGFza3MsIHRvZG9TZWxlY3Rvcn0gZnJvbSAnLi9Qcm9qZWN0cydcclxuLy9cclxubGV0IHRvZG8gPSBbXVxyXG5sZXQgcmVtb3ZlQnRuID0gW11cclxubGV0IGRhdGVzID0gW11cclxubGV0IGRhdGVzVGV4dCA9IFtdXHJcbmxldCBjaGVja2JveCA9IFtdXHJcbmxldCBlZGl0VGl0bGVzID0gW11cclxuXHJcbi8vRGlzcGxheSB0b2RvcyBvbiBzY3JlZW5cclxuZXhwb3J0IGZ1bmN0aW9uIHRhc2tET00odHlwZSl7Y29uc29sZS5sb2coY3VycmVudFByb2plY3QpXHJcbiAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWxpc3QnKVxyXG4gICAgZm9yKGxldCBpPTA7IGk8dHlwZS5sZW5ndGg7IGkrKykgeyAgXHJcbiAgICAgICAgaWYoIXRvZG9baV0peyAgICAgXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSB0YXNrIGZpZWxkICAgIFxyXG4gICAgICAgICAgICB0b2RvW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgdG9kb1tpXS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz0nbGVmdCc+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgY2xhc3M9XCJjaGVja1wiIG5hbWU9XCJjaGVja1wiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgY2xhc3M9XCJ0YXNrLW5hbWVcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9J2VkaXQtdGl0bGVzIGFjdGl2ZSc+PC9wPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdyaWdodCc+PHAgY2xhc3M9J2VkaXQtZGF0ZXMgYWN0aXZlJz5ObyBEYXRlPC9wPjxpbnB1dCB0eXBlPVwiZGF0ZVwiIGNsYXNzPVwiZGF0ZVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicmVtb3ZlXCI+PGkgY2xhc3M9XCJmYXMgZmEtdHJhc2gtYWx0XCI+PC9pPjwvYnV0dG9uPjwvZGl2PmBcclxuICAgICAgICAgICAgdG9kb1tpXS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2snKVxyXG4gICAgICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0b2RvW2ldKVxyXG4gICAgICAgICAgICAvLyBBZGQgZmllbGQgZWxlbWVudHMgXHJcbiAgICAgICAgICAgIHJlbW92ZUJ0bltpXSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmUnKVtpXVxyXG4gICAgICAgICAgICBkYXRlc1tpXSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRlJylbaV1cclxuICAgICAgICAgICAgZGF0ZXNUZXh0W2ldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQtZGF0ZXMnKVtpXVxyXG4gICAgICAgICAgICBjaGVja2JveFtpXSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVjaycpW2ldICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGVkaXRUaXRsZXNbaV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdC10aXRsZXMnKVtpXVxyXG4gICAgICAgICAgICBjaGVja2JveFtpXS5jaGVja2VkID0gdHlwZVtpXS5jaGVja2VkXHJcbiAgICAgICAgICAgIGVkaXRUaXRsZXNbaV0uaW5uZXJUZXh0ID0gdHlwZVtpXS50aXRsZSAgXHJcbiAgICAgICAgICAgIGlmKHR5cGVbaV0uZGF0ZSAhPT0gJycpe2RhdGVzVGV4dFtpXS5pbm5lclRleHQgPSB0eXBlW2ldLmRhdGV9IFxyXG4gICAgICAgIH1cclxuICAgIH1jb25zb2xlLmxvZyh0b2RvU2VsZWN0b3IpXHJcbiAgICBhZGRDaGFuZ2VzKHR5cGUpXHJcbn1cclxuLy9cclxuLy8gZXhwb3J0IGxldCB0b2RvU2VsZWN0b3IgXHJcbi8vIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZS1idG4nKVxyXG4vLyBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKT0+IHtjb25zb2xlLmxvZygnaG9tZWUnKVxyXG4vLyAgICAgdG9kb1NlbGVjdG9yID0gaG9tZVxyXG4vLyAgICAgY3VycmVudFByb2plY3QgPSAncGF0bydcclxuLy8gICAgIGFkZExpc3RlbmVycyh0b2RvU2VsZWN0b3IpXHJcbi8vICAgICBzaG93VGFza3MoKVxyXG4vLyB9KVxyXG4vL0FkZCBjaGFuZ2VzIHRvIGlucHV0LCBkYXRlLCBjaGVja2JveGVzXHJcbmZ1bmN0aW9uIGFkZENoYW5nZXModHlwZSl7XHJcbiAgICByZW1vdmVET00odHlwZSlcclxuICAgIGNoYW5nZUNoZWNrKHR5cGUpXHJcbiAgICBjaGFuZ2VEYXRlKHR5cGUpXHJcbiAgICBlZGl0VGFzayh0eXBlKVxyXG59XHJcbi8vQWxsb3dzIGNoYW5nZSB0aGUgdGl0bGUgb2YgdGhlIHRhc2tcclxuZnVuY3Rpb24gZWRpdFRhc2sodHlwZSl7XHJcbiAgICBsZXQgZWRpdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stbmFtZScpXHJcbiAgICBlZGl0VGl0bGVzLmZvckVhY2goKGVUaXRsZXMsaSk9PntcclxuICAgICAgICBlVGl0bGVzLm9ubW91c2V1cCA9ICgpPT57XHJcbiAgICAgICAgICAgIGVUaXRsZXMuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICAgICAgICAgZWRpdElucHV0W2ldLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIGVkaXRJbnB1dC5mb3JFYWNoKChpbnB1dCxpKT0+e1xyXG4gICAgICAgIGlucHV0LnZhbHVlID0gZWRpdFRpdGxlc1tpXS5pbm5lckhUTUxcclxuICAgICAgICBpbnB1dC5vbmtleXVwID0gZnVuY3Rpb24gKGV2ZW50KXtcclxuICAgICAgICAgICAgaWYoZXZlbnQua2V5ID09PSAnRW50ZXInKXtcclxuICAgICAgICAgICAgICAgIGVkaXRUaXRsZXNbaV0uaW5uZXJIVE1MID0gaW5wdXQudmFsdWVcclxuICAgICAgICAgICAgICAgIHR5cGVbaV0udGl0bGUgPSBpbnB1dC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICAgICAgICAgICAgIGVkaXRUaXRsZXNbaV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuLy9DaGFuZ2UgdGhlIHN0YXR1cyBvZiB0aGUgZGF0ZSBpbnB1dHNcclxuZnVuY3Rpb24gY2hhbmdlRGF0ZSh0eXBlKXtcclxuICAgIGRhdGVzVGV4dC5mb3JFYWNoKChwLGkpPT4ge1xyXG4gICAgICAgIHAub25tb3VzZXVwID0gKCk9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Bhc3NlaSBvIG1vc3VlJylcclxuICAgICAgICAgICAgcC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICBkYXRlc1tpXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBkYXRlcy5mb3JFYWNoKChpbnB1dCwgaSkgPT4ge1xyXG4gICAgICAgIGlucHV0Lm9uY2hhbmdlID0gKCkgPT4ge2NvbnNvbGUubG9nKGlucHV0LnZhbHVlKVxyXG4gICAgICAgICAgICB0eXBlW2ldLmRhdGUgPSBpbnB1dC52YWx1ZVxyXG4gICAgICAgICAgICBkYXRlc1RleHRbaV0uaW5uZXJUZXh0ID0gaW5wdXQudmFsdWVcclxuICAgICAgICAgICAgZGF0ZXNUZXh0W2ldLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuLy9SZW1vdmVzIGFuIGVsZW1lbnQgZnJvbSB0aGUgdGFzayBhcnJheSBhbmQgRE9NXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVET00odHlwZSl7ICBcclxuICAgIHJlbW92ZUJ0bi5mb3JFYWNoKChidG4sIGkpID0+IHtcclxuICAgICAgICBidG4ub25tb3VzZXVwID0gKCk9PntcclxuICAgICAgICAgICAgYnRuLnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmUoKVxyXG4gICAgICAgICAgICByZW1vdmVUb2RvKGksIHR5cGUpIFxyXG4gICAgICAgICAgICB0b2RvLnNwbGljZShpLDEpXHJcbiAgICAgICAgICAgIHJlbW92ZUJ0bi5zcGxpY2UoaSwxKVxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICB9KTtcclxufVxyXG4vL0NoYW5nZXMgdGhlIHN0YXR1cyBvZiB0aGUgY2hlY2tib3hlc1xyXG5mdW5jdGlvbiBjaGFuZ2VDaGVjayh0eXBlKXtcclxuICAgIGNoZWNrYm94LmZvckVhY2goKGNoZWNrLGkpPT4ge1xyXG4gICAgICAgIGNoZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+e1xyXG4gICAgICAgICAgICB0eXBlW2ldLmNoZWNrZWQgPSBjaGVjay5jaGVja2VkXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IGJ0bk9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3Blbi1tZW51JylcclxuYnRuT3Blbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCk9PiB7XHJcbiAgICBjb25zdCB0YXNrRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1maWVsZCcpXHJcbiAgICB0YXNrRmllbGQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgIGNvbnN0IGJ0bkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLWJ0bicpXHJcbiAgICBidG5DbG9zZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCk9PntcclxuICAgICAgICB0YXNrRmllbGQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgIH0pXHJcbiAgICBjb25zb2xlLmxvZyh0b2RvU2VsZWN0b3IpXHJcbiAgICBhZGRMaXN0ZW5lcnModG9kb1NlbGVjdG9yKVxyXG59KVxyXG4vL0FkZCBsaXN0ZW5lciBmb3Igb3BlbiBhbmQgY2xvc2UgdGhlIHRpdGxlIG1lbnVcclxuZXhwb3J0IGZ1bmN0aW9uIGFkZExpc3RlbmVycyhzZWxlY3Rvcil7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXRpdGxlJykudmFsdWUgXHJcbiAgICBjb25zdCB0YXNrRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1maWVsZCcpXHJcbiAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrJylcclxuICAgICAgXHJcbiAgICBhZGRUYXNrLm9ubW91c2V1cCA9ICgpPT57XHJcbiAgICAgICAgaWYocGF0dGVybnMudGl0bGUudGVzdCh0aXRsZS52YWx1ZSk9PT0gdHJ1ZSl7Y29uc29sZS5sb2coJ3RvZG8gYWRkZWQnKVxyXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXRpdGxlJykudmFsdWVcclxuICAgICAgICAgICAgYWRkVG9kbyhzZWxlY3RvciAsIHRpdGxlLCAnJywgZmFsc2UsIGN1cnJlbnRQcm9qZWN0KVxyXG4gICAgICAgICAgICB0YXNrRE9NKHNlbGVjdG9yKVxyXG4gICAgICAgICAgICB0YXNrRmllbGQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyVGFza3MoKXtcclxuICAgIHRvZG8gPSBbXVxyXG4gICAgcmVtb3ZlQnRuID0gW11cclxuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbGlzdCcpXHJcbiAgICB3aGlsZSAodGFza0xpc3QuY2hpbGRFbGVtZW50Q291bnQ+MCl7XHJcbiAgICAgICAgdGFza0xpc3QuZmlyc3RDaGlsZC5yZW1vdmUoKVxyXG4gICAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge3Rhc2tET019IGZyb20gJy4vbW9kdWxlcy9Ub2RvcydcclxuaW1wb3J0IHthZGRUb2RvfSBmcm9tICcuL21vZHVsZXMvVGFzaydcclxuaW1wb3J0IHsgYWRkUHJvamVjdHMgLHByb2plY3RMaXN0ZW5lciB9IGZyb20gJy4vbW9kdWxlcy9Qcm9qZWN0cydcclxuY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51JylcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9