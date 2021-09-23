import { project } from "./modules/Task";
import { populateStorage } from "./modules/Task";
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