const imagemin = require("imagemin");
const imageminPngQuant = require('imagemin-pngquant');
const sendJsonResponse = require('../sendJsonResponse').sendJSONResponse;

const validResults = res => (err, data) => {
    if (err) return sendJsonResponse(res, 400, err);

    if (!data || data.length === 0) {
        return sendJsonResponse(res, 404, { message: "No any found" })
    }

    return sendJsonResponse(res, 200, data)

};

const createObj = (model, data, res) => {
    model.create(data, (err, milk) => {
        if (err) return sendJsonResponse(res, 400, err);

        if (!milk) return sendJsonResponse(res, 400, { message: "Something go wrong" });

        return sendJsonResponse(res, 200, { message: "Added successfully"})
    })
};

module.exports.getAll = (req, res, model) => {
    const qs = req.query.name;

    if (qs !== undefined) {
        model
            .find({name: {$regex: new RegExp('^' + qs), $options: 'i'}})
            .exec(validResults(res))
    } else {
        model
            .find()
            .exec(validResults(res))
    }
};

module.exports.addOne = (req, res, model) => {
    const data = req.body;
    if (data.image === undefined) {
        return createObj(model, data, res)
    }

    const buffer = Buffer.from(data.image);

    imagemin.buffer(buffer, {
        plugins: [imageminPngQuant({quality: '65-80'})]
    }).then(buffer => {
        data.image = Array.from(buffer);

        createObj(model, data, res)
    })
};