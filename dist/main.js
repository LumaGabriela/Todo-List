/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTask": () => (/* binding */ createTask),
/* harmony export */   "task": () => (/* binding */ task),
/* harmony export */   "addTodo": () => (/* binding */ addTodo),
/* harmony export */   "removeTodo": () => (/* binding */ removeTodo)
/* harmony export */ });
function createTask(title, date, checked, i){
    return{title, date, checked, i}
}
let task = []

function addTodo(title,date,check, i){
    task.push(createTask(title, date, check, i))
}

function removeTodo(i){
    task.splice(i,1)
    console.log(task)
}

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskDOM": () => (/* binding */ taskDOM),
/* harmony export */   "removeDOM": () => (/* binding */ removeDOM),
/* harmony export */   "addListeners": () => (/* binding */ addListeners)
/* harmony export */ });
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/modules/Task.js");



let todo = []
let removeBtn = []
let dates = []
let checkbox = []
let editTitles = []
function taskDOM(){
    const title = document.querySelector('#task-title').value
    ;(0,_Task__WEBPACK_IMPORTED_MODULE_0__.addTodo)(title, '', '', _Task__WEBPACK_IMPORTED_MODULE_0__.task.length)
    for(let i=0; i<_Task__WEBPACK_IMPORTED_MODULE_0__.task.length; i++) {  
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
            //editTitles[i].classList.add('active')
            editTitles[i].innerText = title
            
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
        input.onkeyup = function (event){
            if(event.key === 'Enter'){
                editTitles[i].innerHTML = input.value
                _Task__WEBPACK_IMPORTED_MODULE_0__.task[i].title = input.value
                input.classList.remove('active')
                editTitles[i].classList.add('active')
            }
            console.log(_Task__WEBPACK_IMPORTED_MODULE_0__.task)
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
            console.log(_Task__WEBPACK_IMPORTED_MODULE_0__.task)
            console.log(todo)
            console.log(removeBtn)
        }
               
    });
}
//Changes the status of the checkboxes
function changeCheck(){
    checkbox.forEach((check,i)=> {
        check.addEventListener('change', () =>{
            _Task__WEBPACK_IMPORTED_MODULE_0__.task[i].checked = check.checked
        })
    })
}
//Change the status of the date inputs
function changeDate(){
    
    dates.forEach((date,i)=> {
        date.addEventListener('change', () =>{
            _Task__WEBPACK_IMPORTED_MODULE_0__.task[i].date = date.value
            console.log(_Task__WEBPACK_IMPORTED_MODULE_0__.task)
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
    taskDOM()
    //task.classList.remove('active')
    })
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
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");
/* harmony import */ var _modules_Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Task */ "./src/modules/Task.js");


const menu = document.querySelector('#menu')

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1AsV0FBVztBQUNYO0FBQ087QUFDUDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWjREO0FBQ2I7QUFDVDtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLElBQUksK0NBQU8sZ0JBQWdCLDhDQUFXO0FBQ3RDLGlCQUFpQixFQUFFLDhDQUFXLEVBQUU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsdUNBQUk7QUFDcEI7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVDQUFJO0FBQzVCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFlBQVksa0RBQVU7QUFDdEI7QUFDQTtBQUNBLHdCQUF3Qix1Q0FBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1Q0FBSTtBQUNoQixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksdUNBQUk7QUFDaEIsd0JBQXdCLHVDQUFJO0FBQzVCLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7OztVQ2xIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05vQztBQUNFO0FBQ3RDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUsIGRhdGUsIGNoZWNrZWQsIGkpe1xyXG4gICAgcmV0dXJue3RpdGxlLCBkYXRlLCBjaGVja2VkLCBpfVxyXG59XHJcbmV4cG9ydCBsZXQgdGFzayA9IFtdXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9kbyh0aXRsZSxkYXRlLGNoZWNrLCBpKXtcclxuICAgIHRhc2sucHVzaChjcmVhdGVUYXNrKHRpdGxlLCBkYXRlLCBjaGVjaywgaSkpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUb2RvKGkpe1xyXG4gICAgdGFzay5zcGxpY2UoaSwxKVxyXG4gICAgY29uc29sZS5sb2codGFzaylcclxufSIsImltcG9ydCB7Y29tcGFyZUFzYywgZm9ybWF0LCBmb3JtYXREaXN0YW5jZSB9IGZyb20gJ2RhdGUtZm5zJ1xyXG5pbXBvcnQgeyBjcmVhdGVUYXNrLCByZW1vdmVUb2RvIH0gZnJvbSAnLi9UYXNrJ1xyXG5pbXBvcnQgeyBhZGRUb2RvLCB0YXNrIH0gZnJvbSAnLi9UYXNrJ1xyXG5sZXQgdG9kbyA9IFtdXHJcbmxldCByZW1vdmVCdG4gPSBbXVxyXG5sZXQgZGF0ZXMgPSBbXVxyXG5sZXQgY2hlY2tib3ggPSBbXVxyXG5sZXQgZWRpdFRpdGxlcyA9IFtdXHJcbmV4cG9ydCBmdW5jdGlvbiB0YXNrRE9NKCl7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXRpdGxlJykudmFsdWVcclxuICAgIGFkZFRvZG8odGl0bGUsICcnLCAnJywgdGFzay5sZW5ndGgpXHJcbiAgICBmb3IobGV0IGk9MDsgaTx0YXNrLmxlbmd0aDsgaSsrKSB7ICBcclxuICAgICAgICBpZighdG9kb1tpXSl7ICAgICBcclxuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcclxuICAgICAgICAgICAgY29uc3QgdGFza0ZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZmllbGQnKVxyXG4gICAgICAgICAgICAvLyBDcmVhdGUgdGFzayBmaWVsZCAgICBcclxuICAgICAgICAgICAgdG9kb1tpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIHRvZG9baV0uaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9J2xlZnQnPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGNsYXNzPVwiY2hlY2tcIiBuYW1lPVwiY2hlY2tcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGNsYXNzPVwidGFzay1uYW1lXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPSdlZGl0LXRpdGxlcyBhY3RpdmUnPjwvcD48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ncmlnaHQnPjxpbnB1dCB0eXBlPVwiZGF0ZVwiIGNsYXNzPVwiZGF0ZVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicmVtb3ZlXCI+PGkgY2xhc3M9XCJmYXMgZmEtdHJhc2gtYWx0XCI+PC9pPjwvYnV0dG9uPjwvZGl2PmBcclxuICAgICAgICAgICAgdG9kb1tpXS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2snKVxyXG4gICAgICAgICAgICBjb250ZW50Lmluc2VydEJlZm9yZSh0b2RvW2ldLCB0YXNrRmllbGQpXHJcbiAgICAgICAgICAgIC8vIEFkZCBmaWVsZCBlbGVtZW50cyBcclxuICAgICAgICAgICAgcmVtb3ZlQnRuW2ldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlbW92ZScpW2ldXHJcbiAgICAgICAgICAgIGRhdGVzW2ldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhdGUnKVtpXVxyXG4gICAgICAgICAgICBjaGVja2JveFtpXSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVjaycpW2ldICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGVkaXRUaXRsZXNbaV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdC10aXRsZXMnKVtpXVxyXG4gICAgICAgICAgICAvL2VkaXRUaXRsZXNbaV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgICAgICAgICAgZWRpdFRpdGxlc1tpXS5pbm5lclRleHQgPSB0aXRsZVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhZGRDaGFuZ2VzKClcclxufVxyXG4vL0FkZCBjaGFuZ2VzIHRvIGlucHV0LCBkYXRlLCBjaGVja2JveGVzXHJcbmZ1bmN0aW9uIGFkZENoYW5nZXMoKXtcclxuICAgIHJlbW92ZURPTSgpXHJcbiAgICBjaGFuZ2VDaGVjaygpXHJcbiAgICBjaGFuZ2VEYXRlKClcclxuICAgIGVkaXRUYXNrKClcclxufVxyXG4vL0FsbG93cyBjaGFuZ2UgdGhlIHRpdGxlIG9mIHRoZSB0YXNrXHJcbmZ1bmN0aW9uIGVkaXRUYXNrKCl7XHJcbiAgICBsZXQgZWRpdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stbmFtZScpXHJcbiAgICBlZGl0VGl0bGVzLmZvckVhY2goKGVUaXRsZXMsaSk9PntcclxuICAgICAgICBlVGl0bGVzLm9ubW91c2V1cCA9ICgpPT57XHJcbiAgICAgICAgICAgIGVUaXRsZXMuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICAgICAgICAgZWRpdElucHV0W2ldLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIGVkaXRJbnB1dC5mb3JFYWNoKChpbnB1dCxpKT0+e1xyXG4gICAgICAgIGlucHV0Lm9ua2V5dXAgPSBmdW5jdGlvbiAoZXZlbnQpe1xyXG4gICAgICAgICAgICBpZihldmVudC5rZXkgPT09ICdFbnRlcicpe1xyXG4gICAgICAgICAgICAgICAgZWRpdFRpdGxlc1tpXS5pbm5lckhUTUwgPSBpbnB1dC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgdGFza1tpXS50aXRsZSA9IGlucHV0LnZhbHVlXHJcbiAgICAgICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgZWRpdFRpdGxlc1tpXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2spXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG4vL1JlbW92ZXMgYW4gZWxlbWVudCBmcm9tIHRoZSB0YXNrIGFycmF5IGFuZCBET01cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZURPTSgpeyAgXHJcbiAgICByZW1vdmVCdG4uZm9yRWFjaCgoYnRuLCBpKSA9PiB7XHJcbiAgICAgICAgYnRuLm9ubW91c2V1cCA9ICgpPT57XHJcbiAgICAgICAgICAgIGJ0bi5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlKClcclxuICAgICAgICAgICAgcmVtb3ZlVG9kbyhpKSBcclxuICAgICAgICAgICAgdG9kby5zcGxpY2UoaSwxKVxyXG4gICAgICAgICAgICByZW1vdmVCdG4uc3BsaWNlKGksMSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGFzaylcclxuICAgICAgICAgICAgY29uc29sZS5sb2codG9kbylcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVtb3ZlQnRuKVxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICB9KTtcclxufVxyXG4vL0NoYW5nZXMgdGhlIHN0YXR1cyBvZiB0aGUgY2hlY2tib3hlc1xyXG5mdW5jdGlvbiBjaGFuZ2VDaGVjaygpe1xyXG4gICAgY2hlY2tib3guZm9yRWFjaCgoY2hlY2ssaSk9PiB7XHJcbiAgICAgICAgY2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT57XHJcbiAgICAgICAgICAgIHRhc2tbaV0uY2hlY2tlZCA9IGNoZWNrLmNoZWNrZWRcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG4vL0NoYW5nZSB0aGUgc3RhdHVzIG9mIHRoZSBkYXRlIGlucHV0c1xyXG5mdW5jdGlvbiBjaGFuZ2VEYXRlKCl7XHJcbiAgICBcclxuICAgIGRhdGVzLmZvckVhY2goKGRhdGUsaSk9PiB7XHJcbiAgICAgICAgZGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PntcclxuICAgICAgICAgICAgdGFza1tpXS5kYXRlID0gZGF0ZS52YWx1ZVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrKVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBidG5PcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wZW4tbWVudScpXHJcbmJ0bk9wZW4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGFkZExpc3RlbmVycylcclxuLy9BZGQgbGlzdGVuZXIgZm9yIG9wZW4gYW5kIGNsb3NlIHRoZSB0aXRsZSBtZW51XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRMaXN0ZW5lcnMoKXtcclxuICAgIGNvbnN0IHRhc2tGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWZpZWxkJylcclxuICAgIHRhc2tGaWVsZC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgY29uc3QgYnRuQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UtYnRuJylcclxuICAgIGJ0bkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKT0+e1xyXG4gICAgICAgIHRhc2tGaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgfSlcclxuICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2snKVxyXG4gICAgYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCk9PntcclxuICAgIHRhc2tET00oKVxyXG4gICAgLy90YXNrLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICB9KVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHt0YXNrRE9NfSBmcm9tICcuL21vZHVsZXMvVUknXHJcbmltcG9ydCB7YWRkVG9kb30gZnJvbSAnLi9tb2R1bGVzL1Rhc2snXHJcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudScpXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==