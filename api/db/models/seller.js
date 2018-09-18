const mongoose = require('mongoose')
const Schema = require('mongoose').Schema
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const payload = require('../../../secret.json').payload

const Seller = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    hash: String,
    salt: String
})

Seller.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex')
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex')
}

Seller.methods.checkPassword = function(password) {
    return crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex') === this.hash
}

Seller.methods.generateJWT = function() {
    const date = new Date();
    date.setDate(date.getDate + 7)

    const { _id, email } = this

    jwt.sign({
        _id, email,
        exp: parseInt(date.getDate() / 1000)
    }, payload)
}

mongoose.model("Seller", Seller)