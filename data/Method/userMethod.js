import { responseHandler } from "../controller/responseHandler.js"
import { studentDetails } from "../Model/userModel.js"

export const  userMethod = async(req, res) => {

    try {

        const {username, address, phone} = req.body

        const newDetail = await studentDetails.create({
            username,
            address,
            phone
        })

            responseHandler(req, res, 200, 0, 'record created', newDetail)
        
    } catch (error) {
        
    }
 }