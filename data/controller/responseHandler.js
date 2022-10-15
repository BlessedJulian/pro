export const responseHandler = (req, res, statusCode, responseCode, responseMessage) => {

    return res.status(statusCode).send({responseCode, responseMessage})
}