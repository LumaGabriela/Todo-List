import { taskDOM , clearTasks, addListeners} from "./Todos";
import { project, addProject, removeProject, home , today, thisWeek } from './Task'

//Add project lists
export const currentProjectH1 = document.querySelector('#current-project')
export let currentProject = 'Home'
export let currentIndex = 0
const remProject = [] 
let projects = []
export let patterns = {
    field: /^.{1,20}$/,
}
export function projectDOM(){
    const currentProjectH1 = document.querySelector('#current-project')
    const projectContainer = document.querySelector('#projects')
    const projectDiv = document.querySelector('#project-div')
    currentProjectH1.innerText = currentProject
    showTasks()
    for(let i=0; i<project.length; i++){
        if(!projects[i]){
        //update current project
        currentProject = project[i].title
        currentIndex = i
        currentProjectH1.innerHTML = currentProject
        clearTasks()
        taskDOM(project[currentIndex].todos)
        //create elements
        projects[i] = document.createElement('div')
        projects[i].setAttribute('class', 'projects')
        projects[i].innerHTML = `<button class="btn-project"><i class="fas fa-tasks"></i>${currentProject}</button><button class="remove-project"><i class="fas fa-times"></i></button>`
        projectContainer.insertBefore(projects[i], projectDiv)
        const projectName = document.querySelectorAll('.btn-project')
        //projectName[i].innerText = currentProject
        remProject[i] = document.querySelectorAll('.remove-project')[i]
        }
    }
    deleteProject()
    selectProject()
}
// Select home tab
export let todoSelector = 0
const homeBtn = document.querySelector('#home-btn')
homeBtn.addEventListener('mouseup', ()=> {
    todoSelector = 0
    currentProject = 'Home'
    currentProjectH1.innerText = currentProject
    addListeners(home)
    clearTasks()
    taskDOM(home)
    showTasks()
})
//Show task menu
export function showTasks(){
    const taskField = document.querySelector('#task-field')
    if(project.length > 0 || todoSelector === 0){
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
            if(todoSelector === 0){
                removeProject(i, home)
            }else if(todoSelector === 1){
                removeProject(i, project[currentIndex].todos)
            }
            projects.splice(i,1)
            showTasks()
            if(i !== 0 ){
            currentProject = project[i - 1].title
            currentIndex = i - 1 
            currentProjectH1.innerHTML = currentProject
            }else{
                currentProject = ''
                currentIndex = i
                currentProjectH1.innerHTML = currentProject
            }
            todoSelector = 1
        }
    })
}
// Select which project to add notes
function selectProject(){
    const projectBtn = document.querySelectorAll('.btn-project')
    projectBtn.forEach((p,i)=>{
        p.onmouseup = () => {
            currentProject = project[i].title
            currentIndex = i
            currentProjectH1.innerHTML = currentProject
            todoSelector = 1
            clearTasks()
            taskDOM(project[currentIndex].todos)
            projectDOM()
            addListeners(project[currentIndex].todos)
        }
    })
}
//Listeners to open the project menu and add projects
const title = document.querySelector('#project-title')
const openProject = document.querySelector('#open-project')

openProject.addEventListener('mouseup', projectListener)
export function projectListener(){
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
        if(patterns.field.test(title.value)){
            currentProject = title.value
            currentProjectH1.innerHTML = currentProject
            editProject.value = currentProject
            editProject.classList.add('active')
            projectInfo.classList.remove('active')
            openProject.classList.add('active')
            addProject(currentProject, [])
            clearTasks() 
            taskDOM(project[currentIndex].todos)
            projectDOM()
            todoSelector = 1
        }else{
            window.alert('Title must be 1-20 characters')
        }  
    }
}

