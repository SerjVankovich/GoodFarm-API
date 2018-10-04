module.exports.defaultSchema = {
    title: {type: String, required: true},
    price: {type: Number, required: true},
    description: String,
    consist: String,
    quantity: {type: String, required: true},
    image: Buffer
};