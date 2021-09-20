import {compareAsc, format, formatDistance } from 'date-fns'
import { createTask, removeTodo } from './Task'
import { addTodo, task } from './Task'
let todo = []
let removeBtn = []
let dates = []
let checkbox = []
let editTitles = []
export function taskDOM(){
    const title = document.querySelector('#task-title').value
    addTodo(title, '', '', task.length)
    for(let i=0; i<task.length; i++) {  
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
                task[i].title = input.value
                input.classList.remove('active')
                editTitles[i].classList.add('active')
            }
            console.log(task)
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
            console.log(task)
            console.log(todo)
            console.log(removeBtn)
        }
               
    });
}
//Changes the status of the checkboxes
function changeCheck(){
    checkbox.forEach((check,i)=> {
        check.addEventListener('change', () =>{
            task[i].checked = check.checked
        })
    })
}
//Change the status of the date inputs
function changeDate(){
    
    dates.forEach((date,i)=> {
        date.addEventListener('change', () =>{
            task[i].date = date.value
            console.log(task)
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
    taskDOM()
    //task.classList.remove('active')
    })
}
