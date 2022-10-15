import express from "express"
import { userMethod } from "../Method/userMethod.js"

 const router = express.Router()



 router
 .post("/createUser", userMethod )




 export const USERS = {
    router
 }