import exp from 'express'

export const userApp = exp.Router();


let users = []
userApp.get("/users", (request, response) => {
  response.json({ message: "users", payload: users });
});
userApp.get("/users/:id", (request, response) => {
  let idofURL = Number(request.params.id);
  let index = 0;
  if (idofURL) {
    index = users.findIndex((obj) => {
      return obj.id === idofURL;
    });
  }
  if (index == -1) {
    return response.json({ message: "user not found!" });
  }
  return response.json({ message: "The sent!", payload: users[index] });
});

userApp.post("/users", (request, response) => {
  const new_vae = request.body;
  users.push(new_vae);
  response.json({ message: "User Created" });
});

userApp.put("/users", (request, response) => {
  let modifieduser = request.body;
  let index = users.findIndex((userObj) => {
    return userObj.id == modifieduser.id;
  });
  if (index === -1) {
    return response.json({ message: "User not found" });
  }
  users.splice(index, 1, modifieduser);
  response.json({ message: "The users are modidied!" });
});

userApp.delete("/users/:id", (request, response) => {
  let idofURL = Number(request.params.id);
  let index = users.findIndex((obj) => {
    return obj.id === idofURL;
  });
  if (index === -1) {
    return response.json({ message: "user Not Found" });
  }
  users.splice(idofURL, 1);
  response.json({ message: "user deleted" });
});