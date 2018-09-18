const sendJsonResponse = require('../sendJsonResponse').sendJSONResponse

exports.register = (req, res) => {
    sendJsonResponse(res, 200, {message: "Ok"})
}

exports.login = (req, res) => {
    sendJsonResponse(res, 200, { message: "Login succesfully"})
}