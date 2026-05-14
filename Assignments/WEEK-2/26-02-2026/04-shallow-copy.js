/*
Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
-------------------------------------------------------
🧪 Given Data:
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

🎯 Task
    1. Create a shallow copy of user
    2. Change:
          i. name in the copied object
          ii. preferences.theme in the copied object
          iii .Log both original and copied objects
          iv. Observe what changes and what doesn’t

*/
const user = {
  id: 101,
  name: "Ravi",
  preferences: {
    theme: "dark",
    language: "en",
  },
};
//1
let shallowUserCopy = {...user}

console.log(user)
console.log(shallowUserCopy)

console.log("Q2 \n")
//2
//i
shallowUserCopy.name = "Ramu";
//ii
shallowUserCopy.preferences.theme = "StarWars"
//iii
console.log("\n", user, "\n", shallowUserCopy)
//iv

// the copy also changes the orignal one the reference is stored in the obj's

