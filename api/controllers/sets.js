const mongoose = require('mongoose');
const sendJsonResponse = require('../sendJsonResponse').sendJSONResponse;
const imagemin = require('imagemin');
const imageminPngQuant = require('imagemin-pngquant');

const Sets = mongoose.model('Set');



module.exports.getAll = (req, res) => {
    const validResults = function(err, sets) {
        if (err) {
            return sendJsonResponse(res, 400, err)
        }
        if (!sets || sets.length === 0) {
            return sendJsonResponse(res, 404, {
                message: "Sets Not Found"
            })
        }

        sendJsonResponse(res, 200, sets)
    };

    const qs = req.query.name;

    if (qs !== undefined) {
        Sets.find({ name: { $regex: new RegExp('^' + qs), $options: 'i'}})
            .exec(validResults)
    } else {
        Sets.find()
            .exec(validResults)
    }



};

module.exports.addSet = (req, res) => {
    const set = req.body;
    const buffer = Buffer.from(set.image);

    imagemin.buffer(buffer, {
        plugins: [imageminPngQuant({quality: '65-80'})]
    }).then(buffer => {
        set.image = Array.from(buffer);

        Sets.create(set, (err, set) => {
            if (err) return sendJsonResponse(res, 400, err);
            if (!set) {
                return sendJsonResponse(res, 404, {
                    message: "Set has't been saved"
                })
            }

            return sendJsonResponse(res, 200, {
                message: "Set added succesfully"
            })
        })
    });

    //console.log(set);
    /*console.log(__dirname.split(" ").join("\\ "));

    const imageData = fs.readFileSync(`${__dirname}/images/${req.body.name.split(" ").join('_').toLowerCase()}.png`);
    console.log(imageData);

    set.image = imageData; */

};