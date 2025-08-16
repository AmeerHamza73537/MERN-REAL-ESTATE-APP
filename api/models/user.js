import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String, // Datatype should be string
        required: true, // It is required
        unique: true, // It should be unique
    },
    email: {
        type: String, // Datatype should be string
        required: true, // It is required
        unique: true, // It should be unique
    },
    password: {
        type: String, // Datatype should be string
        required: true, // It is required
    }
}, {timestamps: true})

const user = mongoose.model('User', userSchema)
export default user
// You should only write User with capital U and in singular form because the mongodb will turn it into Users when more than 1 user registers


// Time Stamp will tell the MONGODB to record 2 things:
// 1- Time of Creation of the User
// 2- Time of Update of the User

// By using this, we can sort them by time and by being latest