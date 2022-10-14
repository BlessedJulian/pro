import express from "express"
import env from "dotenv"
import { errorHandler } from "."

const app = express()

env.config()


app.all('*', (req, res) => {

    errorHandler(404, 1, 'page not found')
})





app.listen(process.env.PORT, (error) => {

    if(error) console.log({message: 'connection failed'})

    console.log(`app started, running on port ${process.env.PORT}......`)
})