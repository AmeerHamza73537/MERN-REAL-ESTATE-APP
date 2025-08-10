import bcryptjs from 'bcryptjs'
import User from "../models/user.js"

export const signup = async (req, res, next) => {
    try {
        const { username, email, password } = req.body
        const hashPassword = bcryptjs.hash(password, 12)
        const newUser = new User({ username, email, hashPassword})
        await newUser.save()
        res.status(201).json("New User Created Successfully")
    } catch (error) {
        next(error)
    }


}
