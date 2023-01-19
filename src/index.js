import _, { add, head, times } from 'lodash';
import './style.css';

import {UI} from './ui.js'
import { arrayBuffer } from 'stream/consumers';

const ToDoList = () => {

const list = [] 

const ToDo = (title, description, dueDate, priority) => {   
    return {title, description, dueDate, priority}
}

const makeToDos = (title, description, dueDate, priority) => {

    const todo = ToDo(title, description, dueDate, priority)   
    list.push(todo)
    return {list, title, description, dueDate, priority}
}

const removeToDos = () => {
    const index = list.find(item => item.title)
    if(index !== -1){
        list.splice(index, 1)
    }  
 }

 return {list, makeToDos, removeToDos}
}

const ProjectList = () => {

const listOfProjects = []

const Project = (id, ToDoList) => {
    return {id, ToDoList}
}

const makeProject = (id) => {
    const newProject = Project(id, ToDoList)
    listOfProjects.push(newProject)
    return newProject
}

const removeProject = (id) => {
    const index = listOfProjects.findIndex(project => project.id === id)
    if(index !== -1){
        listOfProjects.splice(index, 1)
    }
  
}
 return {listOfProjects, makeProject, removeProject}
}

const project = ProjectList()


project.makeProject('default project')


//What's the next step? To create a default project and make it so that the user can add and remove projects.
// Users should be able to create new projects and choose which project their to dos should go into.

function newProject(name) {     //creates new projects
 return project.makeProject(name)
}

const sidebar = document.querySelector('.sidebar')


for(let i = 0; i < project.listOfProjects.length; i++){
    const projectSidebar = document.createElement('div')
    projectSidebar.innerHTML = project.listOfProjects[i].id
    
    sidebar.appendChild(projectSidebar)
}

const main = document.querySelector('.main')

const input = document.createElement('input')
const addBtn = document.createElement('button')

input.classList.add('input')
addBtn.classList.add('addBtn')

addBtn.textContent ='Add'
main.appendChild(input)
main.appendChild(addBtn)

console.log(project.makeProject('default project').ToDoList())

// const button = document.createElement('button')
// button.textContent = 'add Project'

// const container = document.querySelector('.container')
// container.appendChild(button)

// button.addEventListener('click', () => {
//     const name = prompt('project name')
//     project.makeProject(name)
   
//     console.log(project.listOfProjects)
// })

// const removeBtn = document.createElement('button')
// removeBtn.textContent = 'remove Project'
// removeBtn.classList.add('remove')

// removeBtn.addEventListener('click', ()=> {
//     const name = prompt('name')
//     project.removeProject(name)
//     console.log(project.listOfProjects)
// })

// container.appendChild(removeBtn)
