import _, { add, head } from 'lodash';
import './style.css';
import test from './print.js';



const todoContainer = document.querySelector('.toDoContainer')
const main = document.querySelector('.main')
const addToDo = document.querySelector('.addToDo')

const form = document.createElement('form')


const titleInput = document.createElement('input')
const titleLabel = document.createElement('label')
const descriptionInput = document.createElement('input')
const descriptionLabel = document.createElement('label')
const dueDateLabel = document.createElement('label')
const dueDateInput = document.createElement('input')

const priorityLabel = document.createElement('p')
const priority = document.createElement('select')

titleLabel.textContent = 'Title'
descriptionLabel.textContent = 'Description'
dueDateLabel.textContent = 'Due Date'
priorityLabel.textContent = 'Priority'


form.setAttribute('method', 'post')
titleInput.classList.add('titleInput')
titleLabel.classList.add('titleLabel')
dueDateInput.classList.add('dueDateInput')


form.appendChild(titleLabel)
form.appendChild(titleInput)
form.appendChild(descriptionLabel)
form.appendChild(descriptionInput)
form.appendChild(dueDateLabel)
form.appendChild(dueDateInput)
form.appendChild(priorityLabel)
form.appendChild(priority)

addToDo.addEventListener('click', () => {
    todoContainer.innerHTML = ''
    todoContainer.appendChild(form)
})

