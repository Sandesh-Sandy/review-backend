const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    title: String,
    desc: String,
    rating: Number,
    name: String,
    url: String
})

module.exports = review = mongoose.model('Review', reviewSchema)