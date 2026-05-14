export function validateTitle(taskTitle = "") {
  try {
    return taskTitle.length > 3 && taskTitle;
  } catch (err) {}
}

export function validatePriority(priority = 0) {
  if (
    priority == "High" ||
    priority == "HIGH" ||
    priority == "Med" ||
    priority == "MED" ||
    priority == "Low" ||
    priority == "LOW"
  ) {
    return true;
  } else {
    return false;
  }
  //   if (priority === '') {
  //     console.log("High Priority");
  //   } else if (priority.priority === 2) {
  //     console.log("Medium Priority");
  //   } else if (priority.priority === 3) {
  //     console.log("Low priority");
  //   } else {
  //     console.log("Invalid Task");
  //   }
}

export function validateDueDate(date) {
  let date_today = 5;
  //   let due_date = 29;
  return date_today < date;
}
