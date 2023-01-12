import _, { add, head } from 'lodash';
import './style.css';
import {Project } from './project.js'



 export default function ToDo() {
    const list = []

    const toDos = (title, description) => {
        return {title, description}
}

const addToDos = (title, description) => {
    const newToDo =  toDos(title, description)
    list.push(newToDo)
}

    const removeToDos = (title) => {
        const index = list.findIndex(todo => todo.title === title)
            if(index !== -1){
        list.splice(index, 1)
    }
}
 return {
    list, addToDos, removeToDos
 }
}

