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
/* harmony export */   "projectDOM": () => (/* binding */ projectDOM),
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
function projectDOM(){
    const projectContainer = document.querySelector('#projects')
    const projectDiv = document.querySelector('#project-div')
    const title = document.querySelector('#project-title')
    currentProjectH1.innerText = currentProject
    ;(0,_Task__WEBPACK_IMPORTED_MODULE_1__.addProject)(title.value, [])
    console.log(currentProject)
    for(let i=0; i<_Task__WEBPACK_IMPORTED_MODULE_1__.project.length; i++){
        if(!projects[i]){
        currentIndex = i
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

function deleteProject(){
    remProject.forEach((btn,i)=>{
        btn.onmouseup = ()=> {console.log('caca')
            btn.parentNode.remove()
            remProject.splice(i,1)
            ;(0,_Task__WEBPACK_IMPORTED_MODULE_1__.removeProject)(i)
            projects.splice(i,1)
        }
    })
}
//
function selectProject(){
    projects.forEach((p,i)=>{
        p.onmouseup = () => {
            currentProject = _Task__WEBPACK_IMPORTED_MODULE_1__.project[i].title
            currentIndex = i
            currentProjectH1.innerHTML = currentProject
            ;(0,_Todos__WEBPACK_IMPORTED_MODULE_0__.clearTasks)()
            ;(0,_Todos__WEBPACK_IMPORTED_MODULE_0__.taskDOM)()
        }
    })
}
//
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
    const addProject = document.querySelector('#add-project')
    addProject.onmouseup = ()=>{
        currentProject = title.value
        editProject.value = title.value
        editProject.classList.add('active')
        projectInfo.classList.remove('active')
        openProject.classList.add('active')
        projectDOM()
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
/* harmony export */   "task": () => (/* binding */ task),
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

let task = []

function addTodo(title,date,check, proj){
    project[_Projects__WEBPACK_IMPORTED_MODULE_0__.currentIndex].todos.push(createTask(title, date, check, proj))
    console.log(project[_Projects__WEBPACK_IMPORTED_MODULE_0__.currentIndex].todos)
}

function removeTodo(i){
    project[_Projects__WEBPACK_IMPORTED_MODULE_0__.currentIndex].todos.splice(i,1)
}
function createProject(title, todos){
    return {title, todos}
}
function addProject(title, todos){
    project.push(createProject(title, todos))
    console.log(project)
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
let checkbox = []
let editTitles = []
 
function taskDOM(){console.log(_Projects__WEBPACK_IMPORTED_MODULE_1__.currentProject)
    const title = document.querySelector('#task-title').value  
    console.log(_Task__WEBPACK_IMPORTED_MODULE_0__.project)
    for(let i=0; i<_Task__WEBPACK_IMPORTED_MODULE_0__.project[_Projects__WEBPACK_IMPORTED_MODULE_1__.currentIndex].todos.length; i++) {  
        if(!todo[i]){     
            const content = document.querySelector('#content')
            const taskField = document.querySelector('#task-field')
            // Create task field    
            todo[i] = document.createElement('div')
            todo[i].innerHTML = `<div class='left'>
            <input type='checkbox' class="check" name="check">
            <input type='text' class="task-name">
            <p class='edit-titles active'></p></div>
            <div class='right'><input type="date" class="date">
            <button class="remove"><i class="fas fa-trash-alt"></i></button></div>`
            todo[i].setAttribute('class', 'task')
            content.insertBefore(todo[i], taskField)
            // Add field elements 
            removeBtn[i] = document.querySelectorAll('.remove')[i]
            dates[i] = document.querySelectorAll('.date')[i]
            checkbox[i] = document.querySelectorAll('.check')[i]            
            editTitles[i] = document.querySelectorAll('.edit-titles')[i]
            editTitles[i].innerText = _Task__WEBPACK_IMPORTED_MODULE_0__.project [_Projects__WEBPACK_IMPORTED_MODULE_1__.currentIndex].todos[i].title   
        }
    }
    addChanges()
}
//Add changes to input, date, checkboxes
function addChanges(){
    removeDOM()
    changeCheck()
    changeDate()
    editTask()
}
//Allows change the title of the task
function editTask(){
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
                _Task__WEBPACK_IMPORTED_MODULE_0__.project[_Projects__WEBPACK_IMPORTED_MODULE_1__.currentIndex].todos.title = input.value
                input.classList.remove('active')
                editTitles[i].classList.add('active')
            }
        }
    })
}
//Removes an element from the task array and DOM
function removeDOM(){  
    removeBtn.forEach((btn, i) => {
        btn.onmouseup = ()=>{
            btn.parentNode.parentNode.remove()
            ;(0,_Task__WEBPACK_IMPORTED_MODULE_0__.removeTodo)(i) 
            todo.splice(i,1)
            removeBtn.splice(i,1)
        }
               
    });
}
//Changes the status of the checkboxes
function changeCheck(){
    checkbox.forEach((check,i)=> {
        check.addEventListener('change', () =>{
            _Task__WEBPACK_IMPORTED_MODULE_0__.project[_Projects__WEBPACK_IMPORTED_MODULE_1__.currentIndex].todos[i].checked = check.checked
        })
    })
}
//Change the status of the date inputs
function changeDate(){
    dates.forEach((date,i)=> {
        date.addEventListener('change', () =>{
            _Task__WEBPACK_IMPORTED_MODULE_0__.project[_Projects__WEBPACK_IMPORTED_MODULE_1__.currentIndex].todos[i].date = date.value
            console.log(_Task__WEBPACK_IMPORTED_MODULE_0__.project)
        })
    })
}

const btnOpen = document.querySelector('#open-menu')
btnOpen.addEventListener('mouseup', addListeners)
//Add listener for open and close the title menu
function addListeners(){
    const taskField = document.querySelector('#task-field')
    taskField.classList.add('active')
    const btnClose = document.querySelector('#close-btn')
    btnClose.addEventListener('mouseup', ()=>{
        taskField.classList.remove('active')
    })
    const addTask = document.querySelector('#add-task')
      
    addTask.addEventListener('mouseup', ()=>{
        const title = document.querySelector('#task-title').value
        ;(0,_Task__WEBPACK_IMPORTED_MODULE_0__.addTodo)(title, '', false, _Projects__WEBPACK_IMPORTED_MODULE_1__.currentProject)
    taskDOM()
    //task.classList.remove('active')
    })
}
function clearTasks(){
    todo = []
    removeBtn = []
    const content = document.querySelector('#content')
    while (content.childElementCount>1){
        content.firstChild.remove()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOdUM7QUFDRDtBQUMyQjtBQUNqRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvVG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRhc2tET00gLCBjbGVhclRhc2tzfSBmcm9tIFwiLi9Ub2Rvc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVUYXNrLCByZW1vdmVUb2RvLCBhZGRUb2RvLCBwcm9qZWN0LCBhZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0ICB9IGZyb20gJy4vVGFzaydcclxuLy9BZGQgcHJvamVjdCBsaXN0c1xyXG5jb25zdCBjdXJyZW50UHJvamVjdEgxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtcHJvamVjdCcpXHJcbmV4cG9ydCBsZXQgY3VycmVudFByb2plY3QgPSAnJ1xyXG5leHBvcnQgbGV0IGN1cnJlbnRJbmRleCA9IDBcclxuY29uc3QgcmVtUHJvamVjdCA9IFtdXHJcbiBcclxubGV0IHByb2plY3RzID0gW11cclxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RET00oKXtcclxuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHMnKVxyXG4gICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWRpdicpXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXRpdGxlJylcclxuICAgIGN1cnJlbnRQcm9qZWN0SDEuaW5uZXJUZXh0ID0gY3VycmVudFByb2plY3RcclxuICAgIGFkZFByb2plY3QodGl0bGUudmFsdWUsIFtdKVxyXG4gICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QpXHJcbiAgICBmb3IobGV0IGk9MDsgaTxwcm9qZWN0Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBpZighcHJvamVjdHNbaV0pe1xyXG4gICAgICAgIGN1cnJlbnRJbmRleCA9IGlcclxuICAgICAgICBwcm9qZWN0c1tpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcHJvamVjdHNbaV0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0cycpXHJcbiAgICAgICAgcHJvamVjdHNbaV0uaW5uZXJIVE1MID0gYDxidXR0b24gY2xhc3M9XCJidG4tcHJvamVjdFwiPiR7dGl0bGUudmFsdWV9PC9idXR0b24+PGJ1dHRvbiBjbGFzcz1cInJlbW92ZS1wcm9qZWN0XCI+PGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+PC9idXR0b24+YFxyXG4gICAgICAgIHByb2plY3RDb250YWluZXIuaW5zZXJ0QmVmb3JlKHByb2plY3RzW2ldLCBwcm9qZWN0RGl2KVxyXG4gICAgICAgIHJlbVByb2plY3RbaV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVtb3ZlLXByb2plY3QnKVtpXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRlbGV0ZVByb2plY3QoKVxyXG4gICAgc2VsZWN0UHJvamVjdCgpXHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0KVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KCl7XHJcbiAgICByZW1Qcm9qZWN0LmZvckVhY2goKGJ0bixpKT0+e1xyXG4gICAgICAgIGJ0bi5vbm1vdXNldXAgPSAoKT0+IHtjb25zb2xlLmxvZygnY2FjYScpXHJcbiAgICAgICAgICAgIGJ0bi5wYXJlbnROb2RlLnJlbW92ZSgpXHJcbiAgICAgICAgICAgIHJlbVByb2plY3Quc3BsaWNlKGksMSlcclxuICAgICAgICAgICAgcmVtb3ZlUHJvamVjdChpKVxyXG4gICAgICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaSwxKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuLy9cclxuZnVuY3Rpb24gc2VsZWN0UHJvamVjdCgpe1xyXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocCxpKT0+e1xyXG4gICAgICAgIHAub25tb3VzZXVwID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RbaV0udGl0bGVcclxuICAgICAgICAgICAgY3VycmVudEluZGV4ID0gaVxyXG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdEgxLmlubmVySFRNTCA9IGN1cnJlbnRQcm9qZWN0XHJcbiAgICAgICAgICAgIGNsZWFyVGFza3MoKVxyXG4gICAgICAgICAgICB0YXNrRE9NKClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcbi8vXHJcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdGl0bGUnKVxyXG5jb25zdCBvcGVuUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcGVuLXByb2plY3QnKVxyXG5cclxub3BlblByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHByb2plY3RMaXN0ZW5lcilcclxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RMaXN0ZW5lcigpe2NvbnNvbGUubG9nKCdwYXRvcyBmdW5jaW9uYW5kbycpXHJcbiAgICBjb25zdCBwcm9qZWN0SW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWluZm8nKVxyXG4gICAgY29uc3QgY2xvc2VQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLXByb2plY3QnKVxyXG4gICAgXHJcbiAgICBjb25zdCBlZGl0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXByb2plY3QnKVxyXG4gICAgZWRpdFByb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgIG9wZW5Qcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICBwcm9qZWN0SW5mby5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgY2xvc2VQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKT0+IHtcclxuICAgICAgICBwcm9qZWN0SW5mby5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgIG9wZW5Qcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICB9KVxyXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcHJvamVjdCcpXHJcbiAgICBhZGRQcm9qZWN0Lm9ubW91c2V1cCA9ICgpPT57XHJcbiAgICAgICAgY3VycmVudFByb2plY3QgPSB0aXRsZS52YWx1ZVxyXG4gICAgICAgIGVkaXRQcm9qZWN0LnZhbHVlID0gdGl0bGUudmFsdWVcclxuICAgICAgICBlZGl0UHJvamVjdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgICAgIHByb2plY3RJbmZvLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgICAgb3BlblByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgICAgICBwcm9qZWN0RE9NKClcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjdXJyZW50SW5kZXgsIGN1cnJlbnRQcm9qZWN0IH0gZnJvbSBcIi4vUHJvamVjdHNcIlxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZGF0ZSwgY2hlY2tlZCwgcHJvamVjdCl7XHJcbiAgICByZXR1cm57dGl0bGUsIGRhdGUsIGNoZWNrZWQsIHByb2plY3R9XHJcbn1cclxuZXhwb3J0IGxldCBwcm9qZWN0ID0gW11cclxuXHJcbmV4cG9ydCBsZXQgdGFzayA9IFtdXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9kbyh0aXRsZSxkYXRlLGNoZWNrLCBwcm9qKXtcclxuICAgIHByb2plY3RbY3VycmVudEluZGV4XS50b2Rvcy5wdXNoKGNyZWF0ZVRhc2sodGl0bGUsIGRhdGUsIGNoZWNrLCBwcm9qKSlcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3RbY3VycmVudEluZGV4XS50b2RvcylcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRvZG8oaSl7XHJcbiAgICBwcm9qZWN0W2N1cnJlbnRJbmRleF0udG9kb3Muc3BsaWNlKGksMSlcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlLCB0b2Rvcyl7XHJcbiAgICByZXR1cm4ge3RpdGxlLCB0b2Rvc31cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdCh0aXRsZSwgdG9kb3Mpe1xyXG4gICAgcHJvamVjdC5wdXNoKGNyZWF0ZVByb2plY3QodGl0bGUsIHRvZG9zKSlcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3QpXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb2plY3QoaSl7XHJcbiAgICBwcm9qZWN0LnNwbGljZShpLDEpXHJcbn1cclxuIiwiaW1wb3J0IHtjb21wYXJlQXNjLCBmb3JtYXQsIGZvcm1hdERpc3RhbmNlIH0gZnJvbSAnZGF0ZS1mbnMnXHJcbmltcG9ydCB7cmVtb3ZlVG9kbywgYWRkVG9kbywgdGFzaywgcHJvamVjdCAgfSBmcm9tICcuL1Rhc2snXHJcbmltcG9ydCB7Y3VycmVudEluZGV4LCBjdXJyZW50UHJvamVjdH0gZnJvbSAnLi9Qcm9qZWN0cydcclxuLy9cclxubGV0IHRvZG8gPSBbXVxyXG5sZXQgcmVtb3ZlQnRuID0gW11cclxubGV0IGRhdGVzID0gW11cclxubGV0IGNoZWNrYm94ID0gW11cclxubGV0IGVkaXRUaXRsZXMgPSBbXVxyXG4gXHJcbmV4cG9ydCBmdW5jdGlvbiB0YXNrRE9NKCl7Y29uc29sZS5sb2coY3VycmVudFByb2plY3QpXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXRpdGxlJykudmFsdWUgIFxyXG4gICAgY29uc29sZS5sb2cocHJvamVjdClcclxuICAgIGZvcihsZXQgaT0wOyBpPHByb2plY3RbY3VycmVudEluZGV4XS50b2Rvcy5sZW5ndGg7IGkrKykgeyAgXHJcbiAgICAgICAgaWYoIXRvZG9baV0peyAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWZpZWxkJylcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIHRhc2sgZmllbGQgICAgXHJcbiAgICAgICAgICAgIHRvZG9baV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICB0b2RvW2ldLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPSdsZWZ0Jz5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyBjbGFzcz1cImNoZWNrXCIgbmFtZT1cImNoZWNrXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzcz1cInRhc2stbmFtZVwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz0nZWRpdC10aXRsZXMgYWN0aXZlJz48L3A+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3JpZ2h0Jz48aW5wdXQgdHlwZT1cImRhdGVcIiBjbGFzcz1cImRhdGVcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInJlbW92ZVwiPjxpIGNsYXNzPVwiZmFzIGZhLXRyYXNoLWFsdFwiPjwvaT48L2J1dHRvbj48L2Rpdj5gXHJcbiAgICAgICAgICAgIHRvZG9baV0uc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrJylcclxuICAgICAgICAgICAgY29udGVudC5pbnNlcnRCZWZvcmUodG9kb1tpXSwgdGFza0ZpZWxkKVxyXG4gICAgICAgICAgICAvLyBBZGQgZmllbGQgZWxlbWVudHMgXHJcbiAgICAgICAgICAgIHJlbW92ZUJ0bltpXSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmUnKVtpXVxyXG4gICAgICAgICAgICBkYXRlc1tpXSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRlJylbaV1cclxuICAgICAgICAgICAgY2hlY2tib3hbaV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2snKVtpXSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBlZGl0VGl0bGVzW2ldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQtdGl0bGVzJylbaV1cclxuICAgICAgICAgICAgZWRpdFRpdGxlc1tpXS5pbm5lclRleHQgPSBwcm9qZWN0IFtjdXJyZW50SW5kZXhdLnRvZG9zW2ldLnRpdGxlICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYWRkQ2hhbmdlcygpXHJcbn1cclxuLy9BZGQgY2hhbmdlcyB0byBpbnB1dCwgZGF0ZSwgY2hlY2tib3hlc1xyXG5mdW5jdGlvbiBhZGRDaGFuZ2VzKCl7XHJcbiAgICByZW1vdmVET00oKVxyXG4gICAgY2hhbmdlQ2hlY2soKVxyXG4gICAgY2hhbmdlRGF0ZSgpXHJcbiAgICBlZGl0VGFzaygpXHJcbn1cclxuLy9BbGxvd3MgY2hhbmdlIHRoZSB0aXRsZSBvZiB0aGUgdGFza1xyXG5mdW5jdGlvbiBlZGl0VGFzaygpe1xyXG4gICAgbGV0IGVkaXRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLW5hbWUnKVxyXG4gICAgZWRpdFRpdGxlcy5mb3JFYWNoKChlVGl0bGVzLGkpPT57XHJcbiAgICAgICAgZVRpdGxlcy5vbm1vdXNldXAgPSAoKT0+e1xyXG4gICAgICAgICAgICBlVGl0bGVzLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgIGVkaXRJbnB1dFtpXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBlZGl0SW5wdXQuZm9yRWFjaCgoaW5wdXQsaSk9PntcclxuICAgICAgICBpbnB1dC52YWx1ZSA9IGVkaXRUaXRsZXNbaV0uaW5uZXJIVE1MXHJcbiAgICAgICAgaW5wdXQub25rZXl1cCA9IGZ1bmN0aW9uIChldmVudCl7XHJcbiAgICAgICAgICAgIGlmKGV2ZW50LmtleSA9PT0gJ0VudGVyJyl7XHJcbiAgICAgICAgICAgICAgICBlZGl0VGl0bGVzW2ldLmlubmVySFRNTCA9IGlucHV0LnZhbHVlXHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0W2N1cnJlbnRJbmRleF0udG9kb3MudGl0bGUgPSBpbnB1dC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICAgICAgICAgICAgIGVkaXRUaXRsZXNbaV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuLy9SZW1vdmVzIGFuIGVsZW1lbnQgZnJvbSB0aGUgdGFzayBhcnJheSBhbmQgRE9NXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVET00oKXsgIFxyXG4gICAgcmVtb3ZlQnRuLmZvckVhY2goKGJ0biwgaSkgPT4ge1xyXG4gICAgICAgIGJ0bi5vbm1vdXNldXAgPSAoKT0+e1xyXG4gICAgICAgICAgICBidG4ucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZSgpXHJcbiAgICAgICAgICAgIHJlbW92ZVRvZG8oaSkgXHJcbiAgICAgICAgICAgIHRvZG8uc3BsaWNlKGksMSlcclxuICAgICAgICAgICAgcmVtb3ZlQnRuLnNwbGljZShpLDEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuICAgIH0pO1xyXG59XHJcbi8vQ2hhbmdlcyB0aGUgc3RhdHVzIG9mIHRoZSBjaGVja2JveGVzXHJcbmZ1bmN0aW9uIGNoYW5nZUNoZWNrKCl7XHJcbiAgICBjaGVja2JveC5mb3JFYWNoKChjaGVjayxpKT0+IHtcclxuICAgICAgICBjaGVjay5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PntcclxuICAgICAgICAgICAgcHJvamVjdFtjdXJyZW50SW5kZXhdLnRvZG9zW2ldLmNoZWNrZWQgPSBjaGVjay5jaGVja2VkXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuLy9DaGFuZ2UgdGhlIHN0YXR1cyBvZiB0aGUgZGF0ZSBpbnB1dHNcclxuZnVuY3Rpb24gY2hhbmdlRGF0ZSgpe1xyXG4gICAgZGF0ZXMuZm9yRWFjaCgoZGF0ZSxpKT0+IHtcclxuICAgICAgICBkYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+e1xyXG4gICAgICAgICAgICBwcm9qZWN0W2N1cnJlbnRJbmRleF0udG9kb3NbaV0uZGF0ZSA9IGRhdGUudmFsdWVcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdClcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgYnRuT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcGVuLW1lbnUnKVxyXG5idG5PcGVuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBhZGRMaXN0ZW5lcnMpXHJcbi8vQWRkIGxpc3RlbmVyIGZvciBvcGVuIGFuZCBjbG9zZSB0aGUgdGl0bGUgbWVudVxyXG5leHBvcnQgZnVuY3Rpb24gYWRkTGlzdGVuZXJzKCl7XHJcbiAgICBjb25zdCB0YXNrRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1maWVsZCcpXHJcbiAgICB0YXNrRmllbGQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgIGNvbnN0IGJ0bkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLWJ0bicpXHJcbiAgICBidG5DbG9zZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCk9PntcclxuICAgICAgICB0YXNrRmllbGQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgIH0pXHJcbiAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrJylcclxuICAgICAgXHJcbiAgICBhZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKT0+e1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stdGl0bGUnKS52YWx1ZVxyXG4gICAgICAgIGFkZFRvZG8odGl0bGUsICcnLCBmYWxzZSwgY3VycmVudFByb2plY3QpXHJcbiAgICB0YXNrRE9NKClcclxuICAgIC8vdGFzay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgfSlcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJUYXNrcygpe1xyXG4gICAgdG9kbyA9IFtdXHJcbiAgICByZW1vdmVCdG4gPSBbXVxyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcclxuICAgIHdoaWxlIChjb250ZW50LmNoaWxkRWxlbWVudENvdW50PjEpe1xyXG4gICAgICAgIGNvbnRlbnQuZmlyc3RDaGlsZC5yZW1vdmUoKVxyXG4gICAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge3Rhc2tET019IGZyb20gJy4vbW9kdWxlcy9Ub2RvcydcclxuaW1wb3J0IHthZGRUb2RvfSBmcm9tICcuL21vZHVsZXMvVGFzaydcclxuaW1wb3J0IHsgYWRkUHJvamVjdHMgLHByb2plY3RMaXN0ZW5lciB9IGZyb20gJy4vbW9kdWxlcy9Qcm9qZWN0cydcclxuY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51JylcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9