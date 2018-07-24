module.exports.sendJSONResponse = (res, statusCode, msg) => {
    res.status(statusCode),
    res.json(msg)
}