import { errorHandler } from "../controller/errorHandler.js"
import { responseHandler } from "../controller/responseHandler.js"
import { StudentDetails } from "../Model/userModel.js"
import bcrypt from 'bcrypt'

export const  userMethod = async(req, res) => {

    try {

        const {username, password} = req.body

        //using bcrpt to hash users password
        
        const hashed = await bcrypt.hash(password, 10)

    //    return  res.send(hashed)



        const newDetail = await StudentDetails.create(

            {
            username,
            password: hashed
            
            }
        )

            responseHandler(req, res, 200, 0, 'record created', newDetail)
        
    } catch (error) {


          errorHandler(req, res, 400, 1, error.message)


    }
 }





 