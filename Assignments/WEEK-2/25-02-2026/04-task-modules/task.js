import {
  validateDueDate,
  validatePriority,
  validateTitle,
} from "./validator.js";

export let tasks = [];
export function addTask(title, priority, dueDate) {
  if (
    validateTitle(title) &&
    validateDueDate(dueDate) &&
    validatePriority(priority)
  ) {
    console.log("inputs validated!");
    let status = false;
    tasks.push({ title, priority, dueDate, status });
    return true;
  }
  return false;
}
export function getAllTasks() {
  return tasks;
}
export function completeTask(taskId) {
  tasks[taskId].status = true;
  return tasks[taskId];
}
