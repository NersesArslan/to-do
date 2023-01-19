import {ToDo} from './index.js'
import { Collection } from './project.js'


// const projectBtn = document.querySelector('.addProject')
// const projectList = document.querySelector('.project-list')

// const container = document.querySelector('.projectContainer')

// const deleteBtn = document.querySelector('.deleteBtn')
// deleteBtn.addEventListener('click', () => {
//  container.remove()
// })


// function test() {

// projectBtn.addEventListener('click', () => {
//    const projectContainer = document.createElement('div')
//    projectContainer.classList.add('projectContainer')


//     const projectName = document.createElement('input')
//     projectName.classList.add('projectName')

//     const addProjectBtn = document.createElement('button')
//     addProjectBtn.classList.add('addProjectBtn')
//     addProjectBtn.textContent = '+'

//     addProjectBtn.addEventListener('click', () => {
//         const deleteBtn = document.createElement('button')
//         deleteBtn.classList.add('deleteBtn')
//         deleteBtn.textContent = 'x'

//         projectContainer.innerHTML = ''
//         projectContainer.textContent = projectName.value
//         projectContainer.appendChild(deleteBtn)

//         deleteBtn.addEventListener('click', () => {
//             projectContainer.remove()
//         })
//     })

    
//     projectContainer.appendChild(projectName)
//     projectContainer.appendChild(addProjectBtn)

//     projectList.appendChild(projectContainer)
// })

// }


// test()

/*I am able to make a default projects and dynamically create new project divs in the sidebar with
JS DOM manipulation. 

Now I have to figure out how to render a to do list in each project.

I know how to make a simple to do list. But how do I render a new one for each project (for the 
default and newly created ones)?

I can figure this out by myself. I don't think it's that hard. It must have the same logic for
switching tabs in the restaurant page. 

The main thing that's bugging me is not knowing how to make use of my Project and ToDo factory 
functions in the process.

*/ 


