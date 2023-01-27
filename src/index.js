import _, { add, head, times } from "lodash";
import "./style.css";

import { UI } from "./ui.js";
import { arrayBuffer } from "stream/consumers";
import { openStdin } from "process";

const projectsContainer = document.querySelector("[data-projects]");
const newProjectForm = document.querySelector("[data-new-list-form]");
const newProjectInput = document.querySelector("[data-new-list-input]");
const deleteProjectButton = document.querySelector("[data-delete-button]");
const projectDisplayContainer = document.querySelector(
  "[data-project-display-container]"
);
const projectTitleElement = document.querySelector(".project-title");
const tasksContainer = document.querySelector("[data-tasks]");
const taskTemplate = document.getElementById("task-template");
const newToDoForm = document.querySelector("[data-todo-form]");
const newToDoTitle = document.querySelector("[data-title-input]");
const newToDoDescription = document.querySelector("[data-description-input]");
const deleteToDo = document.querySelector("[data-delete-todo]");

const LOCAL_STORAGE_PROJECT_KEY = "task.projects";
const LOCAL_STORAGE_SELECTED_PROJECT_KEY = "task.selectedProjectId";

let projects =
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];
let selectedProjectId = localStorage.getItem(
  LOCAL_STORAGE_SELECTED_PROJECT_KEY
);

projectsContainer.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "li")
    selectedProjectId = e.target.dataset.projectId;
  saveAndRender();
});

tasksContainer.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "input") {
    const selectedProject = projects.find(
      (project) => project.id === selectedProjectId
    );
    const selectedToDo = selectedProject.tasks.find(
      (todo) => todo.id === e.target.id
    );
    selectedToDo.complete = e.target.checked;
    save();
  }
});

deleteToDo.addEventListener("click", (e) => {
  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );
  selectedProject.tasks = selectedProject.tasks.filter(
    (task) => !task.complete
  );
  saveAndRender();
});

deleteProjectButton.addEventListener("click", (e) => {
  projects = projects.filter((project) => project.id !== selectedProjectId);
  selectedProjectId = null;
  saveAndRender();
});

newProjectForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const projectName = newProjectInput.value;
  if (projectName == null || projectName === "") return;
  const project = createProject(projectName);
  newProjectInput.value = null;
  projects.push(project);
  saveAndRender();
});

newToDoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const toDoName = newToDoTitle.value;
  const description = newToDoDescription.value;
  if (toDoName == null || toDoName === "") return;
  const todo = createToDo(toDoName, description);
  newToDoTitle.value = null;
  newToDoDescription.value = null;
  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );
  selectedProject.tasks.push(todo);

  saveAndRender();
});

function createProject(name) {
  return { id: Date.now().toString(), name: name, tasks: [] };
}

function createToDo(name, description) {
  return {
    id: Date.now().toString(),
    name: name,
    description: description,
    complete: false,
  };
}

function save() {
  localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(projects));
  localStorage.setItem(LOCAL_STORAGE_SELECTED_PROJECT_KEY, selectedProjectId);
}

function saveAndRender() {
  save();
  render();
}

function render() {
  clearElement(projectsContainer);
  renderLists();

  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );
  if (selectedProjectId == null) {
    projectDisplayContainer.style.display = "none";
  } else {
    projectDisplayContainer.style.display = "";
    projectTitleElement.innerText = selectedProject.name;
    clearElement(tasksContainer);
    renderToDos(selectedProject);
  }
}

function renderToDos(selectedProject) {
  selectedProject.tasks.forEach((task) => {
    const taskElement = document.importNode(taskTemplate.content, true);
    const checkbox = taskElement.querySelector("input");
    checkbox.id = task.id;
    checkbox.checked = task.complete;
    const title = taskElement.querySelector("h4");
    title.append(task.name);
    
    const label = taskElement.querySelector('label')
    label.append(task.description)

    tasksContainer.appendChild(taskElement);
  });
}

function renderLists() {
  projects.forEach((project) => {
    const projectElement = document.createElement("li");
    projectElement.dataset.projectId = project.id;
    projectElement.classList.add("project-name");
    projectElement.innerText = project.name;
    if (project.id === selectedProjectId)
      projectElement.classList.add("active-project");
    projectsContainer.appendChild(projectElement);
  });
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

render();
