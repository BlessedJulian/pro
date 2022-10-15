import express from "express"
import env from "dotenv"
import mongoose from 'mongoose'
import bodyParser from "body-parser"
import { errorHandler } from "../data/controller/errorHandler.js"
import { USERS } from "./Route/userRoute.js"

const app = express()

env.config()

app.use(express.json())



app.use('/api/v2/users', USERS.router)


app.all('*', (req, res) => {

    errorHandler(req, res, 404, 1,' page not found')
})


// database connection
mongoose.connect(process.env.DB_CONNECT, (error) => {
    
    if(error) console.log(error.message)

    console.log('DB connected......')
})


app.listen(process.env.PORT, (error) => {

    if(error) console.log({message: error.message})

    console.log(`app started, running on port ${process.env.PORT}......`)
})