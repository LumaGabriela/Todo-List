import {compareAsc, format, formatDistance } from 'date-fns'
import {removeTodo, addTodo, task, project  } from './Task'
import {currentIndex, currentProject} from './Projects'
//
let todo = []
let removeBtn = []
let dates = []
let checkbox = []
let editTitles = []
 
export function taskDOM(){console.log(currentProject)
    const title = document.querySelector('#task-title').value  
    console.log(project)
    for(let i=0; i<project[currentIndex].todos.length; i++) {  
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
            editTitles[i].innerText = project [currentIndex].todos[i].title   
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
                project[currentIndex].todos.title = input.value
                input.classList.remove('active')
                editTitles[i].classList.add('active')
            }
        }
    })
}
//Removes an element from the task array and DOM
export function removeDOM(){  
    removeBtn.forEach((btn, i) => {
        btn.onmouseup = ()=>{
            btn.parentNode.parentNode.remove()
            removeTodo(i) 
            todo.splice(i,1)
            removeBtn.splice(i,1)
        }
               
    });
}
//Changes the status of the checkboxes
function changeCheck(){
    checkbox.forEach((check,i)=> {
        check.addEventListener('change', () =>{
            project[currentIndex].todos[i].checked = check.checked
        })
    })
}
//Change the status of the date inputs
function changeDate(){
    dates.forEach((date,i)=> {
        date.addEventListener('change', () =>{
            project[currentIndex].todos[i].date = date.value
            console.log(project)
        })
    })
}

const btnOpen = document.querySelector('#open-menu')
btnOpen.addEventListener('mouseup', addListeners)
//Add listener for open and close the title menu
export function addListeners(){
    const taskField = document.querySelector('#task-field')
    taskField.classList.add('active')
    const btnClose = document.querySelector('#close-btn')
    btnClose.addEventListener('mouseup', ()=>{
        taskField.classList.remove('active')
    })
    const addTask = document.querySelector('#add-task')
      
    addTask.addEventListener('mouseup', ()=>{
        const title = document.querySelector('#task-title').value
        addTodo(title, '', false, currentProject)
    taskDOM()
    //task.classList.remove('active')
    })
}
export function clearTasks(){
    todo = []
    removeBtn = []
    const content = document.querySelector('#content')
    while (content.childElementCount>1){
        content.firstChild.remove()
    }
}