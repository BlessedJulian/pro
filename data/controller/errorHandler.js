export const errorHandler = (req, res, statusCode, errorCode, errorMessage)  => {

     return res.status(statusCode).send({errorCode, errorMessage})
}