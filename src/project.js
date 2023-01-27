import { add } from "lodash";
import { ToDo } from "./index.js";

// const newToDoForm = document.querySelector("[data-todo-form]");
// const newToDoInput = document.querySelector("[data-todo-input]");
// const newToDoList = document.querySelector("[data-list]");
// const dateInput = document.querySelector("[data-date-input]");
// const descriptionInput = document.querySelector("[data-description-input]");
// const deleteButton = document.querySelector("[data-delete-todo-button]");
// const priorityInput = document.getElementById("priority");
// const taskTemplate = document.getElementById("task-template");

// function createToDo(title, description, date, priority) {
//   return { id: Date.now().toString(), title, description, date, priority };
// }

// let lists = [];

// function clearElement(element) {
//   while (element.firstChild) {
//     element.removeChild(element.firstChild);
//   }
// }

// function render() {
//   clearElement(newToDoList);
//   lists.forEach((list) => {
//     const divElement = document.createElement("div");
//     const headerElement = document.createElement("h4");
//     const toDoElement = document.createElement("p");
//     const dateElement = document.createElement("p");
//     const priorityElement = document.createElement('span')

//     headerElement.innerText = list.title;
//     toDoElement.innerText = list.description;
//     dateElement.innerText = list.date;
//     priorityElement.innerText = list.priority

//     divElement.appendChild(headerElement);
//     divElement.appendChild(toDoElement);
//     divElement.appendChild(dateElement);
//     divElement.appendChild(priorityElement)
//     newToDoList.appendChild(divElement);
//   });
// }

// newToDoForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const toDoName = newToDoInput.value;
//   const date = dateInput.value;
//   const description = descriptionInput.value;
//   const priority = priorityInput.value;
//   if (toDoName == null || toDoName === "") return;
//   const todo = createToDo(toDoName, description, date, priority);
//   lists.push(todo);
//   newToDoInput.value = null;
//   dateInput.value = null;
//   descriptionInput.value = null;
//   console.log(description);
//   console.log(date);
//   console.log(toDoName);
//   console.log(priority);
//   render();
// });

// const newToDoForm = document.querySelector("[data-todo-form]");
// const newToDoInput = document.querySelector("[data-todo-input]");
// const listContainer = document.querySelector("[data-list]");
// const deleteToDoButton = document.querySelector("[data-delete-todo-button]");

// const LOCAL_STORAGE_TODO_KEY = "todo.lists";
// const LOCAL_STORAGE_SELECTED_TODO_ID_KEY = "todo.selectedToDoId";
// let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TODO_KEY)) || [];
// let selectedToDoId = localStorage.getItem(LOCAL_STORAGE_SELECTED_TODO_ID_KEY);

// listContainer.addEventListener("click", (e) => {
//   if (e.target.tagName.toLowerCase() === "li") {
//     selectedToDoId = e.target.dataset.listId;
//     saveAndRender();
//   }
// });

// deleteToDoButton.addEventListener("click", (e) => {
//   lists = lists.filter((list) => list.id !== selectedToDoId);
//   selectedToDoId = null;
//   saveAndRender();
// });

// newToDoForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const toDoName = newToDoInput.value;
//   if (toDoName == null || toDoName === "") return;
//   const list = createToDo(toDoName);
//   lists.push(list);
//   newToDoInput.value = null;
//   saveAndRender();
// });

// function createToDo(name) {
//   return { id: Date.now().toString(), name: name, tasks: [] };
// }

// function saveAndRender() {
//   save();
//   render();
// }

// function save() {
//   localStorage.setItem(LOCAL_STORAGE_TODO_KEY, JSON.stringify(lists));
//   localStorage.setItem(LOCAL_STORAGE_SELECTED_TODO_ID_KEY, selectedToDoId);
// }

// function render() {
//   clearElement(listContainer);
//   lists.forEach((list) => {
//     const listElement = document.createElement("li");
//     listElement.dataset.listId = list.id;
//     listElement.classList.add("todo-name");
//     listElement.innerText = list.name;
//     if (list.id === selectedToDoId) listElement.classList.add("active-todo");
//     listContainer.appendChild(listElement);
//   });
// }

// function clearElement(element) {
//   while (element.firstChild) {
//     element.removeChild(element.firstChild);
//   }
// }

// render();

// const sidebar = document.querySelector(".sidebar");
// const projectList = document.querySelector(".project-list");

// //This displays all objects in listOfProjects array in the UI
// for (let i = 0; i < project.listOfProjects.length; i++) {
//   const newProjects = document.createElement("div");
//   newProjects.innerHTML = project.listOfProjects[i].id;

//   projectList.appendChild(newProjects);
// }

// const addProject = document.querySelector(".addProject");

// addProject.addEventListener("click", () => {
//   const projectContainer = document.createElement("div");
//   projectContainer.classList.add("projectContainer");

//   const projectName = document.createElement("input");
//   projectName.classList.add("projectName");

//   const addProjectBtn = document.createElement("button");
//   addProjectBtn.classList.add("addProjectBtn");
//   addProjectBtn.textContent = "+";

//   addProjectBtn.addEventListener("click", () => {
//     const deleteBtn = document.createElement("button");
//     deleteBtn.classList.add("deleteBtn");
//     deleteBtn.textContent = "x";

//     projectContainer.innerHTML = "";
//     projectContainer.textContent = projectName.value;
//     projectContainer.appendChild(deleteBtn);

//     deleteBtn.addEventListener("click", () => {
//       projectContainer.remove();
//     });
//     newProject(projectName.value);
//     console.log(project.listOfProjects);
//   });
//   projectContainer.appendChild(projectName);
//   projectContainer.appendChild(addProjectBtn);

//   projectList.appendChild(projectContainer);
// });
