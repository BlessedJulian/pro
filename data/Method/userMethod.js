import { responseHandler } from "../controller/responseHandler.js"

export const  userMethod = (req, res) => {

    responseHandler(req, res, 200, 0, `congrats u're in `)
 }