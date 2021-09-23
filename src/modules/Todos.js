import {compareAsc, format, formatDistance } from 'date-fns'
import {removeTodo, addTodo, project, home  } from './Task'
import {currentIndex, currentProject, currentProjectH1, patterns, showTasks, todoSelector} from './Projects'
import {populateStorage} from './Task'
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
export function taskDOM(type){
    if(todoSelector === 0){
        currentProjectH1.innerText = 'Home'
        addListeners(home)
        clearTasks()
        showTasks()
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
                populateStorage()
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
            populateStorage()
            datesText[i].classList.add('active')
            input.classList.remove('active')
            
        }
    })
}

//Removes an element from the task array and DOM
export function removeDOM(type){  
    removeBtn.forEach((btn, i) => {
        btn.onmouseup = ()=>{
            btn.parentNode.parentNode.remove()
            removeTodo(i, type) 
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
            populateStorage()
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
    if(todoSelector === 0){
        addListeners(home)
    }else if(todoSelector === 1){
        addListeners(project[currentIndex].todos)
    }
})
//Add listener for open and close the title menu
export function addListeners(selector){
    const title = document.querySelector('#task-title').value 
    const taskField = document.querySelector('#task-field')
    const addTask = document.querySelector('#add-task')
    addTask.onmouseup = ()=>{
        if(patterns.title.test(title.value)=== true){
            const title = document.querySelector('#task-title').value
            addTodo(selector , title, '', false, currentProject)
            taskDOM(selector)
            taskField.classList.remove('active')
        }
    }
}
export function clearTasks(){
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