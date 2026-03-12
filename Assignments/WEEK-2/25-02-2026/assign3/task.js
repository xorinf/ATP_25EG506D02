import {
  validateDueDate,
  validatePriority,
  validateTitle,
} from "./validator.js";

export let task = [];
export function addTask(title, priority, dueDate) {
  if (
    validateTitle(title) &&
    validateDueDate(dueDate) &&
    validatePriority(priority)
  ) {
    console.log("inputs validated!");
    let status = false;
    task.push({ title, priority, dueDate, status });
    return true;
  }
  return false;
}
export function getAllTasks() {
  return task;
}
export function completeTask(taskId) {
  task[taskId].status = true;
  return task[taskId];
}
