import { or } from "firebase/firestore/lite";

export function validateTitle(titlee = true) {
  try {
    return titlee.length > 3 && titlee;
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
