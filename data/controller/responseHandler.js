export const responseHandler = (req, res, statusCode, responseCode, message, responseMessage) => {

    return res.status(statusCode).send({responseCode, message, responseMessage})
}