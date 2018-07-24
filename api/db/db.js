const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/goodfarm')
    .then(() => {
        console.log("MongoDB connected")
    })
    .catch((err) => {
        console.log(err)
    })

require('./models/users')