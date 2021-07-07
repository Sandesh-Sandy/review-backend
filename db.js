require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = () => {
    mongoose.connect(process.env.DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    }).then(() => {
        console.log('DB Connected')
    }).catch((err) => {
        console.log(err.message)
    })
}

module.exports = connectDB