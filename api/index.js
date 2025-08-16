import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './Routes/user.route.js'
import authRoute from './Routes/auth.route.js'

dotenv.config()
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connected to MONGODB");
}).catch((err)=>{
    console.log(err)
})
const app = express()
app.use(express.json())


app.use('/api/user', userRouter) 
app.use('/api/auth', authRoute)

// Middleware to handle errors
app.use((err,req,res,next)=>{
    const statuscode = err.statusCode || 500
    const message = err.message || 'Internal Serever Error'
    console.log(err);
    
    return res.status(statuscode).json({
        success:false,
        statuscode,
        message
    })
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})

 