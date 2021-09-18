import {compareAsc, format, formatDistance } from 'date-fns'
import { createTask, removeTodo } from './Task'
import { addTodo, task } from './Task'
const todo = []
export function taskDOM(){ 
    const content = document.querySelector('#content')
    const taskField = document.querySelector('#task-field')
    
    let count = task.length
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
    //Add values to the object
    addTodo(title, '16/09/2021', true, count)
    removeDOM()
    console.log(task)
}

export function removeDOM(){
    let removeBtn = document.querySelectorAll('.remove')
    removeBtn.forEach((btn, i) => {
        btn.addEventListener('mouseup', function () {
            btn.parentNode.parentNode.remove()
            removeTodo(i) 
            console.log(i)
        })
               
    });
}
const btnOpen = document.querySelector('#open-menu')
btnOpen.addEventListener('mouseup', addListeners)

export function addListeners(){
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
