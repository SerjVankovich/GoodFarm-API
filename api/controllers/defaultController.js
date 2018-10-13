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

const createObj = model => (data, res) => {
    model.create(data, (err, milk) => {
        if (err) return sendJsonResponse(res, 400, err);

        if (!milk) return sendJsonResponse(res, 400, { message: "Something go wrong" });

        return sendJsonResponse(res, 200, { message: "Added successfully"})
    })
};

module.exports.getAll = model => (req, res) => {
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

module.exports.addOne = model => (req, res) => {
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

module.exports.deleteOne = model => (req, res) =>{
    const { id } = req.params;
    if (!id) return sendJsonResponse(res, 404, {message: "No ID param in query"})

    model
        .remove({ _id: id })
        .exec((err, product) => {
            if (err) return sendJsonResponse(res, 400, err);

            return sendJsonResponse(res, 200, product)
        })
};

module.exports.updateOne = model => (req, res) => {
    const { id } = req.params;

    if (!id) return sendJsonResponse(res, 404, {message: "No ID param in query"});

    model
        .findById(id)
        .exec((err, obj) => {
            if (err) return sendJsonResponse(res, 400, err);
            if (!obj) {
                return sendJsonResponse(res, 400, {message: "Set not found"})
            }

            mapPropsToModel(req.body, obj);
            obj.save((err, set) => {
                if (err) return sendJsonResponse(res, 400, err);

                return sendJsonResponse(res, 200, set)
            })
        })
};

const mapPropsToModel = (obj, model) => {
    for (let key in obj) {
        model[key] = obj[key]
    }
};