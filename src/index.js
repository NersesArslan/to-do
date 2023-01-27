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
const projectTitleElement = document.querySelector("[data-project-title]");
const tasksContainer = document.querySelector("[data-tasks]");

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

function createProject(name) {
  return { id: Date.now().toString(), name: name, tasks: [] };
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
  renderLists() 
  if(selectedProjectId == null) {
    projectDisplayContainer.style.display = 'none'
  } else {
    projectDisplayContainer.style.display = ''
  }
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
