import { taskDOM , clearTasks} from "./Todos";
import { createTask, removeTodo, addTodo, project, addProject, removeProject  } from './Task'
//Add project lists
const currentProjectH1 = document.querySelector('#current-project')
export let currentProject = ''
export let currentIndex = 0
const remProject = []
 
let projects = []
export function projectDOM(){
    const projectContainer = document.querySelector('#projects')
    const projectDiv = document.querySelector('#project-div')
    const title = document.querySelector('#project-title')
    currentProjectH1.innerText = currentProject
    addProject(title.value, [])
    console.log(currentProject)
    for(let i=0; i<project.length; i++){
        if(!projects[i]){
        currentIndex = i
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

function deleteProject(){
    remProject.forEach((btn,i)=>{
        btn.onmouseup = ()=> {console.log('caca')
            btn.parentNode.remove()
            remProject.splice(i,1)
            removeProject(i)
            projects.splice(i,1)
        }
    })
}
//
function selectProject(){
    projects.forEach((p,i)=>{
        p.onmouseup = () => {
            currentProject = project[i].title
            currentIndex = i
            currentProjectH1.innerHTML = currentProject
            clearTasks()
            taskDOM()
        }
    })
}
//
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
    const addProject = document.querySelector('#add-project')
    addProject.onmouseup = ()=>{
        currentProject = title.value
        editProject.value = title.value
        editProject.classList.add('active')
        projectInfo.classList.remove('active')
        openProject.classList.add('active')
        projectDOM()
    }
}
