import {ToDo} from './index.js'

export function Project() {

   const list = []

   const Projects = (title, ToDo) => {
      return { title, ToDo }
   }

   function addProject(title, ToDo) {
      const newProject = Projects(title, ToDo)
      list.push(newProject)
   }

   const removeProject = (title) => {
      const index = list.findIndex(todo => todo.title === title)
          if(index !== -1){
      list.splice(index, 1)
  }
   }
  return {list, addProject, removeProject}

}
