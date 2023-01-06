import _, { head } from 'lodash';
import './style.css';
import test from './print.js';



const header = document.createElement('h1')
const input = document.createElement('input')
const button = document.createElement('button')





header.textContent = 'To Do'
button.textContent = 'Add To Do'

header.classList.add('header')
input.classList.add('myInput')
button.classList.add('myBtn')



document.body.appendChild(header)
document.body.appendChild(input)
document.body.appendChild(button)



button.addEventListener('click', () => {
   const myToDo = document.createElement('p')
   myToDo.textContent = input.value
   document.body.appendChild(myToDo)
   input.value = ''

})

test()