import { taskDOM , clearTasks, addListeners} from "./Todos";
import { project, addProject, removeProject, home , today, thisWeek } from './Task'
//Add project lists
const currentProjectH1 = document.querySelector('#current-project')
export let currentProject = ''
export let currentIndex = 0
const remProject = [] 
let projects = []
export let patterns = {
    title: /^.{1,20}$/,
}
export function projectDOM(){console.log('projectDOM')
    const currentProjectH1 = document.querySelector('#current-project')
    const projectContainer = document.querySelector('#projects')
    const projectDiv = document.querySelector('#project-div')
    const title = document.querySelector('#project-title')
    currentProjectH1.innerText = currentProject
    todoSelector = project[currentIndex].todos
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
        projects[i].innerHTML = `<button class="btn-project">${title.value}</button><button class="remove-project"><i class="fas fa-times"></i></button>`
        projectContainer.insertBefore(projects[i], projectDiv)
        remProject[i] = document.querySelectorAll('.remove-project')[i]
        }
    }
    deleteProject()
    selectProject()
    console.log(project)
}
//
const btnOpen = document.querySelector('#open-menu')
btnOpen.addEventListener('mouseup', ()=> {
    addListeners(todoSelector)
})
export let todoSelector 
const homeBtn = document.querySelector('#home-btn')
homeBtn.addEventListener('mouseup', ()=> {
    todoSelector = home
    currentProject = 'Home'
    currentProjectH1.innerText = currentProject
    addListeners(todoSelector)
    clearTasks()
    taskDOM(todoSelector)
    showTasks()
})
//
const todayBtn = document.querySelector('#today-btn')
todayBtn.addEventListener('mouseup', ()=> {
    todoSelector = today
    currentProject = 'Today'
    currentProjectH1.innerText = currentProject
    addListeners(todoSelector)
    clearTasks()
    taskDOM(todoSelector)
    showTasks()
})
const weekBtn = document.querySelector('#week-btn')
weekBtn.addEventListener('mouseup', ()=> {
    todoSelector = today
    currentProject = 'This Week'
    currentProjectH1.innerText = currentProject
    addListeners(todoSelector)
    clearTasks()
    taskDOM(todoSelector)
    showTasks()
})
//Show task menu
export function showTasks(){
    const taskField = document.querySelector('#task-field')
    if(project.length > 0 || todoSelector == home){
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
            removeProject(i, todoSelector)
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
            todoSelector = project[currentIndex].todos
        }
    })
}
//

function selectProject(){
    const projectBtn = document.querySelectorAll('.btn-project')
    projectBtn.forEach((p,i)=>{
        p.onmouseup = () => {
            currentProject = project[i].title
            currentIndex = i
            currentProjectH1.innerHTML = currentProject
            todoSelector = project[currentIndex].todos
            clearTasks()
            taskDOM(todoSelector)
            addListeners(todoSelector)
        }
    })
}
//Listeners to open the project menu and add projects
const title = document.querySelector('#project-title')
const openProject = document.querySelector('#open-project')

openProject.addEventListener('mouseup', projectListener)
export function projectListener(){console.log('patos funcionando')
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
        if(patterns.title.test(title.value) === true){
            currentProject = title.value
            currentProjectH1.innerHTML = currentProject
            editProject.value = currentProject
            editProject.classList.add('active')
            projectInfo.classList.remove('active')
            openProject.classList.add('active')
            addProject(currentProject, [])
            clearTasks()
            taskDOM(todoSelector)
            addListeners(todoSelector)
            projectDOM()
        }    
    }
}

export * from './Projects'