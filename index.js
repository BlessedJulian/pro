import express from "express"
import env from "dotenv"

const app = express()

env.config()





app.listen(process.env.PORT, (error) => {

    if(error) console.log({message: 'connection failed'})

    console.log(`app started, running on port ${process.env.PORT}......`)
})