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
let sh_userCopy = {...user}

console.log(user)
console.log(sh_userCopy)

console.log("Q2 \n")
//2
//i
sh_userCopy.name = "Ramu";
//ii
sh_userCopy.preferences.theme = "StarWars"
//iii
console.log("\n", user, "\n", sh_userCopy)
//iv

// the copy also changes the orignal one the reference is stored in the obj's

