export const errorHandler = (req, res, statusCode, errorCode, errorMessage)  => {

     res.status(statusCode).send(errorCode, errorMessage)
}