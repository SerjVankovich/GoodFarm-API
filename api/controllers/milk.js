const mongoose = require('mongoose');
const sendJsonResponse = require('../sendJsonResponse').sendJSONResponse;

const Milk = mongoose.model("Milk");

module.exports.getAll = function (req, res) {
    const validResults = (err, milk) => {
        if (err) return sendJsonResponse(res, 400, err);

        if (!milk || milk.length === 0) {
            return sendJsonResponse(res, 404, { message: "No milk product found" })
        }

        return sendJsonResponse(res, 200, milk)

    };

    const qs = req.query.name;

    if (qs !== undefined) {
        Milk
            .find({ name: { $regex: new RegExp('^' + qs), $options: 'i'}})
            .exec(validResults)
    } else {
        Milk
            .find()
            .exec(validResults)
    }
};

module.exports.addMilk = (req, res) => {
    const milk = req.body;

    Milk.create(milk, (err, milk) => {
        if (err) return sendJsonResponse(res, 400, err);

        if (!milk) return sendJsonResponse(res, 400, { message: "Something go wrong" })

        return sendJsonResponse(res, 200, { message: "Added successfully"})
    })
}