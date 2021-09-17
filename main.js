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
/* harmony export */   "addTodo": () => (/* binding */ addTodo),
/* harmony export */   "removeTodo": () => (/* binding */ removeTodo)
/* harmony export */ });
function createTask(title, date, checked, i){
    return{title, date, checked, i}
}
const task = []
function addTodo(title,date,check, i){
    task.push(createTask(title, date, check, i))
    console.log(task)
    return task
}

function removeTodo(i){
    task[i] = ''
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



const todo = []
function taskDOM(){ 
    const content = document.querySelector('#content')
    const taskField = document.querySelector('#task-field')
    
    let count = content.childElementCount -1
    todo[count] = document.createElement('div')
    todo[count].innerHTML = `<div class='left'>
    <input type='checkbox' class="check" name="check">
    <input type='text' id='task${count}' class="task-name">
    <p id='title${count}' class='edit-titles'></p></div>
    <div class='right'><input type="date" id="date">
    <button class="remove"><i class="fas fa-trash-alt"></i></button></div>`
    todo[count].setAttribute('class', 'task')
    content.insertBefore(todo[count], taskField)
    // Add field elements 
    const title = document.querySelector('#task-title').value
    let editTitles = document.getElementsByClassName('edit-titles')
    let check = document.querySelectorAll('.check')
    
    check[count].checked = true
    editTitles[count].innerText = title
    console.log(count)
    //Add values to the object
    ;(0,_Task__WEBPACK_IMPORTED_MODULE_0__.addTodo)(title, '16/09/2021', true, count)
    removeDOM()
}

function removeDOM(){
    let removeBtn = document.querySelectorAll('.remove')
    removeBtn.forEach((btn, i) => {
        btn.addEventListener('mouseup', function () {
            btn.parentNode.parentNode.remove()
            ;(0,_Task__WEBPACK_IMPORTED_MODULE_0__.removeTodo)(i) 
        })
               
    });
}
const btnOpen = document.querySelector('#open-menu')
btnOpen.addEventListener('mouseup', addListeners)

function addListeners(){
    const task = document.querySelector('#task-field')
    task.classList.add('active')
    const btnClose = document.querySelector('#close-btn')
    btnClose.addEventListener('mouseup', ()=>{
        task.classList.remove('active')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUCxXQUFXO0FBQ1g7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaNEQ7QUFDYjtBQUNmO0FBQ2hDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxNQUFNO0FBQ3ZDLGtCQUFrQixNQUFNO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwrQ0FBTztBQUNYO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtEQUFVO0FBQ3RCLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7OztVQ3hEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05vQztBQUNFO0FBQ3RDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUsIGRhdGUsIGNoZWNrZWQsIGkpe1xyXG4gICAgcmV0dXJue3RpdGxlLCBkYXRlLCBjaGVja2VkLCBpfVxyXG59XHJcbmNvbnN0IHRhc2sgPSBbXVxyXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9kbyh0aXRsZSxkYXRlLGNoZWNrLCBpKXtcclxuICAgIHRhc2sucHVzaChjcmVhdGVUYXNrKHRpdGxlLCBkYXRlLCBjaGVjaywgaSkpXHJcbiAgICBjb25zb2xlLmxvZyh0YXNrKVxyXG4gICAgcmV0dXJuIHRhc2tcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRvZG8oaSl7XHJcbiAgICB0YXNrW2ldID0gJydcclxufSIsImltcG9ydCB7Y29tcGFyZUFzYywgZm9ybWF0LCBmb3JtYXREaXN0YW5jZSB9IGZyb20gJ2RhdGUtZm5zJ1xyXG5pbXBvcnQgeyBjcmVhdGVUYXNrLCByZW1vdmVUb2RvIH0gZnJvbSAnLi9UYXNrJ1xyXG5pbXBvcnQgeyBhZGRUb2RvIH0gZnJvbSAnLi9UYXNrJ1xyXG5jb25zdCB0b2RvID0gW11cclxuZXhwb3J0IGZ1bmN0aW9uIHRhc2tET00oKXsgXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxyXG4gICAgY29uc3QgdGFza0ZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZmllbGQnKVxyXG4gICAgXHJcbiAgICBsZXQgY291bnQgPSBjb250ZW50LmNoaWxkRWxlbWVudENvdW50IC0xXHJcbiAgICB0b2RvW2NvdW50XSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICB0b2RvW2NvdW50XS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz0nbGVmdCc+XHJcbiAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGNsYXNzPVwiY2hlY2tcIiBuYW1lPVwiY2hlY2tcIj5cclxuICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0ndGFzayR7Y291bnR9JyBjbGFzcz1cInRhc2stbmFtZVwiPlxyXG4gICAgPHAgaWQ9J3RpdGxlJHtjb3VudH0nIGNsYXNzPSdlZGl0LXRpdGxlcyc+PC9wPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz0ncmlnaHQnPjxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cInJlbW92ZVwiPjxpIGNsYXNzPVwiZmFzIGZhLXRyYXNoLWFsdFwiPjwvaT48L2J1dHRvbj48L2Rpdj5gXHJcbiAgICB0b2RvW2NvdW50XS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2snKVxyXG4gICAgY29udGVudC5pbnNlcnRCZWZvcmUodG9kb1tjb3VudF0sIHRhc2tGaWVsZClcclxuICAgIC8vIEFkZCBmaWVsZCBlbGVtZW50cyBcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stdGl0bGUnKS52YWx1ZVxyXG4gICAgbGV0IGVkaXRUaXRsZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlZGl0LXRpdGxlcycpXHJcbiAgICBsZXQgY2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2snKVxyXG4gICAgXHJcbiAgICBjaGVja1tjb3VudF0uY2hlY2tlZCA9IHRydWVcclxuICAgIGVkaXRUaXRsZXNbY291bnRdLmlubmVyVGV4dCA9IHRpdGxlXHJcbiAgICBjb25zb2xlLmxvZyhjb3VudClcclxuICAgIC8vQWRkIHZhbHVlcyB0byB0aGUgb2JqZWN0XHJcbiAgICBhZGRUb2RvKHRpdGxlLCAnMTYvMDkvMjAyMScsIHRydWUsIGNvdW50KVxyXG4gICAgcmVtb3ZlRE9NKClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZURPTSgpe1xyXG4gICAgbGV0IHJlbW92ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmUnKVxyXG4gICAgcmVtb3ZlQnRuLmZvckVhY2goKGJ0biwgaSkgPT4ge1xyXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBidG4ucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZSgpXHJcbiAgICAgICAgICAgIHJlbW92ZVRvZG8oaSkgXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgXHJcbiAgICB9KTtcclxufVxyXG5jb25zdCBidG5PcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29wZW4tbWVudScpXHJcbmJ0bk9wZW4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGFkZExpc3RlbmVycylcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRMaXN0ZW5lcnMoKXtcclxuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1maWVsZCcpXHJcbiAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICBjb25zdCBidG5DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1idG4nKVxyXG4gICAgYnRuQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpPT57XHJcbiAgICAgICAgdGFzay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgfSlcclxuICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2snKVxyXG4gICAgYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCk9PntcclxuICAgIHRhc2tET00oKVxyXG4gICAgLy90YXNrLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICB9KVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHt0YXNrRE9NfSBmcm9tICcuL21vZHVsZXMvVUknXHJcbmltcG9ydCB7YWRkVG9kb30gZnJvbSAnLi9tb2R1bGVzL1Rhc2snXHJcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudScpXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==