import {compareAsc, format, formatDistance } from 'date-fns'
import { createTask } from './Task'
export function taskDOM(){ 
    const content = document.querySelector('#content')
    const add = document.querySelector('#add')
    
    let count = content.childElementCount
    const todo = []
    todo[count] = document.createElement('div')
    todo[count].innerHTML = `<div class='left'>
    <input type='checkbox' id="check" name="check">
    <input type='text' id='task${count}' class="task-name"></div>
    <div class='right'><input type="date" id="date"><button id="remove"><i class="fas fa-trash-alt"></i></button></div>`
    todo[count].setAttribute('class', 'task')
    // Add var elements 
    const title = []
    title[count] = document.querySelector(`#task${count}`)
    content.insertBefore(todo[count], add)
    console.log(todo)
}
export function removeDOM(){
    //
}
const addBtn = document.querySelector('#add-btn')
addBtn.onclick = taskDOM