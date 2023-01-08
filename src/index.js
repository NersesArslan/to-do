import _, { add, head } from 'lodash';
import './style.css';
import test from './print.js';


const btn = document.createElement('button')
const input = document.createElement('input')
const todoContainer = document.querySelector('.toDoContainer')
const main = document.querySelector('.main')

const addToDo = document.querySelector('.addToDo')

input.classList.add('myInput')
btn.classList.add('addBtn')
btn.textContent = 'Add'

addToDo.addEventListener('click', () => {
    todoContainer.innerHTML = ''
    
    todoContainer.appendChild(input)
    todoContainer.appendChild(btn)
})

btn.addEventListener('click', () => {
    const todo = document.createElement('p')
    todo.textContent = input.value
    main.appendChild(todo);
    input.value = ''
})
