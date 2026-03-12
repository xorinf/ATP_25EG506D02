import exp from 'express'
import { UserModel } from '../models/UserModel.js'
import { hash, compare } from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { verifyToken } from '../middleware/verifyToken.js'
// create mini express route
export const userApp = exp.Router()
const { sign } = jwt


// DEFINE USER REst API
userApp.post("/users", async (request, response) => {
    // get new user obj
    const newUser = request.body;
    const hashedPassword = await hash(newUser.password, 10)
    newUser.password = hashedPassword;
    // create user doc
    const newUserDocument = new UserModel(newUser);
    //save
    await newUserDocument.save()
    // send res
    response.status(201).json({ message: "user created!" })

})

userApp.get("/users",verifyToken, async (request, response) => {
    let users = await UserModel.find()
    response.status(200).json({ message: "users", payload: users })
})

userApp.get("/users/:id", async (request, response) => {
    const uid = request.params.id
    const user = await UserModel.findById(uid)
    if (user == null) {
        return response.status(404).json({ message: "user not found!" })
    }
    response.status(200).json({ message: "user found!", payload: user })

})

userApp.put("/users/:id",verifyToken, async (request, response) => {
    const modifiedUser = request.body;
    const uid = request.params.id;
    const hashedPassword = await hash(modifiedUser.password, 10)
    modifiedUser.password = hashedPassword;
    /* 
    const newUser = request.body;
    const hashedPassword = await hash(newUser.password, 10)
    newUser.password = hashedPassword;
    */
    const updatedUser = await UserModel.findOneAndUpdate({ _id: uid }, { $set: { ...modifiedUser } }, { returnDocument: 'after', runValidators: true })

    if (updatedUser == null) {
        return response.status(404).json({ message: "User not found!" })
    }
    response.status(200).json({ message: "User modified!", payload: updatedUser })

})

userApp.delete("/users/:id", async (request, response) => {
    const uid = request.params.id;
    const deleted = await UserModel.findByIdAndDelete(uid)
    if (deleted == null) {
        return response.status(404).json({ message: "User not found!" })
    }
    response.status(200).json({ message: "User deleted!", payload: deleted })

})
userApp.delete("/users", async (request, response) => {
    const uid = request.params.id;
    const deleted = await UserModel.deleteMany({})
    if (deleted == null) {
        return response.status(404).json({ message: "User not found!" })
    }
    response.status(200).json({ message: "Users deleted! :)", payload: deleted })

})

userApp.post("/auth", async (request, response) => {
    const { email, password } = request.body
    const foundMail = await UserModel.findOne({ email: email })
    if (!foundMail) {
        return response.status(404).json({ message: "Invalid email" })
    }
    const isValidPass = await compare(password, foundMail.password)
    if (!isValidPass) {
        return response.status(400).json({ message: "Invalid Password" })
    }

    const signedToken = sign({ email: foundMail.email }, 'charlie kirk', { expiresIn: 60 })

    // return response.status(200).json({message : "authenticated!", Token : signedToken})
    response.cookie("token", signedToken, { httpOnly: true, sameSite: "lax", secure: false })
    response.status(200).json({ message: "login success!", payload: foundMail })
})
